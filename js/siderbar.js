function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('toggle-btn');
    sidebar.classList.toggle('show');
    toggle.classList.toggle('move');

    if (sidebar.classList.contains('show')) {
        toggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none">
<path d="M16 8L8 16M8.00001 8L16 16" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
        toggle.style.left = '160px';
        toggle.style.background = 'transparent';
    } else {
        toggle.innerHTML = `  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path d="M4 18L20 18" stroke="#ffff" stroke-width="2" stroke-linecap="round" />
            <path d="M4 12L20 12" stroke="#ffff" stroke-width="2" stroke-linecap="round" />
            <path d="M4 6L20 6" stroke="#ffff" stroke-width="2" stroke-linecap="round" />
        </svg>`;
        toggle.style.left = '24px';

    }
}