# Travel - Adobe Target Testing Mini-Site

A simple travel booking mini-site designed for testing Adobe Target personalization and A/B testing features. This project is built with pure HTML, CSS, and JavaScript, making it easy to deploy on GitHub Pages.

## Overview

This mini-site simulates a travel booking platform with the following features:

- Responsive design that works on mobile and desktop
- Multiple pages including home, destinations, special offers, and destination details
- Integration points for Adobe Target personalization and A/B testing
- Simulated data for destinations and offers

## Adobe Target Testing Features

This site is specifically designed to demonstrate and test Adobe Target capabilities:

### Personalization Use Cases

1. **Geo-Based Personalization**
   - Personalize travel packages based on user's region (using geo.country in Target)
   - Elements with `data-adobe-target="geo-personalization"` attribute are set up for this

2. **A/B Testing**
   - Test different banner images and taglines on the homepage
   - Elements with `data-adobe-target="hero-banner"` attribute are set up for this
   - Test different CTA buttons with `data-adobe-target="cta-button"` attribute
   - Test promotional banners with `data-adobe-target="promo-banner"` attribute

### How Adobe Target Integration Works

The site includes a demonstration script (`js/adobe-target-integration.js`) that simulates how Adobe Target would work. In a real implementation:

1. Adobe Launch would be used to deploy Adobe Target
2. Experience Cloud ID Service would handle visitor identification
3. Adobe Target would manage test variants and personalization rules

For demonstration purposes, this site:
- Simulates visitor identification using localStorage
- Randomly assigns test variants to demonstrate the concept
- Shows visual indicators of where personalization and A/B testing are applied

## Project Structure

```
travel/
├── index.html                  # Homepage
├── destinations.html           # Destinations listing page
├── offers.html                 # Special offers page
├── destination-detail.html     # Destination details page template
├── css/
│   └── style.css               # Main stylesheet
├── js/
│   ├── main.js                 # General functionality
│   ├── destinations.js         # Destinations data and functionality
│   ├── offers.js               # Offers data and functionality
│   ├── destination-detail.js   # Destination detail page functionality
│   └── adobe-target-integration.js  # Adobe Target integration demo
├── data/
│   └── destinations.json       # Destinations data
└── images/
    ├── banners/                # Banner images
    ├── destinations/           # Destination images
    └── icons/                  # Icon images
```

## How to Use

### Basic Usage

1. Clone this repository
2. Open `index.html` in your browser to view the site
3. Navigate through the pages to see the different features

### For Adobe Target Testing

1. Deploy the site to GitHub Pages or your preferred hosting
2. In a real implementation, you would:
   - Set up Adobe Launch with Adobe Target
   - Configure data elements for visitor data
   - Create activities in Adobe Target that target the elements with `data-adobe-target` attributes
   - Set up personalization rules based on geo.country or other parameters
   - Create A/B tests for banners, CTAs, and other elements

### Simulated Features

The current implementation simulates:

- Visitor identification (using localStorage)
- Geo-based personalization (randomly assigns a country)
- A/B testing (randomly assigns test variants)

These simulations help visualize how Adobe Target would work when properly implemented.

## Customization

### Adding New Destinations

Edit the `data/destinations.json` file to add new destinations or modify existing ones.

### Modifying A/B Test Elements

Look for elements with `data-adobe-target` attributes in the HTML files to identify where A/B tests can be set up.

### Styling

The site uses CSS variables defined at the top of `css/style.css` for easy customization of colors, fonts, and spacing.

## GitHub Pages Deployment

This site is designed to be easily deployed on GitHub Pages:

1. Push the repository to GitHub
2. Go to repository settings
3. Under "GitHub Pages", select the main branch as the source
4. The site will be published at `https://[username].github.io/travel/`

## License

This project is available for personal and educational use.
