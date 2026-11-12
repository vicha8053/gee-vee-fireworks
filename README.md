# GEE VEE FIREWORKS

Premium Sivakasi factory-direct fireworks website matching the approved Stitch design.

Frontend-only React + Vite + Tailwind CSS. No backend, database, or authentication.

## Features

- Dark premium wholesale layout matching Stitch screenshots
- Transparent official logo
- Product catalogue with categories, search, sorting, and detail pages
- Persistent shopping cart (localStorage)
- Automatic price calculation with Indian Rupee formatting
- Customer details form + live WhatsApp message preview
- Dynamic WhatsApp enquiry to +91 9944581264
- Contact page with WhatsApp estimate request
- Safety & legal information
- Fully responsive (desktop, tablet, mobile)

## Update Products

Edit `src/data/products.js`.

- Change name, description, category, price, mrp, packQuantity, isAvailable, isFeatured
- Place product images in `public/images/products/`
- Set the `image` field to `/images/products/yourfile.jpg`

Demo products are currently shown. Replace with verified catalogue data.

## Local Development

```bash
npm install
npm run dev
```

## Build & Netlify

```bash
npm run build
```

- Build command: `npm run build`
- Publish directory: `dist`
- No environment variables required

## Customer Journey

1. Browse Home or Products catalogue
2. View product details and add to cart
3. Open Cart → adjust quantities
4. Enter name, phone, location
5. Review live WhatsApp preview
6. Click **SEND ENQUIRY VIA WHATSAPP**
7. WhatsApp opens with complete pre-filled message

The message is an enquiry only. The owner confirms availability and final price.

## Contact

GEE VEE FIREWORKS  
Moovaraivendran, Sivakasi, Tamil Nadu – 626123  
Phone / WhatsApp: +91 9944581264  
Email: geeveebala1982@gmail.com
