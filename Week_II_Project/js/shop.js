// Dynamic Rendering & Category Processing Core
const CATEGORY_ORDER = ['smartphones', 'smartwatches', 'shirts', 'shoes'];
const CATEGORY_LABELS = {
    smartphones: 'Smartphones',
    smartwatches: 'Smartwatches',
    shirts: 'Shirts',
    shoes: 'Shoes'
};

document.addEventListener("DOMContentLoaded", () => {
    const featuredHook = document.getElementById('featured-products');
    const catalogHook = document.getElementById('shop-catalog-container');

    if (featuredHook) {
        renderGroupedCatalog(globalProductCatalogDataSet, 'featured-products', true);
        initCategoryFilterActions();
    }
    if (catalogHook) {
        renderGroupedCatalog(globalProductCatalogDataSet, 'shop-catalog-container', false);
        initSearchAndSortingEngines();
    }
});

function productCardMarkup(product) {
    return `
        <div class="pro">
            <img src="${product.image}" onclick="routeToTargetProductDetailPage(${product.id})" alt="${product.name}">
            <div class="des" onclick="routeToTargetProductDetailPage(${product.id})">
                <span>${product.brand}</span>
                <h5>${product.name}</h5>
                <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                <h4>$${product.price.toFixed(2)}</h4>
            </div>
            <div class="action-triggers">
                <button data-wishlist-btn data-wishlist-id="${product.id}" onclick="toggleWishlistItemDirectly(${product.id})"><i class="fa-regular fa-heart"></i></button>
                <button onclick="addStandaloneProductToSystemCart(${product.id}, 1)"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    `;
}

function indexProductCardMarkup(product) {
    return `
        <div class="pro clean-index-card" onclick="routeToTargetProductDetailPage(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.name}</h5>
                <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                <h4>$${product.price.toFixed(2)}</h4>
            </div>
            <div class="click-indicator">
                <span>View Specs <i class="fa-solid fa-arrow-right-long"></i></span>
            </div>
        </div>
    `;
}

function renderGroupedCatalog(items, targetContainerId, isIndexPage = false) {
    const target = document.getElementById(targetContainerId);
    if (!target) return;

    target.innerHTML = '';
    const markupGenerator = isIndexPage ? indexProductCardMarkup : productCardMarkup;

    CATEGORY_ORDER.forEach(category => {
        const categoryItems = items.filter(item => item.category === category);
        if (categoryItems.length === 0) return;

        const row = document.createElement('div');
        row.className = 'category-row';
        row.innerHTML = `
            <div class="category-row-header">
                <h3>${CATEGORY_LABELS[category] || category}</h3>
                <a href="shop.html">View All</a>
            </div>
            <div class="pro-container">
                ${categoryItems.map(markupGenerator).join('')}
            </div>
        `;
        target.appendChild(row);
    });
}

function initCategoryFilterActions() {
    const filterBtns = document.querySelectorAll('.cat-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const criteria = e.target.getAttribute('data-filter');
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const featured = document.getElementById('featured-products');
            if (!featured) return;

            if (criteria === 'all') {
                renderGroupedCatalog(globalProductCatalogDataSet, 'featured-products', true);
            } else {
                const categoryItems = globalProductCatalogDataSet.filter(p => p.category === criteria);
                featured.innerHTML = '';
                if (categoryItems.length > 0) {
                    const row = document.createElement('div');
                    row.className = 'category-row single-category-row';
                    row.innerHTML = `
                        <div class="category-row-header">
                            <h3>${CATEGORY_LABELS[criteria] || criteria}</h3>
                        </div>
                        <div class="pro-container">
                            ${categoryItems.map(indexProductCardMarkup).join('')}
                        </div>
                    `;
                    featured.appendChild(row);
                }
            }
        });
    });
}

function initSearchAndSortingEngines() {
    const searchInp = document.getElementById('product-search');
    const sortSelect = document.getElementById('price-sort');

    const internalProcessFilter = () => {
        let currentArray = [...globalProductCatalogDataSet];
        const searchVal = searchInp.value.trim().toLowerCase();

        if (searchVal) {
            currentArray = currentArray.filter(item =>
                item.name.toLowerCase().includes(searchVal) ||
                item.brand.toLowerCase().includes(searchVal) ||
                item.category.toLowerCase().includes(searchVal)
            );
        }

        if (sortSelect.value === 'low-high') {
            currentArray.sort((a, b) => a.price - b.price);
        } else if (sortSelect.value === 'high-low') {
            currentArray.sort((a, b) => b.price - a.price);
        }

        renderGroupedCatalog(currentArray, 'shop-catalog-container', false);
    };

    if (searchInp) searchInp.addEventListener('input', internalProcessFilter);
    if (sortSelect) sortSelect.addEventListener('change', internalProcessFilter);
}