function refreshIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', refreshIcons);
