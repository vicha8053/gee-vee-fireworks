import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatINR } from '../data/products'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)

  const save = product.mrp ? product.mrp - product.price : 0

  return (
    <div className="bg-dark-800 rounded-xl border border-white/5 overflow-hidden hover:border-gold-500/30 transition-colors flex flex-col">
      <Link to={`/product/${product.id}`} className="relative aspect-square bg-dark-700 block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />
        {product.discount && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded">
            {product.discount}% OFF
          </span>
        )}
        {product.greenCracker && (
          <span className="absolute top-2 left-2 bg-green-600/90 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
            Green Cracker
          </span>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-gold-400 uppercase tracking-wide mb-1">
          {product.category.replace('-', ' ')}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-white leading-snug line-clamp-2 hover:text-gold-400">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-white/50 mt-1 line-clamp-2 flex-1">{product.description}</p>
        <div className="text-xs text-white/40 mt-1">{product.packQuantity}</div>

        <div className="flex items-baseline gap-2 mt-3">
          <span className="text-lg font-bold text-white">{formatINR(product.price)}</span>
          {product.mrp && (
            <span className="text-sm text-white/40 line-through">{formatINR(product.mrp)}</span>
          )}
          {save > 0 && (
            <span className="text-xs text-green-400 ml-auto">You Save {formatINR(save)}</span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            product.isAvailable ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {product.isAvailable ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {product.isAvailable && (
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center bg-dark-700 rounded-lg border border-white/10">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 hover:bg-white/5">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-3 text-sm font-medium w-8 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-2 hover:bg-white/5">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => addItem(product, qty)}
              className="flex-1 flex items-center justify-center gap-1.5 bg-gold-500 hover:bg-gold-400 text-dark-950 font-semibold py-2 rounded-lg text-sm"
            >
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
