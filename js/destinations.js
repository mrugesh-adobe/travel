/**
 * Travel - Destinations JavaScript
 * Handles destinations data and functionality
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize destinations functionality
    loadDestinations();
    initializeFilters();
});

/**
 * Sample destinations data
 * In a real application, this would be loaded from a server/API
 */
const destinationsData = [
    {
        id: 'paris',
        name: 'Paris',
        country: 'France',
        continent: 'Europe',
        description: 'The city of lights and romance',
        shortDescription: 'Experience the magic of the Eiffel Tower and charming cafes',
        price: 1299,
        currency: 'USD',
        image: 'images/destinations/paris.jpg',
        featured: true,
        recommendedFor: ['Europe', 'Asia', 'North America']
    },
    {
        id: 'bali',
        name: 'Bali',
        country: 'Indonesia',
        continent: 'Asia',
        description: 'Tropical paradise with stunning beaches',
        shortDescription: 'Relax on pristine beaches and explore ancient temples',
        price: 1499,
        currency: 'USD',
        image: 'images/destinations/bali.jpg',
        featured: true,
        recommendedFor: ['Asia', 'Oceania', 'North America']
    },
    {
        id: 'tokyo',
        name: 'Tokyo',
        country: 'Japan',
        continent: 'Asia',
        description: 'Ultra-modern city with rich traditions',
        shortDescription: 'Experience the perfect blend of tradition and innovation',
        price: 1799,
        currency: 'USD',
        image: 'images/destinations/tokyo.jpg',
        featured: false,
        recommendedFor: ['Asia', 'North America', 'Europe']
    },
    {
        id: 'new-york',
        name: 'New York',
        country: 'USA',
        continent: 'North America',
        description: 'The city that never sleeps',
        shortDescription: 'Explore iconic landmarks in the world\'s most famous city',
        price: 1399,
        currency: 'USD',
        image: 'images/destinations/new-york.jpg',
        featured: true,
        recommendedFor: ['North America', 'Europe', 'Asia']
    },
    {
        id: 'rome',
        name: 'Rome',
        country: 'Italy',
        continent: 'Europe',
        description: 'Ancient history and delicious cuisine',
        shortDescription: 'Walk through history in the Eternal City',
        price: 1199,
        currency: 'USD',
        image: 'images/destinations/rome.jpg',
        featured: false,
        recommendedFor: ['Europe', 'North America', 'South America']
    },
    {
        id: 'cape-town',
        name: 'Cape Town',
        country: 'South Africa',
        continent: 'Africa',
        description: 'Stunning coastal city with mountain views',
        shortDescription: 'Experience the beauty of Table Mountain and pristine beaches',
        price: 1599,
        currency: 'USD',
        image: 'images/destinations/cape-town.jpg',
        featured: false,
        recommendedFor: ['Africa', 'Europe', 'Asia']
    }
];

/**
 * Load destinations into the page
 * @param {string} continent - Filter by continent (optional)
 */
function loadDestinations(continent = 'all') {
    // Featured destinations on homepage
    const featuredContainer = document.getElementById('featured-destinations-container');
    if (featuredContainer) {
        featuredContainer.innerHTML = '';
        
        // Filter featured destinations
        const featuredDestinations = destinationsData.filter(dest => dest.featured);
        
        // Render featured destinations
        featuredDestinations.forEach(destination => {
            featuredContainer.appendChild(createDestinationCard(destination));
        });
    }
    
    // All destinations on destinations page
    const allDestinationsContainer = document.getElementById('all-destinations-container');
    if (allDestinationsContainer) {
        allDestinationsContainer.innerHTML = '';
        
        // Filter destinations by continent if specified
        const filteredDestinations = continent === 'all' 
            ? destinationsData 
            : destinationsData.filter(dest => dest.continent === continent);
        
        if (filteredDestinations.length === 0) {
            allDestinationsContainer.innerHTML = '<p class="no-results">No destinations found for this filter.</p>';
            return;
        }
        
        // Render all destinations
        filteredDestinations.forEach(destination => {
            allDestinationsContainer.appendChild(createDestinationCard(destination));
        });
    }
}

/**
 * Create a destination card element
 * @param {Object} destination - The destination data
 * @returns {HTMLElement} - The destination card element
 */
function createDestinationCard(destination) {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.setAttribute('data-destination-id', destination.id);
    
    // Format the price using the utility function
    const formattedPrice = window.travelUtils.formatCurrency(destination.price, destination.currency);
    
    card.innerHTML = `
        <div class="destination-image">
            <img src="${destination.image}" alt="${destination.name}">
        </div>
        <div class="destination-info">
            <h3>${destination.name}, ${destination.country}</h3>
            <p>${destination.shortDescription}</p>
            <div class="destination-price">From ${formattedPrice}</div>
            <a href="destination-detail.html?id=${destination.id}" class="btn btn-secondary">Learn More</a>
        </div>
    `;
    
    return card;
}

/**
 * Initialize destination filters
 */
function initializeFilters() {
    const continentFilter = document.getElementById('continent-filter');
    if (continentFilter) {
        continentFilter.addEventListener('change', function() {
            loadDestinations(this.value);
        });
    }
}

/**
 * Get a destination by ID
 * @param {string} id - The destination ID
 * @returns {Object|null} - The destination object or null if not found
 */
function getDestinationById(id) {
    return destinationsData.find(dest => dest.id === id) || null;
}

// Export functions and data for use in other scripts
window.travelDestinations = {
    getDestinationById,
    loadDestinations,
    destinationsData
};
