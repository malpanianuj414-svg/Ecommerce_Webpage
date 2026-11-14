// Local Database Persistence Handling Layer
const WISHLIST_STORAGE_KEY = 'ApexStreetwearLocalWishListData';

function getNormalizedWishlistIds() {
    const stored = JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY)) || [];
    return stored
        .map(id => Number(id))
        .filter(id => !Number.isNaN(id));
}

function saveWishlistIds(wishlist) {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
}

function toggleWishlistItemDirectly(id) {
    const targetId = Number(id);
    let wishlist = getNormalizedWishlistIds();

    if (wishlist.includes(targetId)) {
        wishlist = wishlist.filter(item => item !== targetId);
        alert("Product removed from wishlist.");
    } else {
        if (!wishlist.includes(targetId)) {
            wishlist.push(targetId);
        }
        alert("Product saved into matching local wishlist dataset.");
    }

    saveWishlistIds(wishlist);
    updateWishlistButtonStates();
    if (document.getElementById('wishlist-grid')) renderWishlistUI();
}

document.addEventListener("DOMContentLoaded", () => {
    updateWishlistButtonStates();
    if (document.getElementById('wishlist-grid')) renderWishlistUI();
});

function updateWishlistButtonStates() {
    const wishlist = getNormalizedWishlistIds();
    document.querySelectorAll('[data-wishlist-btn]').forEach(button => {
        const productId = Number(button.dataset.wishlistId);
        const isSaved = wishlist.includes(productId);
        button.classList.toggle('active', isSaved);

        const icon = button.querySelector('i');
        if (icon) {
            icon.className = isSaved ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        }
    });
}

function renderWishlistUI() {
    const grid = document.getElementById('wishlist-grid');
    if (!grid) return;

    let wishlistIds = getNormalizedWishlistIds();
    grid.innerHTML = "";

    if (wishlistIds.length === 0) {
        grid.innerHTML = `<p style="padding: 20px; color:#465b52;">No saved records of featured/preferred products in storage container.</p>`;
        return;
    }

    wishlistIds.forEach(id => {
        const product = globalProductCatalogDataSet.find(p => Number(p.id) === Number(id));
        if (product) {
            grid.innerHTML += `
                <div class="wish-card">
                    <img src="${product.image}" alt="">
                    <h5>${product.name}</h5>
                    <h4>$${product.price.toFixed(2)}</h4>
                    <div class="wish-actions">
                        <button class="remove-wish-btn" onclick="toggleWishlistItemDirectly(${product.id})">Remove</button>
                        <button class="add-cart-wish-btn" onclick="addStandaloneProductToSystemCart(${product.id}, 1)">+ Basket</button>
                    </div>
                </div>
            `;
        }
    });
}