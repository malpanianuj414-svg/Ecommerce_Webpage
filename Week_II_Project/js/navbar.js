// Side Panel View Mechanics & Dynamic Login Session Status Verification
document.addEventListener("DOMContentLoaded", () => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => { nav.classList.add('active'); });
    }
    if (close) {
        close.addEventListener('click', () => { nav.classList.remove('active'); });
    }

    // Dynamic Login Session Tracking Engine
    const activeUserEmail = localStorage.getItem('ApexStreetwearAuthUserSession');
    const displayTextField = document.getElementById('profile-display-text');
    const profileItemContainer = document.getElementById('user-profile-status');

    if (activeUserEmail && displayTextField) {
        // Truncate email to get the username prefix for a clean navbar fit
        const simplifiedName = activeUserEmail.split('@')[0];
        displayTextField.textContent = simplifiedName;
        
        // Append an operational Log Out interaction link
        const logoutTrigger = document.createElement('span');
        logoutTrigger.className = "logout-action-link";
        logoutTrigger.textContent = " (Log Out)";
        logoutTrigger.onclick = () => {
            localStorage.removeItem('ApexStreetwearAuthUserSession');
            window.location.reload();
        };
        profileItemContainer.appendChild(logoutTrigger);
    }
});