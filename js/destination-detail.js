/**
 * Travel - Destination Detail JavaScript
 * Handles destination detail page functionality
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize destination detail functionality
    loadDestinationDetail();
    initializeBookingForm();
    initializeGallery();
});

/**
 * Load destination detail based on URL parameter
 */
function loadDestinationDetail() {
    // Get destination ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const destinationId = urlParams.get('id');
    
    if (!destinationId) {
        // No destination ID provided, redirect to destinations page
        window.location.href = 'destinations.html';
        return;
    }
    
    // Get destination data
    const destination = window.travelDestinations.getDestinationById(destinationId);
    
    if (!destination) {
        // Destination not found, show error
        showDestinationNotFound();
        return;
    }
    
    // Update page content with destination data
    updateDestinationContent(destination);
}

/**
 * Update the page content with destination data
 * @param {Object} destination - The destination data
 */
function updateDestinationContent(destination) {
    // Update page title
    document.title = `${destination.name}, ${destination.country} - Travel`;
    
    // Update destination header
    const header = document.querySelector('.destination-header');
    if (header) {
        header.innerHTML = `
            <h1>${destination.name}, ${destination.country}</h1>
            <p class="destination-tagline">${destination.description}</p>
        `;
    }
    
    // Update main image
    const mainImage = document.querySelector('.main-image img');
    if (mainImage) {
        mainImage.src = destination.image;
        mainImage.alt = destination.name;
    }
    
    // Update thumbnail images (in a real app, we would have multiple images)
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    thumbnails.forEach(thumb => {
        thumb.src = destination.image;
        thumb.alt = destination.name;
    });
    
    // Update destination description
    const descriptionSection = document.querySelector('.destination-description');
    if (descriptionSection) {
        descriptionSection.innerHTML = `
            <h2>About ${destination.name}</h2>
            <p>${destination.description}</p>
            <p>Visitors can enjoy exploring the beautiful sights, experiencing the local culture, and creating unforgettable memories in this amazing destination.</p>
            
            <h3>Highlights</h3>
            <ul>
                <li>Explore the iconic landmarks</li>
                <li>Experience the local cuisine</li>
                <li>Immerse yourself in the culture</li>
                <li>Enjoy breathtaking views</li>
                <li>Create lasting memories</li>
            </ul>
        `;
    }
    
    // Update booking card
    const priceElement = document.querySelector('.price');
    if (priceElement) {
        priceElement.textContent = window.travelUtils.formatCurrency(destination.price, destination.currency);
    }
    
    // Update booking form
    const bookingForm = document.getElementById('destination-booking-form');
    if (bookingForm) {
        // Add hidden input for destination ID
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'destinationId';
        hiddenInput.value = destination.id;
        bookingForm.appendChild(hiddenInput);
    }
}

/**
 * Show error when destination is not found
 */
function showDestinationNotFound() {
    const container = document.getElementById('destination-detail-container');
    if (container) {
        container.innerHTML = `
            <div class="container">
                <div class="error-message">
                    <h2>Destination Not Found</h2>
                    <p>Sorry, the destination you're looking for could not be found.</p>
                    <a href="destinations.html" class="btn btn-primary">Browse All Destinations</a>
                </div>
            </div>
        `;
    }
}

/**
 * Initialize the booking form
 */
function initializeBookingForm() {
    const bookingForm = document.getElementById('destination-booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, this would send the data to a server
            // For this demo, we'll just show a success message
            window.travelUtils.showNotification('Thank you for your booking request! We will contact you shortly.', 'success');
            
            // Reset form
            this.reset();
        });
    }
}

/**
 * Initialize the image gallery functionality
 */
function initializeGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const mainImage = document.querySelector('.main-image img');
    
    if (thumbnails.length && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Update main image
                mainImage.src = this.src;
                mainImage.alt = this.alt;
                
                // Update active state
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}
