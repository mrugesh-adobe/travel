/**
 * Adobe Target Integration - Store viewed location data
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Adobe Target Integration script loaded');
  
  // Check if we're on a destination detail page
  const urlParams = new URLSearchParams(window.location.search);
  const destinationId = urlParams.get('id');
  
  if (destinationId) {
    // We're on a destination detail page, store the viewed location data
    storeViewedLocationData(destinationId);
  }
});

/**
 * Store viewed location data in local storage
 * @param {string} destinationId - The ID of the viewed destination
 */
function storeViewedLocationData(destinationId) {
  // Default values if destination is not found
  let locationData = {
    name: "unknown",
    country: "unknown",
    continent: "unknown",
    price: "unknown"
  };
  
  // Try to get destination data
  if (window.travelDestinations && typeof window.travelDestinations.getDestinationById === 'function') {
    const destination = window.travelDestinations.getDestinationById(destinationId);
    
    if (destination) {
      // Update with actual destination data
      locationData = {
        name: destination.name || "unknown",
        country: destination.country || "unknown",
        continent: destination.continent || "unknown",
        price: destination.price || "unknown"
      };
    }
  }
  
  // Store in local storage
  localStorage.setItem('viewedLocationData', JSON.stringify(locationData));
  
  // Log for debugging
  console.log('Stored viewed location data:', locationData);
}
