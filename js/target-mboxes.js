/**
 * Custom Adobe Target mboxes implementation
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Target mboxes script loaded');
    
    // Initialize custom mboxes
    initializeCustomMboxes();
});

/**
 * Initialize custom mboxes for Adobe Target
 */
function initializeCustomMboxes() {
    // Initialize filter recommendations mbox
    initializeFilterRecommendationsMbox();
}

/**
 * Initialize the filter recommendations mbox
 */
function initializeFilterRecommendationsMbox() {
    // Check if the mbox container exists
    const mboxContainer = document.getElementById('filterRecommendationsMbox');
    if (!mboxContainer) {
        console.log('Filter recommendations mbox container not found');
        return;
    }
    
    console.log('Initializing filter recommendations mbox');
    
    // Check if Adobe Target is available
    if (window.adobe && window.adobe.target && typeof window.adobe.target.getOffer === 'function') {
        // Request content from Adobe Target
        window.adobe.target.getOffer({
            "mbox": "destination_filter_recommendations",
            "success": function(offer) {
                // Apply the offer to the mbox container
                window.adobe.target.applyOffer({
                    "mbox": "destination_filter_recommendations",
                    "offer": offer,
                    "element": mboxContainer
                });
                console.log('Filter recommendations mbox content applied');
            },
            "error": function(status, error) {
                console.log('Error loading filter recommendations mbox', status, error);
            }
        });
    } else {
        console.log('Adobe Target not available for filter recommendations mbox');
        
        // For testing: Add click tracking to the default content
        const filterLinks = mboxContainer.querySelectorAll('a');
        filterLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Filter recommendation clicked:', this.textContent);
            });
        });
    }
}

/**
 * Track a filter selection event
 * @param {string} continent - The selected continent
 */
function trackFilterSelection(continent) {
    console.log('Filter selected:', continent);
    
    // Track the event in Adobe Target if available
    if (window.adobe && window.adobe.target && typeof window.adobe.target.trackEvent === 'function') {
        window.adobe.target.trackEvent({
            "mbox": "destination_filter_selection",
            "params": {
                "selectedFilter": continent
            }
        });
    }
}

// Add event listener to the continent filter to track selections
document.addEventListener('DOMContentLoaded', function() {
    const continentFilter = document.getElementById('continent-filter');
    if (continentFilter) {
        continentFilter.addEventListener('change', function() {
            trackFilterSelection(this.value);
        });
    }
});
