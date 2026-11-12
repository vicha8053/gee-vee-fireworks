import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react'
import { getProductById, formatINR } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/products" className="text-gold-400 hover:underline">Back to catalogue</Link>
      </div>
    )
  }

  const save = product.mrp ? product.mrp - product.price : 0

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-gold-400 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Catalogue
      </Link>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-dark-800 rounded-2xl border border-white/5 aspect-square flex items-center justify-center p-8">
          <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
        </div>

        <div>
          {product.greenCracker && (
            <span className="inline-block bg-green-600/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full mb-3">
              Green Cracker • CSIR-NEERI
            </span>
          )}
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-white/60 mb-4">{product.description}</p>
          <div className="text-sm text-white/50 mb-6">Pack: {product.packQuantity}</div>

          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-4xl font-bold">{formatINR(product.price)}</span>
            {product.mrp && <span className="text-xl text-white/40 line-through">{formatINR(product.mrp)}</span>}
          </div>
          {save > 0 && <div className="text-green-400 text-sm mb-6">You Save {formatINR(save)} ({product.discount}% OFF)</div>}

          <div className={`inline-block text-sm px-3 py-1 rounded-full mb-6 ${
            product.isAvailable ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {product.isAvailable ? 'In Stock' : 'Currently Unavailable'}
          </div>

          {product.isAvailable && (
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center bg-dark-700 rounded-lg border border-white/10">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-white/5"><Minus className="w-4 h-4" /></button>
                <span className="px-4 font-medium w-10 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-white/5"><Plus className="w-4 h-4" /></button>
              </div>
              <button
                onClick={() => addItem(product, qty)}
                className="flex-1 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-950 font-semibold py-3 rounded-lg"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
            </div>
          )}

          <div className="text-xs text-white/40 border-t border-white/10 pt-4">
            Prices are factory direct estimates. Final availability and pricing confirmed by GEE VEE FIREWORKS via WhatsApp.
          </div>
        </div>
      </div>
    </div>
  )
}
