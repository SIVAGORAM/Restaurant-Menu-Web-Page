// Menu data with all items
const menuItems = [
    // Vegetarian Main Course
    {
        id: 1,
        name: "Paneer Butter Masala",
        category: "veg-main",
        price: 320,
        description: "Cottage cheese in rich tomato gravy",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
        isVeg: true,
        spiceLevel: "medium"
    },
    {
        id: 2,
        name: "Dal Makhani",
        category: "veg-main",
        price: 280,
        description: "Creamy black lentils cooked overnight",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
        isVeg: true,
        spiceLevel: "mild"
    },
 
    {
        id: 3,
        name: "Vegetable Biryani",
        category: "veg-main",
        price: 350,
        description: "Fragrant rice with mixed vegetables",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
        isVeg: true,
        spiceLevel: "medium"
    },
    {
        id: 4,
        name: "Malai Kofta",
        category: "veg-main",
        price: 340,
        description: "Stuffed potato dumplings in creamy gravy",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        isVeg: true,
        spiceLevel: "mild"
    },
    {
        id: 5,
        name: "Palak Paneer",
        category: "veg-main",
        price: 310,
        description: "Cottage cheese in spinach gravy",
        image: "https://images.unsplash.com/photo-1601050690117-6f0f2b73f390",
        isVeg: true,
        spiceLevel: "medium"
    },
    {
        id: 6,
        name: "Chana Masala",
        category: "veg-main",
        price: 290,
        description: "Spiced chickpeas curry",
        image: "https://images.unsplash.com/photo-1612611741189-282a96a6d7f4",
        isVeg: true,
        spiceLevel: "high"
    },
    {
        id: 7,
        name: "Kadai Paneer",
        category: "veg-main",
        price: 330,
        description: "Cottage cheese in spicy bell pepper gravy",
        image: "https://images.unsplash.com/photo-1631452180775-7c5d27efa8d4",
        isVeg: true,
        spiceLevel: "high"
    },
    {
        id: 8,
        name: "Mushroom Masala",
        category: "veg-main",
        price: 300,
        description: "Mushrooms in rich onion-tomato gravy",
        image: "https://images.unsplash.com/photo-1604152135912-04a022e23696",
        isVeg: true,
        spiceLevel: "medium"
    },
    {
        id: 9,
        name: "Veg Kolhapuri",
        category: "veg-main",
        price: 320,
        description: "Mixed vegetables in spicy Kolhapuri gravy",
        image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db",
        isVeg: true,
        spiceLevel: "high"
    },
    {
        id: 10,
        name: "Navratan Korma",
        category: "veg-main",
        price: 340,
        description: "Nine gems curry in rich cashew gravy",
        image: "https://images.unsplash.com/photo-1631452180927-3a6626d2d105",
        isVeg: true,
        spiceLevel: "mild"
    },

    // Non-Vegetarian Main Course
    {
        id: 11,
        name: "Butter Chicken",
        category: "nonveg-main",
        price: 380,
        description: "Tender chicken in rich, creamy tomato sauce",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
        isVeg: false,
        spiceLevel: "medium"
    },
    {
        id: 12,
        name: "Chicken Biryani",
        category: "nonveg-main",
        price: 420,
        description: "Aromatic rice with tender chicken pieces",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
        isVeg: false,
        spiceLevel: "high"
    },
    {
        id: 13,
        name: "Fish Curry",
        category: "nonveg-main",
        price: 400,
        description: "Fresh fish in coconut-based curry",
        image: "https://images.unsplash.com/photo-1626082641669-c08ccae85c11",
        isVeg: false,
        spiceLevel: "high"
    },
    {
        id: 14,
        name: "Chicken Tikka Masala",
        category: "nonveg-main",
        price: 390,
        description: "Grilled chicken in spiced tomato gravy",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
        isVeg: false,
        spiceLevel: "medium"
    },
    {
        id: 15,
        name: "Mutton Rogan Josh",
        category: "nonveg-main",
        price: 450,
        description: "Kashmiri style lamb curry",
        image: "https://images.unsplash.com/photo-1545247181-516773cae754",
        isVeg: false,
        spiceLevel: "high"
    },
    {
        id: 16,
        name: "Prawn Malai Curry",
        category: "nonveg-main",
        price: 440,
        description: "Prawns in coconut cream sauce",
        image: "https://images.unsplash.com/photo-1626082927737-905bca56d9d6",
        isVeg: false,
        spiceLevel: "medium"
    },
    {
        id: 17,
        name: "Chicken Korma",
        category: "nonveg-main",
        price: 370,
        description: "Chicken in mild cashew gravy",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
        isVeg: false,
        spiceLevel: "mild"
    },
    {
        id: 18,
        name: "Fish Tikka Masala",
        category: "nonveg-main",
        price: 410,
        description: "Grilled fish in spiced curry",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
        isVeg: false,
        spiceLevel: "high"
    },

    // Starters
    {
        id: 19,
        name: "Paneer Tikka",
        category: "starters",
        price: 280,
        description: "Grilled cottage cheese with spices",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        isVeg: true,
        spiceLevel: "medium"
    },
    {
        id: 20,
        name: "Chicken 65",
        category: "starters",
        price: 320,
        description: "Spicy, deep-fried chicken bites",
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91",
        isVeg: false,
        spiceLevel: "high"
    },
    {
        id: 21,
        name: "Veg Spring Rolls",
        category: "starters",
        price: 220,
        description: "Crispy rolls with vegetable stuffing",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
        isVeg: true,
        spiceLevel: "mild"
    },
    {
        id: 22,
        name: "Fish Amritsari",
        category: "starters",
        price: 350,
        description: "Punjabi style fried fish",
        image: "https://images.unsplash.com/photo-1626082644755-41b1731a5674",
        isVeg: false,
        spiceLevel: "high"
    },
    {
        id: 23,
        name: "Hara Bhara Kebab",
        category: "starters",
        price: 260,
        description: "Spinach and pea patties",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        isVeg: true,
        spiceLevel: "medium"
    },

    // Breads
    {
        id: 24,
        name: "Butter Naan",
        category: "breads",
        price: 60,
        description: "Soft bread from tandoor with butter",
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4",
        isVeg: true,
        spiceLevel: "none"
    },
    {
        id: 25,
        name: "Garlic Naan",
        category: "breads",
        price: 70,
        description: "Naan bread with garlic butter",
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4",
        isVeg: true,
        spiceLevel: "none"
    },
    {
        id: 26,
        name: "Tandoori Roti",
        category: "breads",
        price: 40,
        description: "Whole wheat bread from tandoor",
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4",
        isVeg: true,
        spiceLevel: "none"
    },

    // Drinks
    {
        id: 27,
        name: "Mango Lassi",
        category: "drinks",
        price: 120,
        description: "Sweet yogurt drink with mango",
        image: "https://images.unsplash.com/photo-1626201850129-a96d13a63a0f",
        isVeg: true,
        spiceLevel: "none"
    },
    {
        id: 28,
        name: "Fresh Lime Soda",
        category: "drinks",
        price: 80,
        description: "Refreshing lime drink with soda",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
        isVeg: true,
        spiceLevel: "none"
    },
    {
        id: 29,
        name: "Masala Chai",
        category: "drinks",
        price: 50,
        description: "Indian spiced tea with milk",
        image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8",
        isVeg: true,
        spiceLevel: "mild"
    },
    {
        id: 30,
        name: "Rose Falooda",
        category: "drinks",
        price: 140,
        description: "Rose flavored milk with vermicelli",
        image: "https://images.unsplash.com/photo-1626201850129-a96d13a63a0f",
        isVeg: true,
        spiceLevel: "none"
    },
    {
        id: 31,
        name: "Butter Milk",
        category: "drinks",
        price: 60,
        description: "Spiced yogurt-based drink",
        image: "https://images.unsplash.com/photo-1626201850129-a96d13a63a0f",
        isVeg: true,
        spiceLevel: "mild"
    },
    {
        id: 32,
        name: "Fresh Orange Juice",
        category: "drinks",
        price: 100,
        description: "Freshly squeezed orange juice",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423",
        isVeg: true,
        spiceLevel: "none"
    }
    // ... (include all menu items from menuData.js here)
];

// Sample reviews data
const reviews = [
    {
        id: 1,
        name: "Rahul Sharma",
        rating: 5,
        date: "2024-01-15",
        text: "Amazing authentic Indian food! The Butter Chicken was perfect and the service was excellent."
    },
    {
        id: 2,
        name: "Priya Patel",
        rating: 4,
        date: "2024-01-10",
        text: "Great variety of vegetarian options. Loved the Paneer Butter Masala and Garlic Naan."
    },
    {
        id: 3,
        name: "John Smith",
        rating: 5,
        date: "2024-01-05",
        text: "Best Indian restaurant in town! The Biryani is a must-try."
    },
    {
        id: 4,
        name: "Sarah Johnson",
        rating: 4,
        date: "2024-01-03",
        text: "Excellent service and authentic flavors. The spice levels are perfect!"
    }
];

// Filter functionality
function setupFilters(onFilterChange) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const vegSwitch = document.getElementById('vegSwitch');
    const spiceLevelFilter = document.getElementById('spiceLevel');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            displayMenuItems(); // Call displayMenuItems directly
        });
    });

    vegSwitch?.addEventListener('change', displayMenuItems);
    spiceLevelFilter?.addEventListener('change', displayMenuItems);
}

function getActiveFilters() {
    const activeCategory = document.querySelector('.filter-btn.active')?.getAttribute('data-category') || 'all';
    const vegOnly = document.getElementById('vegSwitch')?.checked || false;
    const spiceLevel = document.getElementById('spiceLevel')?.value || 'all';

    return { activeCategory, vegOnly, spiceLevel };
}

function filterItems(items, { activeCategory, vegOnly, spiceLevel }) {
    return items.filter(item => {
        const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
        const vegMatch = !vegOnly || item.isVeg;
        const spiceMatch = spiceLevel === 'all' || item.spiceLevel === spiceLevel;
        
        return categoryMatch && vegMatch && spiceMatch;
    });
}

// Menu rendering
function renderMenuItem(item) {
    const spiceLevelBadge = getSpiceLevelBadge(item.spiceLevel);
    const vegBadge = getVegBadge(item.isVeg);
    
    return `
        <div class="col-md-6 col-lg-4">
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="${item.image}?auto=format&fit=crop&w=800" alt="${item.name}">
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

// Reviews functionality
function renderReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewsHTML = reviews.map(review => `
        <div class="col-md-6 col-lg-4">
            <div class="review-card">
                <div class="review-header">
                    <span class="reviewer-name">${review.name}</span>
                    <div class="review-rating">
                        ${getStarRating(review.rating)}
                    </div>
                </div>
                <div class="review-date">${formatDate(review.date)}</div>
                <p class="review-text">${review.text}</p>
            </div>
        </div>
    `).join('');
    
    reviewsContainer.innerHTML = reviewsHTML;
}

function getStarRating(rating) {
    return Array(5).fill('').map((_, index) => 
        `<i class="bi bi-star${index < rating ? '-fill' : ''}" style="color: #e65100;"></i>`
    ).join('');
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Review form handling
function setupReviewForm() {
    const form = document.getElementById('review-form');
    const ratingStars = document.querySelectorAll('.rating-input i');
    let selectedRating = 0;

    ratingStars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            updateStars(rating);
        });

        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-rating'));
            updateStars(selectedRating);
        });
    });

    document.querySelector('.rating-input').addEventListener('mouseleave', () => {
        updateStars(selectedRating);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newReview = {
            id: reviews.length + 1,
            name: document.getElementById('reviewName').value,
            rating: selectedRating,
            date: new Date().toISOString().split('T')[0],
            text: document.getElementById('reviewText').value
        };

        reviews.unshift(newReview);
        renderReviews();
        form.reset();
        selectedRating = 0;
        updateStars(0);
    });
}

function updateStars(rating) {
    document.querySelectorAll('.rating-input i').forEach((star, index) => {
        star.classList.toggle('bi-star-fill', index < rating);
        star.classList.toggle('bi-star', index >= rating);
    });
}

// Contact form handling
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Newsletter form handling
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize everything
function displayMenuItems() {
    const menuContainer = document.getElementById('menu-items');
    if (menuContainer) {
        const filters = getActiveFilters();
        const filteredItems = filterItems(menuItems, filters);
        menuContainer.innerHTML = filteredItems.map(renderMenuItem).join('');
    }
}

// Navbar scroll handling
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// Image loading error handling
function setupImageErrorHandling() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800';
        });
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    displayMenuItems();
    renderReviews();
    setupReviewForm();
    setupContactForm();
    setupNewsletterForm();
    setupSmoothScrolling();
    handleNavbarScroll();
    setupImageErrorHandling();
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.menu-item, .review-card, .about-image').forEach((el) => {
    observer.observe(el);
});