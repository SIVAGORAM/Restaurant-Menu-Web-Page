import { menuItems } from './js/menuData.js';
import { setupFilters, getActiveFilters, filterItems } from './js/filters.js';
import { renderMenuItem } from './js/menuRenderer.js';

function displayMenuItems() {
    const menuContainer = document.getElementById('menu-items');
    const filters = getActiveFilters();
    const filteredItems = filterItems(menuItems, filters);
    
    menuContainer.innerHTML = filteredItems.map(renderMenuItem).join('');
}

// Initialize menu and filters
document.addEventListener('DOMContentLoaded', () => {
    // Pass displayMenuItems as the callback for filter changes
    setupFilters(displayMenuItems);
    displayMenuItems();
});