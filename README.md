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
│   │   ├── Hero.jsx          # Hero section with form, navigation, marquee and success popup
│   │   └── Hero.css          # Hero-specific styles
│   ├── Results/
│   │   ├── Results.jsx       # Before/after smile transformation cards
│   │   └── Results.css       # Results grid and card styles
│   ├── WhyWhistle/
│   │   ├── WhyWhistle.jsx    # Feature cards with static inline data
│   │   └── WhyWhistle.css    # Card carousel styles
│   ├── FAQ/
│   │   ├── FAQ.jsx           # Accordion powered by JSONPlaceholder API
│   │   └── FAQ.css           # Expand/collapse animations and skeleton loader
│   └── Footer/
│       ├── Footer.jsx        # Site footer with quick links, contact info and socials
│       └── Footer.css        # Footer layout and styles
├── data/
│   └── results.json          # Before/after smile transformation data (local JSON)
├── App.jsx                   # Root component composing all sections
├── main.jsx                  # React 18 createRoot entry point
└── index.css                 # Global design system, CSS reset and utility classes
```

```
public/
├── favicon.svg               # SVG favicon
├── icons.svg                  # Shared SVG icon sprite
└── images/
    ├── whistle-logo.png       # Brand logo
    ├── image.png              # Hero section main image
    ├── clove.png              # Clove Dental partner logo
    ├── teeth.png–teeth4.png   # Why Whistle feature card images
    ├── gaps1.png, gaps2.png           # Before/after — Gaps
    ├── crooked1.png, crooked2.png     # Before/after — Crooked Teeth
    ├── open1.png, open2.png           # Before/after — Open Bite
    └── protruding1.png, protruding2.png # Before/after — Protruding Teeth
```

---

## 📊 Data Sources

| Section         | Source                                                                          | Type            |
|-----------------|---------------------------------------------------------------------------------|-----------------|
| **Hero**        | Static/inline                                                                   | Hardcoded JSX   |
| **Results**     | [`src/data/results.json`](src/data/results.json)                                | Local JSON file |
| **Why Whistle** | Static inline array (hardcoded in component)                                    | Hardcoded JS    |
| **FAQ**         | [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts?_limit=5)      | External API    |
| **Footer**      | Static/inline                                                                   | Hardcoded JSX   |

### API & Data Decision Rationale

- **FAQ section uses a public API** ([`jsonplaceholder.typicode.com/posts?_limit=5`](https://jsonplaceholder.typicode.com/posts?_limit=5)) to demonstrate dynamic data handling with:
  - `useEffect` for data fetching on component mount
  - `useState` for managing `loading`, `error`, and `faqs` states
  - **Loading skeleton** with shimmer animation during fetch
  - **Error state** with a retry button and descriptive message
  - **Data transformation** — API fields `title` → `question` (capitalized + `?`), `body` → `answer` (capitalized + `.`)
- **Results uses a local JSON file** (`src/data/results.json`) because before/after dental transformation data is domain-specific and no public API provides suitable dental images.
- **Why Whistle uses a static inline array** because its content (custom-made aligners, predictable results, Clove Dental partnership, unlimited aligners) is curated brand messaging with specific local images.
- **Hero and Footer use static/inline JSX** as they contain navigation, form inputs, contact information, and branding that don't require external data.

---

## 🎨 Implementation Approach

### Component Architecture
Each section is a self-contained React functional component with its own CSS file, following the **BEM naming convention** (`block__element--modifier`). Components use React hooks exclusively (`useState`, `useEffect`).

### API Integration (FAQ Section)
The **FAQ** section demonstrates full API integration:
```
fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  → useState (loading / error / data)
  → Skeleton loader while loading
  → Error state with retry button
  → Data mapping: { title → question, body → answer }
```

### Styling Strategy
- **Custom CSS only** — no utility frameworks (Tailwind, Bootstrap, etc.)
- **CSS custom properties** for a consistent design system (colors, spacing, typography, shadows, radii, transitions)
- **BEM methodology** for maintainable, scoped class names
- **Google Fonts** (Inter) loaded via `@import` with preconnect hints

### Responsiveness
Three breakpoints ensure the design adapts gracefully:

| Breakpoint | Target       | Key Changes                                      |
|------------|--------------|--------------------------------------------------|
| `1024px`   | Tablet       | Adjust grid columns, reduce font sizes           |
| `768px`    | Small Tablet | Stack layouts vertically, hide desktop nav       |
| `480px`    | Mobile       | Single-column layouts, compact spacing           |

### Accessibility
- Semantic HTML5 elements (`<section>`, `<nav>`, `<form>`, `<button>`, `<footer>`)
- Proper `<label>` associations for all form inputs
- ARIA attributes on the FAQ accordion (`aria-expanded`, `aria-controls`, `role="region"`)
- Keyboard navigation (Enter/Space to toggle FAQ items)
- `aria-label` on social links and icon-only buttons
- Descriptive `alt` text on all images

### SEO
- Descriptive `<title>` tag
- `<meta name="description">` and `<meta name="keywords">` in `index.html`
- Preconnect hints for Google Fonts
- Semantic heading hierarchy (`<h1>` → `<h2>` → `<h3>`)

---

## ✨ Key Features

- **Sticky header** with pricing banner and phone CTA
- **Hero section** with booking form, radio inputs, consent checkbox, and success popup modal
- **Scrolling marquee** banner with launch benefits
- **Clove Dental partnership card** with "Find Clinic" button
- **Before/After cards** showing smile transformations from local JSON data
- **Why Whistle cards** showcasing product benefits with local images
- **FAQ accordion** with expand/collapse animations, fetched dynamically from JSONPlaceholder API
- **Shimmer skeleton loader** during API fetch
- **Error handling** with retry capability on API failure
- **Footer** with quick links, contact info (phone + email), social media icons, and legal links
- **Micro-animations** (hover transforms, smooth transitions)
- **Responsive design** across desktop, tablet, and mobile

---

## 🛠 Tech Stack

| Technology        | Version    | Purpose                                      |
|-------------------|------------|----------------------------------------------|
| **React**         | ^19.2.6    | UI framework — functional components + hooks |
| **React DOM**     | ^19.2.6    | DOM rendering with `createRoot`              |
| **Vite**          | ^8.0.12    | Dev server with HMR + production bundler     |
| **Custom CSS**    | —          | Design system with CSS custom properties     |
| **JSONPlaceholder**| —         | Free REST API for FAQ dynamic data           |
| **Google Fonts**  | Inter      | Modern typography                            |
| **ESLint**        | ^10.3.0    | Code linting with React hooks plugin         |

---

## 📝 License

This project was created as a frontend development assessment.
