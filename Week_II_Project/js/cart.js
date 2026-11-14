// Computational Mathematical Matrix Checkout Controls Layout Logic
let clientActiveBasketCart = JSON.parse(localStorage.getItem('ApexStreetwearShopCartData')) || [];

function addStandaloneProductToSystemCart(productId, countQuantity) {
    const productRecord = globalProductCatalogDataSet.find(p => p.id === productId);
    let existingMatch = clientActiveBasketCart.find(item => item.id === productId);

    if (existingMatch) {
        existingMatch.quantity += countQuantity;
    } else {
        clientActiveBasketCart.push({ ...productRecord, quantity: countQuantity });
    }
    commitDataUpdateToBrowserStorage();
    alert("Basket dataset matrix adjusted successfully.");
}

function commitDataUpdateToBrowserStorage() {
    localStorage.setItem('ApexStreetwearShopCartData', JSON.stringify(clientActiveBasketCart));
    renderGlobalCartTotalsSyncCounters();
}

function renderGlobalCartTotalsSyncCounters() {
    const sum = clientActiveBasketCart.reduce((total, cursor) => total + cursor.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = sum);
}

document.addEventListener("DOMContentLoaded", () => {
    renderGlobalCartTotalsSyncCounters();
    if (document.getElementById('cart-table-body')) renderCartCalculatedTableContent();
});

function renderCartCalculatedTableContent() {
    const tableBody = document.getElementById('cart-table-body');
    if (!tableBody) return;
    tableBody.innerHTML = "";

    if (clientActiveBasketCart.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" style="padding:30px; text-align:center;">Basket dataset elements container completely null empty.</td></tr>`;
        recalculateCartCalculatedTotalsPanel();
        return;
    }

    clientActiveBasketCart.forEach(item => {
        tableBody.innerHTML += `
            <tr>
                <td><button onclick="removeCartItemEntirely(${item.id})" style="border:none; background:none; cursor:pointer; color:#ef3636;"><i class="fa-solid fa-trash-can"></i></button></td>
                <td><img src="${item.image}" style="width:50px; height:50px; object-fit:cover; border-radius:4px;" alt=""></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><input type="number" value="${item.quantity}" min="1" style="width:50px; padding:5px;" onchange="updateCartItemCountQuantity(${item.id}, this.value)"></td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
        `;
    });
    recalculateCartCalculatedTotalsPanel();
}

function updateCartItemCountQuantity(id, newVal) {
    let item = clientActiveBasketCart.find(i => i.id === id);
    if (item) {
        item.quantity = parseInt(newVal) || 1;
        commitDataUpdateToBrowserStorage();
        renderCartCalculatedTableContent();
    }
}

function removeCartItemEntirely(id) {
    clientActiveBasketCart = clientActiveBasketCart.filter(i => i.id !== id);
    commitDataUpdateToBrowserStorage();
    renderCartCalculatedTableContent();
}

function recalculateCartCalculatedTotalsPanel() {
    const cumulativeTotal = clientActiveBasketCart.reduce((acc, current) => acc + (current.price * current.quantity), 0);
    const subElement = document.getElementById('calc-subtotal');
    const grandElement = document.getElementById('calc-grand-total');
    
    if (subElement && grandElement) {
        subElement.textContent = `$${cumulativeTotal.toFixed(2)}`;
        grandElement.textContent = `$${cumulativeTotal.toFixed(2)}`;
    }
}

const triggerCheckoutBtn = document.getElementById('execute-checkout-trigger');
if (triggerCheckoutBtn) {
    triggerCheckoutBtn.addEventListener('click', () => {
        const form = document.getElementById('shipping-validation-form');
        if (clientActiveBasketCart.length === 0) {
            alert("Execution context impossible. Shopping bag dataset matrix contains no elements.");
            return;
        }
        if (form && !form.checkValidity()) {
            alert("Parameter missing context! Ensure address inputs match criteria parameters allocation layout.");
            form.reportValidity();
            return;
        }
        window.location.href = "confirmation.html";
    });
}