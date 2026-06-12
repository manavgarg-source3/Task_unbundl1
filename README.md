# Whistle Aligners — Frontend Implementation

A production-quality React + Vite application that recreates the Whistle Aligners landing page from a Figma design. This project demonstrates React fundamentals, component-based architecture, responsive design, dynamic data handling, and clean code organization.

![Whistle Aligners](public/images/whistle-logo.png)

---

## 🚀 Setup Instructions

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.jsx          # Hero section with form and navigation
│   │   └── Hero.css          # Hero-specific styles
│   ├── Results/
│   │   ├── Results.jsx       # Before/after transformation cards
│   │   └── Results.css       # Results grid and card styles
│   ├── WhyWhistle/
│   │   ├── WhyWhistle.jsx    # API-powered feature cards
│   │   └── WhyWhistle.css    # Card grid with loading/error states
│   ├── FAQ/
│   │   ├── FAQ.jsx           # Accordion with keyboard accessibility
│   │   └── FAQ.css           # Expand/collapse animations
│   └── Footer/
│       ├── Footer.jsx        # Site footer with links and branding
│       └── Footer.css        # Footer layout and styles
├── data/
│   └── results.json          # Smile transformation data (local)
├── App.jsx                   # Root component composing all sections
├── main.jsx                  # React entry point
└── index.css                 # Global design system and CSS reset
```

---

## 📊 Data Sources

| Section         | Source                                                        | Rationale                                                                                  |
|-----------------|---------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| **Hero**        | Static/inline                                                 | Form inputs and navigation — no external data needed                                       |
| **Results**     | `src/data/results.json`                                       | Before/after smile transformations require dental-specific data that no public API provides |
| **Why Whistle** | [DummyJSON API](https://dummyjson.com/products?limit=4)       | Uses `thumbnail` → image, `title` → heading, `description` → content as required           |
| **FAQ**         | Static/inline                                                 | FAQ content is domain-specific (dental aligners) and requires curated answers               |
| **Footer**      | Static/inline                                                 | Footer links and branding — no external data needed                                        |

### Data Decision Rationale

- **Why Whistle section uses a public API** (`dummyjson.com/products?limit=4`) to demonstrate dynamic data handling with `useState`, `useEffect`, loading states, and error handling as specified in the assessment.
- **Results uses local JSON** because its content is domain-specific (dental transformations) and no public API provides suitable dental data.
- **FAQ and Footer use static data** as their content is curated and domain-specific.

---

## 🎨 Implementation Approach

### Component Architecture
Each section is a self-contained React component with its own CSS file, following the **BEM naming convention** (`block__element--modifier`). Components are functional and use React hooks exclusively.

### API Integration
The **Why Whistle** section demonstrates:
- `useEffect` for data fetching on mount
- `useState` for managing loading, error, and data states
- **Loading skeleton** with shimmer animation during fetch
- **Error state** with a retry button and descriptive message
- **Data transformation** mapping API fields to UI props

### Styling Strategy
- **Custom CSS only** — no utility frameworks
- **CSS custom properties** for a consistent design system (colors, spacing, typography, shadows)
- **BEM methodology** for maintainable, scoped class names
- **Google Fonts** (Inter) for modern, clean typography

### Responsiveness
Three breakpoints ensure the design adapts gracefully:

| Breakpoint | Target       | Key Changes                                      |
|------------|--------------|--------------------------------------------------|
| `1024px`   | Tablet       | Adjust grid columns, reduce font sizes           |
| `768px`    | Small Tablet | Stack layouts vertically, hide desktop nav       |
| `480px`    | Mobile       | Single-column layouts, compact spacing           |

### Accessibility
- Semantic HTML5 elements (`<section>`, `<nav>`, `<form>`, `<button>`)
- Proper `<label>` associations for all form inputs
- ARIA attributes on the FAQ accordion (`aria-expanded`, `aria-controls`, `role`)
- Keyboard navigation (Enter/Space to toggle FAQ items)
- `focus-visible` outlines for keyboard users
- Descriptive `alt` text on all images

---

## ✨ Key Features

- **Sticky navigation** with glassmorphism backdrop blur
- **Animated floating cards** on the hero section (clinic selector + stats badge)
- **Star ratings** with SVG icons
- **Before/After image cards** with gradient overlays and hover zoom
- **Shimmer skeleton loader** during API requests
- **Smooth accordion** with CSS `max-height` transitions
- **Purple gradient CTA buttons** with hover lift effects
- **Micro-animations** (fade-in-up on scroll, hover transforms)
- **Footer** with site links and branding

---

## 🛠 Tech Stack

- **React 19** — Functional components with hooks
- **Vite 8** — Lightning-fast HMR and build tooling
- **Custom CSS** — Design system with CSS custom properties
- **DummyJSON API** — External data source for dynamic rendering

---

## 📝 License

This project was created as a frontend development assessment.
