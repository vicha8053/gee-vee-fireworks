import { Product } from '../types'

/**
 * PRODUCT DATA FILE
 * Edit this file in VS Code to update products.
 * 
 * - Change name, description, category, price, pack_quantity, is_available
 * - For images: put image files in /public/products/ and set image_url to "/products/filename.jpg"
 * - All prices are in Indian Rupees (₹)
 * 
 * DEMO DATA ONLY — Replace with actual product information when available.
 * Do not invent real prices or specifications.
 */
export const products: Product[] = [
  {
    id: 'demo-1',
    name: 'Demo Sparkler Pack (Placeholder)',
    description: 'This is a demo product for layout and testing. Replace with actual product details, image, and price supplied by the business owner.',
    category: 'Sparklers',
    price: 150,
    pack_quantity: '10 pieces',
    image_url: '',
    is_available: true,
    is_featured: true,
  },
  {
    id: 'demo-2',
    name: 'Demo Ground Spinner (Placeholder)',
    description: 'Demo item used for development. Update name, description, price, pack quantity and image here.',
    category: 'Ground Items',
    price: 250,
    pack_quantity: '5 pieces',
    image_url: '',
    is_available: true,
    is_featured: true,
  },
  {
    id: 'demo-3',
    name: 'Demo Aerial Shell (Placeholder)',
    description: 'Placeholder product. Owner should replace all demo entries with verified catalogue information.',
    category: 'Aerial',
    price: 800,
    pack_quantity: '1 piece',
    image_url: '',
    is_available: false,
    is_featured: false,
  },
  {
    id: 'demo-4',
    name: 'Demo Combo Pack (Placeholder)',
    description: 'Sample combo pack for demonstration. Edit price and details in this file.',
    category: 'Combo Packs',
    price: 1200,
    pack_quantity: 'Assorted 20 items',
    image_url: '',
    is_available: true,
    is_featured: true,
  },
]

export const categories = Array.from(new Set(products.map(p => p.category)))
