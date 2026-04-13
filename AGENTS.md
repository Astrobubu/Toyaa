<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Toya Site - Agent Context

- **Framework**: Next.js 16 (App Router) + React 19. Assume React 19 paradigms (e.g., `<form action>`, Server Components by default).
- **Styling (Tailwind v4)**: The project uses Tailwind CSS v4. **DO NOT look for or create `tailwind.config.js`**. All custom theme variables are defined via `@theme inline` in `src/app/globals.css`.
- **UI Components**: No external UI libraries (no shadcn/ui, no Radix). Do not install icon libraries like `lucide-react`; use inline SVGs.
- **State & Storage**: Cart state is managed in `src/app/context/CartContext.tsx` and persists to `localStorage` under the key `"toya_cart"`.
- **Linting**: Uses ESLint v9 Flat Config (`eslint.config.mjs`). Run linting via `npm run lint` (which triggers `eslint`, not `next lint`).

## Business Context & Operations
- **Company Stage**: Small startup. The product (Domyah) is brand new.
- **Fulfillment**: **Made to order only**. There is NO bulk stock or inventory to pull from. Every item is crafted upon order.
- **Customer Interaction**: Highly manual and personalized. All checkouts, feature requests, and support are routed directly through WhatsApp. Always point users to WhatsApp for communication.