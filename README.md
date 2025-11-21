# Beulah Skill Training Academy Website

Production-ready, animated, responsive website for Beulah Skill Training Academy — a warm bakery-themed training centre in Pudukottai, Tamil Nadu.

## 🎨 Features

- **Beautiful Design**: Warm bakery aesthetic with cream, chocolate, and cocoa color palette
- **Smooth Animations**: Framer Motion + GSAP ScrollTrigger for delightful interactions
- **3D Hero**: Immersive hero section with parallax effects
- **Fully Responsive**: Optimized for all devices with mobile-first approach
- **SEO Optimized**: Complete meta tags, structured data, and semantic HTML
- **Accessible**: WCAG compliant with keyboard navigation and focus management
- **Modal Forms**: Google Forms integration via accessible modal popups

## 🚀 Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion + GSAP
- **3D**: Three.js (ready for advanced 3D models)
- **UI Components**: Shadcn/ui + Radix UI
- **Icons**: Lucide React

## 📦 Project Structure

```
src/
├── assets/              # AI-generated images and logo
│   ├── courses/         # Course-specific images
│   └── products/        # Product images
├── components/          # Reusable components
│   ├── ui/              # Shadcn UI components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Modal.tsx        # Accessible modal for forms
│   ├── CourseCard.tsx   # Course display card
│   └── Hero3D.tsx       # Hero section with parallax
├── pages/               # Page components
│   ├── Home.tsx         # Home page
│   ├── Courses.tsx      # All courses page
│   ├── Order.tsx        # Order baked goods page
│   └── NotFound.tsx     # 404 page
└── App.tsx              # Main app with routing
```

## 🎯 Pages

### Home (`/`)
- Immersive 3D hero with parallax effects
- Trending courses carousel
- About section with academy values
- Student testimonials
- Call-to-action sections

### Courses (`/courses`)
- All courses with filtering by category
- Detailed course cards with hover animations
- No prices shown (as per requirements)
- Single enrollment CTA

### Order (`/order`)
- Product categories: Brownies, Blondies, Cupcakes, Cakes, Cookies, Gift Boxes
- Product showcase with hover effects
- Local pickup information
- Custom cake request option

## 🎨 Design System

### Colors (HSL)
```css
--creme: 30 35% 92%    /* Warm cream background */
--choco: 20 15% 16%    /* Rich chocolate text */
--coco: 15 39% 21%     /* Deep cocoa accent */
--mocha: 30 16% 57%    /* Soft mocha accent */
```

### Typography
- **Headings**: Poppins (friendly, rounded)
- **Body**: Inter (readable, clean)

### Shadows
- `shadow-warm`: Subtle warm shadow for cards
- `shadow-glow`: Glow effect on hover

## 📝 Google Forms Integration

Three forms open in accessible modals:

1. **Enrollment**: `https://forms.gle/L7r2nXz9SfwBDi9x9`
2. **Contact**: `https://forms.gle/EioB5iiSvTym3yeLA`
3. **Order**: `https://forms.gle/AUT9suo7jX4Svo2Z9`

Forms are loaded in iframes with fallback to open in new tab if blocked.

## 🔧 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus trap in modals
- High contrast text
- Alt text for all images

## 🎬 Animation System

### Framer Motion
- Page transitions
- UI component animations
- Hover micro-interactions

### GSAP ScrollTrigger
- Scroll-based animations
- Parallax effects
- Staggered reveals

## 📊 SEO Implementation

- Complete meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card metadata
- JSON-LD structured data (Organization, LocalBusiness)
- Canonical URLs
- Semantic HTML structure

## 🖼️ Assets

All images are AI-generated using:
- Hero: 1920x1080 (Flux.dev for quality)
- Courses: 1024x768 (Flux.schnell for speed)
- Products: 1024x768 (Flux.schnell for speed)
- Logo: 512x512 (Flux.schnell)

## 🌐 Deployment

Ready for deployment to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting service

```bash
# Build command
npm run build

# Output directory
dist/
```

## 📧 Contact Information

- **Email**: info@beulahacademy.com (mailto link)
- **Instagram**: @beulahacademy (external link)
- **Location**: Pudukottai, Tamil Nadu, India
- **Note**: No phone number displayed as per requirements

## 🎓 Courses Offered

### Baking
1. Brownie Workshop (1 Day)
2. Cupcake Workshop (1 Day)
3. Tea Cake Workshop (1 Day)
4. Plum Cake Workshop (1 Day)
5. Cake Master Class (2 Days)
6. Cookies Workshop (1 Day)

### Other Skills
7. Cursive Handwriting (7 Days)
8. Spoken English (1 Month)

All courses include government-registered certificates.

## 🛍️ Products Available

- Brownies (Rich fudge & blondies)
- Cupcakes (Various flavors)
- Cakes (Custom & celebration)
- Cookies (Assorted varieties)
- Gift Boxes (Curated selections)

## 🔐 Security

- Forms use sandboxed iframes
- External links use `rel="noopener noreferrer"`
- No sensitive data stored client-side

## 📄 License

© 2025 Beulah Skill Training Academy. All rights reserved.

---

**Fresh skills, sweeter futures — Beulah Skill Training Academy, Pudukottai** 🧁
