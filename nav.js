/**
 * 左方導覽選單（維護入口）
 * 新增頁面時：在 pages 資料夾加入 HTML，並在此陣列加一筆即可。
 */
const SITE_NAV = [
    { href: 'index.html', label: '最新消息', icon: 'newspaper' },
    { href: 'leave.html', label: '請假及規範', icon: 'clipboard-list' },
    { href: 'links.html', label: '重要連結', icon: 'link' },
];

function currentPageFile() {
    const path = window.location.pathname.split('/').pop();
    return path === '' ? 'index.html' : path;
}

function renderSiteNav() {
    const current = currentPageFile();
    const nav = document.querySelector('[data-site-nav]');
    if (!nav) return;

    nav.innerHTML = SITE_NAV.map((item) => {
        const active = item.href === current;
        const classes = active
            ? 'bg-white text-coffee-900 shadow-sm border border-coffee-200/70'
            : 'text-coffee-600 hover:bg-coffee-100/80 hover:text-coffee-900 border border-transparent';
        return `
            <a href="${item.href}"
               class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${classes}"
               ${active ? 'aria-current="page"' : ''}>
                <i data-lucide="${item.icon}" class="w-4 h-4 shrink-0"></i>
                <span>${item.label}</span>
            </a>
        `;
    }).join('');

    const titleEl = document.querySelector('[data-page-title]');
    if (titleEl) {
        const match = SITE_NAV.find((item) => item.href === current);
        titleEl.textContent = match ? match.label : '快樂國小家長網';
    }

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function initSidebarToggle() {
    const sidebar = document.getElementById('site-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const openBtn = document.getElementById('sidebar-open');
    const closeBtn = document.getElementById('sidebar-close');
    if (!sidebar || !overlay) return;

    const open = () => {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden', 'md:overflow-auto');
    };
    const close = () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    };

    openBtn?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    overlay.addEventListener('click', close);
}

document.addEventListener('DOMContentLoaded', () => {
    renderSiteNav();
    initSidebarToggle();
});
