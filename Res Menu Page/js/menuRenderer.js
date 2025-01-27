export function renderMenuItem(item) {
    const spiceLevelBadge = getSpiceLevelBadge(item.spiceLevel);
    const vegBadge = getVegBadge(item.isVeg);
    
    return `
        <div class="col-md-6 col-lg-4">
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="badges">
                        ${vegBadge}
                        ${spiceLevelBadge}
                    </div>
                </div>
                <div class="menu-item-content">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <span class="menu-item-price">₹${item.price}</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                </div>
            </div>
        </div>
    `;
}

function getSpiceLevelBadge(level) {
    const badges = {
        none: '<span class="badge bg-success">No Spice</span>',
        mild: '<span class="badge bg-info">Mild</span>',
        medium: '<span class="badge bg-warning">Medium</span>',
        high: '<span class="badge bg-danger">Hot</span>'
    };
    return badges[level] || '';
}

function getVegBadge(isVeg) {
    return isVeg 
        ? '<span class="badge bg-success"><i class="bi bi-circle-fill"></i> Veg</span>'
        : '<span class="badge bg-danger"><i class="bi bi-square-fill"></i> Non-Veg</span>';
}