// Interactive Thumbnail Switching & Detail Mapping Engine
document.addEventListener("DOMContentLoaded", () => {
    const trackingId = Number(localStorage.getItem('ActiveTargetProductViewDetailID') || 1);
    const detailsObj = globalProductCatalogDataSet.find(p => Number(p.id) === trackingId);

    if (detailsObj) {
        const mainImg = document.getElementById('MainImg');
        const detailBrand = document.getElementById('detail-brand');
        const detailName = document.getElementById('detail-name');
        const detailPrice = document.getElementById('detail-price');
        const detailQty = document.getElementById('detail-qty');
        const detailAddToCart = document.getElementById('detail-add-to-cart');
        const detailDescription = document.querySelector('#prodetails span');
        const smallImgWrappers = document.querySelectorAll('.small-img-col');
        const smallImgs = document.querySelectorAll('.small-img');
        const imageSet = detailsObj.images && detailsObj.images.length ? detailsObj.images : [detailsObj.image];

        mainImg.src = imageSet[0];
        mainImg.alt = detailsObj.name;
        detailBrand.textContent = `${detailsObj.brand} / ${detailsObj.category}`;
        detailName.textContent = detailsObj.name;
        detailPrice.textContent = `$${detailsObj.price.toFixed(2)}`;
        if (detailDescription) {
            detailDescription.textContent = detailsObj.description || 'Premium quality product crafted for comfort, performance, and all-day style.';
        }

        smallImgs.forEach((img, index) => {
            const imageSource = imageSet[index] || imageSet[0];
            const wrapper = smallImgWrappers[index];
            img.src = imageSource;
            img.alt = `${detailsObj.name} view ${index + 1}`;
            if (wrapper) {
                wrapper.classList.toggle('active', index === 0);
                wrapper.onclick = () => {
                    mainImg.src = imageSource;
                    smallImgWrappers.forEach(item => item.classList.remove('active'));
                    wrapper.classList.add('active');
                };
            }
        });

        if (detailAddToCart) {
            detailAddToCart.onclick = () => {
                const qty = parseInt(detailQty.value) || 1;
                addStandaloneProductToSystemCart(detailsObj.id, qty);
            };
        }
    }
});