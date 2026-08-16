# Kortek - Premium Ecommerce Platform

A modern, high-performance ecommerce platform built with Next.js, React Server Components, and Tailwind CSS. Inspired by Vercel Commerce with a sleek black, white, and orange design.

## Features

✨ **Modern Tech Stack**
- Next.js 15 with App Router
- React 19 with Server Components
- TypeScript for type safety
- Tailwind CSS 4 for styling

🎨 **Design & UX**
- Premium black, white, and orange color scheme
- Responsive mobile-first design
- Smooth animations and transitions
- Dark/Light mode ready

🛍️ **Ecommerce Features**
- Product catalog and filtering
- Shopping cart functionality
- Product details pages
- Category browsing
- Search capabilities

⚡ **Performance**
- Server-side rendering (SSR)
- Static generation where possible
- Image optimization
- Edge runtime support

🔐 **Developer Experience**
- Clean, maintainable code structure
- TypeScript strict mode
- ESLint and Prettier configured
- Environment variable management

## Project Structure

```
kkkk/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── products/
│   │   ├── page.tsx        # Products listing
│   │   └── [id]/
│   │       └── page.tsx    # Product detail
│   ├── cart/
│   │   └── page.tsx        # Shopping cart
│   └── api/
│       └── products/
│           └── route.ts    # API endpoints
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Products.tsx        # Products grid
│   ├── ProductCard.tsx     # Product card component
│   ├── Cart.tsx            # Cart component
│   ├── Footer.tsx          # Footer
│   └── common/
│       ├── Button.tsx      # Button component
│       └── Container.tsx   # Container wrapper
├── lib/
│   ├── types.ts            # TypeScript types
│   ├── constants.ts        # Constants
│   └── utils.ts            # Utility functions
├── public/
│   └── assets/             # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/skullcartelofficial-del/kkkk.git
cd kkkk

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Color Palette

- **Primary Black**: #000000
- **Pure White**: #FFFFFF
- **Accent Orange**: #FF8C00
- **Dark Gray**: #1F2937
- **Light Gray**: #F3F4F6

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 15 | Framework |
| React 19 | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS 4 | Styling |
| Vercel | Deployment |

## API Routes

### Products
- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get product by ID
- `GET /api/products/search?q=query` - Search products

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add to cart
- `DELETE /api/cart/[id]` - Remove from cart

## Environment Variables

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
API_ENDPOINT=https://api.example.com
```

## Performance Metrics

- ⚡ Lighthouse Score: 95+
- 📱 Mobile Optimized
- 🚀 Core Web Vitals Ready
- 🌍 Global CDN Deployment

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - See LICENSE.md for details

## Support

For issues, feature requests, or questions, please open an issue on GitHub.

---

Built with ❤️ by Skull Cartel Official
