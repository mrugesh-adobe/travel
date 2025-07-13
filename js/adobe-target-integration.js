/**
 * Travel - Adobe Target Integration
 * This file demonstrates how Adobe Target would be integrated with the website
 * 
 * Note: This is a demonstration file and does not contain actual Adobe Target implementation
 * In a real implementation, you would use Adobe Launch to deploy Adobe Target
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Adobe Target integration script loaded');
    
    // Initialize Adobe Target integration
    initializeAdobeTargetIntegration();
});

/**
 * Initialize Adobe Target integration
 */
function initializeAdobeTargetIntegration() {
    // In a real implementation, Adobe Target would be loaded via Adobe Launch
    // This is a simulation to demonstrate the concept
    
    // 1. Identify Adobe Target integration points
    identifyTargetElements();
    
    // 2. Set up visitor identification (would be handled by Experience Cloud ID Service)
    simulateVisitorIdentification();
    
    // 3. Apply personalization based on user's region
    applyGeoPersonalization();
    
    // 4. Set up A/B tests
    setupABTests();
}

/**
 * Identify elements that can be targeted by Adobe Target
 */
function identifyTargetElements() {
    // Find all elements with data-adobe-target attribute
    const targetElements = document.querySelectorAll('[data-adobe-target]');
    
    console.log(`Found ${targetElements.length} Adobe Target integration points:`);
    targetElements.forEach(element => {
        console.log(`- ${element.getAttribute('data-adobe-target')}: ${element.tagName}.${element.className}`);
    });
}

/**
 * Simulate visitor identification
 * In a real implementation, this would be handled by Experience Cloud ID Service
 */
function simulateVisitorIdentification() {
    // Simulate getting or setting a visitor ID
    const visitorId = localStorage.getItem('travel_visitor_id') || generateVisitorId();
    localStorage.setItem('travel_visitor_id', visitorId);
    
    console.log(`Visitor ID: ${visitorId}`);
    
    // In a real implementation, additional visitor data would be collected
    const visitorData = {
        id: visitorId,
        lastVisit: new Date().toISOString(),
        pageViews: incrementPageViews(),
        referrer: document.referrer || 'direct'
    };
    
    console.log('Visitor data:', visitorData);
}

/**
 * Generate a random visitor ID
 * @returns {string} - A random visitor ID
 */
function generateVisitorId() {
    return 'visitor_' + Math.random().toString(36).substring(2, 15);
}

/**
 * Increment page views counter
 * @returns {number} - Updated page view count
 */
function incrementPageViews() {
    const pageViews = parseInt(localStorage.getItem('travel_page_views') || '0');
    const newPageViews = pageViews + 1;
    localStorage.setItem('travel_page_views', newPageViews.toString());
    return newPageViews;
}

/**
 * Apply personalization based on user's geo location
 * In a real implementation, Adobe Target would use geo.country and other parameters
 */
function applyGeoPersonalization() {
    // Simulate getting user's country (in a real implementation, this would come from Adobe Target)
    const userCountry = simulateUserCountry();
    
    console.log(`User country (simulated): ${userCountry}`);
    
    // Apply personalization to elements with data-adobe-target="geo-personalization"
    const geoPersonalizationElements = document.querySelectorAll('[data-adobe-target="geo-personalization"]');
    
    geoPersonalizationElements.forEach(element => {
        // Add a class to indicate personalization has been applied
        element.classList.add('personalized');
        
        // Commented out: Personalization indicator tooltip
        /*
        // Add a subtle indicator for demonstration purposes
        const personalizationIndicator = document.createElement('div');
        personalizationIndicator.className = 'personalization-indicator';
        personalizationIndicator.innerHTML = `
            <div class="indicator-content">
                <strong>Adobe Target:</strong> Content personalized for ${userCountry}
                <span class="close-indicator">×</span>
            </div>
        `;
        element.appendChild(personalizationIndicator);
        
        // Add event listener to close button
        personalizationIndicator.querySelector('.close-indicator').addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            personalizationIndicator.remove();
        });
        */
    });
}

/**
 * Simulate getting user's country
 * In a real implementation, this would be provided by Adobe Target
 * @returns {string} - Simulated user country
 */
function simulateUserCountry() {
    // For demonstration, randomly select a country or use one from localStorage
    const countries = ['United States', 'United Kingdom', 'Japan', 'Australia', 'Germany', 'Canada', 'India'];
    
    // Check if we already have a country stored
    const storedCountry = localStorage.getItem('travel_user_country');
    if (storedCountry) {
        return storedCountry;
    }
    
    // Otherwise randomly select one
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    localStorage.setItem('travel_user_country', randomCountry);
    return randomCountry;
}

/**
 * Set up A/B tests
 * In a real implementation, Adobe Target would manage the test variants
 */
function setupABTests() {
    // Simulate A/B test for hero banner
    setupHeroBannerTest();
    
    // Simulate A/B test for CTA buttons
    setupCtaButtonTest();
    
    // Simulate A/B test for promotional banner
    setupPromoBannerTest();
}

/**
 * Set up A/B test for hero banner
 */
function setupHeroBannerTest() {
    const heroBanner = document.querySelector('[data-adobe-target="hero-banner"]');
    if (!heroBanner) return;
    
    // Simulate getting test variant (in a real implementation, this would come from Adobe Target)
    const testVariant = getTestVariant('hero-banner-test', ['A', 'B']);
    
    console.log(`Hero Banner A/B Test Variant: ${testVariant}`);
    
    // Apply test variant
    heroBanner.classList.add(`variant-${testVariant.toLowerCase()}`);
    
    // Commented out: A/B test indicator tooltip
    /*
    // For demonstration purposes, add a subtle indicator
    const testIndicator = document.createElement('div');
    testIndicator.className = 'ab-test-indicator';
    testIndicator.innerHTML = `
        <div class="indicator-content">
            <strong>Adobe Target:</strong> A/B Test Variant ${testVariant}
            <span class="close-indicator">×</span>
        </div>
    `;
    heroBanner.appendChild(testIndicator);
    
    // Add event listener to close button
    testIndicator.querySelector('.close-indicator').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        testIndicator.remove();
    });
    */
}

/**
 * Set up A/B test for CTA buttons
 */
function setupCtaButtonTest() {
    const ctaButtons = document.querySelectorAll('[data-adobe-target="cta-button"]');
    if (ctaButtons.length === 0) return;
    
    // Simulate getting test variant
    const testVariant = getTestVariant('cta-button-test', ['A', 'B', 'C']);
    
    console.log(`CTA Button A/B Test Variant: ${testVariant}`);
    
    // Apply test variant to all CTA buttons
    ctaButtons.forEach(button => {
        button.classList.add(`variant-${testVariant.toLowerCase()}`);
        
        // For demonstration, we could change button text based on variant
        const btnElement = button.querySelector('.btn-primary');
        if (btnElement) {
            if (testVariant === 'B') {
                btnElement.textContent = 'Reserve Now';
            } else if (testVariant === 'C') {
                btnElement.textContent = 'Get Started';
            }
        }
    });
}

/**
 * Set up A/B test for promotional banner
 */
function setupPromoBannerTest() {
    const promoBanner = document.querySelector('[data-adobe-target="promo-banner"]');
    if (!promoBanner) return;
    
    // Simulate getting test variant
    const testVariant = getTestVariant('promo-banner-test', ['A', 'B']);
    
    console.log(`Promo Banner A/B Test Variant: ${testVariant}`);
    
    // Apply test variant
    promoBanner.classList.add(`variant-${testVariant.toLowerCase()}`);
    
    // For demonstration, change content based on variant
    if (testVariant === 'B') {
        const promoContent = promoBanner.querySelector('.promo-content');
        if (promoContent) {
            promoContent.querySelector('h2').textContent = 'Exclusive Deal';
            promoContent.querySelector('p').textContent = 'Members get an extra 10% off all bookings. Sign up today!';
        }
    }
}

/**
 * Get test variant for an A/B test
 * In a real implementation, this would be determined by Adobe Target
 * @param {string} testName - The name of the test
 * @param {Array} variants - Array of possible variants
 * @returns {string} - The selected variant
 */
function getTestVariant(testName, variants) {
    // Check if we already have a variant stored for this test
    const storedVariant = localStorage.getItem(`travel_${testName}_variant`);
    if (storedVariant && variants.includes(storedVariant)) {
        return storedVariant;
    }
    
    // Otherwise randomly select one
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    localStorage.setItem(`travel_${testName}_variant`, randomVariant);
    return randomVariant;
}

// Add some CSS for the indicators
(function addIndicatorStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .personalization-indicator,
        .ab-test-indicator {
            position: absolute;
            top: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            font-size: 12px;
            padding: 5px;
            z-index: 100;
            opacity: 0.7;
            transition: opacity 0.3s;
        }
        
        .personalization-indicator:hover,
        .ab-test-indicator:hover {
            opacity: 1;
        }
        
        .indicator-content {
            display: flex;
            align-items: center;
        }
        
        .close-indicator {
            margin-left: 10px;
            cursor: pointer;
            font-size: 16px;
        }
        
        /* Style modifications for A/B test variants */
        .variant-b .btn-primary {
            background-color: #ff5722;
        }
        
        .variant-c .btn-primary {
            background-color: #4caf50;
        }
    `;
    document.head.appendChild(style);
})();
