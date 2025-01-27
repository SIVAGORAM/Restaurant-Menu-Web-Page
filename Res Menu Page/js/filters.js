// Event handling for filters
export function setupFilters(onFilterChange) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const vegSwitch = document.getElementById('vegSwitch');
    const spiceLevelFilter = document.getElementById('spiceLevel');

    // Category filter
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            onFilterChange();
        });
    });

    // Veg/Non-veg filter
    vegSwitch?.addEventListener('change', onFilterChange);

    // Spice level filter
    spiceLevelFilter?.addEventListener('change', onFilterChange);
}

// Get current filter values
export function getActiveFilters() {
    const activeCategory = document.querySelector('.filter-btn.active')?.getAttribute('data-category') || 'all';
    const vegOnly = document.getElementById('vegSwitch')?.checked || false;
    const spiceLevel = document.getElementById('spiceLevel')?.value || 'all';

    return { activeCategory, vegOnly, spiceLevel };
}

// Apply filters to menu items
export function filterItems(items, { activeCategory, vegOnly, spiceLevel }) {
    return items.filter(item => {
        const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
        const vegMatch = !vegOnly || item.isVeg;
        const spiceMatch = spiceLevel === 'all' || item.spiceLevel === spiceLevel;
        
        return categoryMatch && vegMatch && spiceMatch;
    });
}