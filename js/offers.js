/**
 * Travel - Offers JavaScript
 * Handles special offers data and functionality
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize offers functionality
    loadOffers();
    initializeCountdowns();
});

/**
 * Sample offers data
 * In a real application, this would be loaded from a server/API
 */
const offersData = [
    {
        id: 'bali-summer',
        destinationId: 'bali',
        title: 'Bali Paradise',
        description: '7 days in tropical paradise',
        originalPrice: 1899,
        discountedPrice: 1329,
        discountPercentage: 30,
        currency: 'USD',
        endDate: '2025-08-31',
        image: 'images/destinations/bali.jpg'
    },
    {
        id: 'paris-spring',
        destinationId: 'paris',
        title: 'Paris in Spring',
        description: '5 days in the city of lights',
        originalPrice: 1599,
        discountedPrice: 1199,
        discountPercentage: 25,
        currency: 'USD',
        endDate: '2025-09-15',
        image: 'images/destinations/paris.jpg'
    },
    {
        id: 'tokyo-adventure',
        destinationId: 'tokyo',
        title: 'Tokyo Adventure',
        description: '6 days exploring Japan\'s capital',
        originalPrice: 2099,
        discountedPrice: 1679,
        discountPercentage: 20,
        currency: 'USD',
        endDate: '2025-08-15',
        image: 'images/destinations/tokyo.jpg'
    }
];

/**
 * Load offers into the page
 */
function loadOffers() {
    const offersContainer = document.getElementById('offers-container');
    if (offersContainer) {
        offersContainer.innerHTML = '';
        
        // Render all offers
        offersData.forEach(offer => {
            offersContainer.appendChild(createOfferCard(offer));
        });
    }
}

/**
 * Create an offer card element
 * @param {Object} offer - The offer data
 * @returns {HTMLElement} - The offer card element
 */
function createOfferCard(offer) {
    const card = document.createElement('div');
    card.className = 'offer-card';
    card.setAttribute('data-offer-id', offer.id);
    
    // Format the prices using the utility function
    const formattedOriginalPrice = window.travelUtils.formatCurrency(offer.originalPrice, offer.currency);
    const formattedDiscountedPrice = window.travelUtils.formatCurrency(offer.discountedPrice, offer.currency);
    
    card.innerHTML = `
        <div class="offer-badge">${offer.discountPercentage}% OFF</div>
        <div class="offer-image">
            <img src="${offer.image}" alt="${offer.title}">
        </div>
        <div class="offer-info">
            <h3>${offer.title}</h3>
            <p>${offer.description}</p>
            <div class="offer-price">
                <span class="original-price">${formattedOriginalPrice}</span>
                <span class="discounted-price">${formattedDiscountedPrice}</span>
            </div>
            <div class="offer-timer" data-end-date="${offer.endDate}">
                <span class="timer-label">Offer ends in:</span>
                <span class="countdown">Loading...</span>
            </div>
            <a href="destination-detail.html?id=${offer.destinationId}" class="btn btn-secondary">View Details</a>
        </div>
    `;
    
    return card;
}

/**
 * Initialize countdown timers for offers
 */
function initializeCountdowns() {
    const timers = document.querySelectorAll('.offer-timer');
    
    timers.forEach(timer => {
        const endDate = new Date(timer.getAttribute('data-end-date'));
        const countdownElement = timer.querySelector('.countdown');
        
        // Update immediately and then every day
        updateCountdown(endDate, countdownElement);
        setInterval(() => updateCountdown(endDate, countdownElement), 86400000); // Update every 24 hours
    });
}

/**
 * Update a countdown element
 * @param {Date} endDate - The end date of the offer
 * @param {HTMLElement} element - The countdown element to update
 */
function updateCountdown(endDate, element) {
    const now = new Date();
    const diff = endDate - now;
    
    if (diff <= 0) {
        element.textContent = 'Offer expired';
        element.classList.add('expired');
        return;
    }
    
    // Calculate days remaining
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    element.textContent = days === 1 ? '1 day' : `${days} days`;
}

/**
 * Get an offer by ID
 * @param {string} id - The offer ID
 * @returns {Object|null} - The offer object or null if not found
 */
function getOfferById(id) {
    return offersData.find(offer => offer.id === id) || null;
}

// Export functions and data for use in other scripts
window.travelOffers = {
    getOfferById,
    offersData
};
