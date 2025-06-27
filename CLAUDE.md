# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a real estate photography business website for Distinctive Properties of Minnesota, serving the Brainerd Lakes Area and Central Minnesota. The site showcases professional real estate photography, video, aerial drone, and 3D Matterport services.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: React 19.1.0 with Vite 7.0.0
- **Routing**: React Router DOM v7.6.2
- **Animation**: Framer Motion v12.19.1
- **Icons**: React Icons v5.5.0
- **Styling**: Custom CSS with CSS variables (no framework)
- **Deployment**: Netlify with Forms integration

### Directory Structure
```
src/
├── components/      # Reusable components
│   ├── Navbar.jsx   # Navigation with mobile menu
│   ├── Footer.jsx   # Footer with business info
│   ├── Lightbox.jsx # Image gallery lightbox
│   └── SEO.jsx      # Dynamic meta tags & structured data
├── pages/           # Route pages
│   ├── Home.jsx     # Landing page with hero & services
│   ├── Services.jsx # Service offerings
│   ├── Gallery.jsx  # Photo gallery with lightbox
│   ├── About.jsx    # About the business
│   └── Contact.jsx  # Contact form (Netlify Forms)
├── App.jsx          # Main app with routing
├── App.css          # Global styles & CSS variables
└── main.jsx         # React entry point
```

## Key Development Patterns

### Styling
- Uses CSS variables defined in `:root` for consistent theming
- Component-specific CSS files (e.g., `Home.css`, `Gallery.css`)
- Mobile-first responsive design
- Full-width sections with constrained content (max-width: 1400px)

### Design System
```css
--primary-color: #1a365d;
--primary-hover: #2c5282;
--accent-color: #3182ce;
--text-color: #333;
--light-gray: #f7fafc;
```

### SEO Implementation
- Dynamic SEO component on each page
- Local business structured data
- Meta tags for social sharing
- Sitemap included

### Contact Form
- Integrated with Netlify Forms
- Form name: "contact"
- Hidden bot field for spam protection
- Success/error handling with state management

## Deployment

### Netlify Configuration
- **Site ID**: 7524908e-4304-48ec-9562-c5f5c5f8a1d7
- **Build Directory**: `dist`
- **SPA Redirects**: Configured in `netlify.toml`
- **Forms**: Netlify Forms enabled for contact form

### Domain Setup
- **Primary Domain**: distinctivepropertiesmn.com (to be configured)
- **Contact Email**: bpederson@distinctivepropertiesmn.com

## Testing
- Puppeteer scripts available for form testing
- No unit testing framework currently set up

## Business Context
- **Services**: Real estate photography, video tours, aerial drone, 3D Matterport
- **Service Area**: Brainerd, Baxter, Nisswa, Pequot Lakes, Crosslake, Pillager, Motley, Staples, Pine River, Walker
- **Target Audience**: Real estate agents and homeowners in Central Minnesota

## Common Tasks

### Adding New Gallery Images
1. Add images to `public/images/gallery/`
2. Update the images array in `src/pages/Gallery.jsx`
3. Ensure images are optimized for web (compressed, appropriate dimensions)

### Modifying Service Areas
Update service areas in:
- `src/pages/Home.jsx` (service areas section)
- `src/components/Footer.jsx` (footer listing)
- `src/components/SEO.jsx` (structured data)

### Updating Contact Information
Contact details appear in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/components/SEO.jsx` (structured data)

### Social Media
- Instagram: @distinctivepropertiesmn
- Footer displays only Instagram icon (Facebook and LinkedIn removed)

### Navigation Active States
The navbar uses React Router's NavLink component to show active page states:
- Active links display in accent color with underline
- Contact button has special active state styling
- Mobile menu shows active state with background color
- NavLink components automatically add 'active' class to current page

### Recent UI Enhancements (June 26, 2025)

#### Contact Form Redesign
The contact form has been significantly enhanced for better user experience:
- **Larger, bolder design**: Increased padding (3.5rem), larger fonts (2.5rem heading)
- **Visual personality**: House emoji in header (🏠), camera emoji for services (📸)
- **Improved layout**: 
  - Services and time preference in styled containers with backgrounds
  - Better spacing between form elements (2rem margins)
  - Gradient submit button with hover animations
- **Enhanced interactions**:
  - Focus states with shadow rings
  - Hover effects on checkboxes and radio buttons
  - Animated success/error messages
- **Form fields include**:
  - Name, Email, Phone (in a two-column layout)
  - Property Address
  - Services checkboxes (styled grid)
  - Preferred Date
  - Preferred Shoot Time (radio buttons: Morning/Afternoon/Flexible)
  - Additional Details textarea

## Performance Considerations
- Images should be optimized before adding to the gallery
- Lightbox component lazy loads images
- CSS is split by component to reduce initial bundle size
- Framer Motion animations are kept lightweight

## CRITICAL: Layout Requirements

### Body Styling (DO NOT MODIFY)
The `body` element in `src/index.css` MUST maintain these specific styles for proper layout:

```css
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
```

**WARNING**: Removing `display: flex` and `place-items: center` will break the entire site layout. These properties are essential for centering the React app container properly.

### Full-Width Sections
- Use `width: 100%` (NOT `100vw`) to prevent horizontal scrolling
- The negative margin technique (`margin-left: calc(-50vw + 50%)`) is used intentionally for full-width backgrounds
- Container content should be constrained with `max-width: 1400px`

## Version History

### June 26, 2025
- Added navigation active states with NavLink
- Redesigned contact form with enhanced UI/UX
- Removed Facebook and LinkedIn icons (Instagram only)
- Fixed body layout issues (restored flex centering)
- Updated Instagram link to @distinctivepropertiesmn