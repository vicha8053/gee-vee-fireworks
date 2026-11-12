import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingCart, Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/products', label: '100+ Products Catalogue' },
    { to: '/products', label: 'Price List PDF' },
    { to: '/about', label: 'About & Safety' },
    { to: '/contact', label: 'Contact Us' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-dark-950/95 backdrop-blur border-b border-white/5">
      {/* Top announcement */}
      <div className="bg-dark-800 text-center text-xs py-1.5 text-gold-400 tracking-wide">
        Sivakasi Direct Factory Prices | 100% Genuine Green Crackers CSIR-NEERI Approved | Diwali & Festive Bookings Open | Fast Pan-India Transport
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-18 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/images/gee-vee-logo-transparent.png"
              alt="GEE VEE FIREWORKS"
              className="h-10 lg:h-12 w-auto"
            />
            <span className="hidden sm:inline text-xs bg-green-600/20 text-green-400 px-2 py-0.5 rounded-full border border-green-600/40">
              SIVAKASI FACTORY DEPOT
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {nav.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className={`hover:text-gold-400 transition-colors ${
                  isActive(item.to) ? 'text-gold-400' : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:text-gold-400"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <a
              href="tel:+919944581264"
              className="hidden md:flex items-center gap-1.5 text-sm text-white/80 hover:text-gold-400"
            >
              <Phone className="w-4 h-4" />
              +91 9944581264
            </a>
            <Link
              to="/cart"
              className="relative p-2 hover:text-gold-400"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold-500 text-dark-950 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-3">
            <input
              type="search"
              placeholder="Search 100+ Sivakasi crackers, gift boxes..."
              className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-dark-900">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {nav.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-white/90 hover:text-gold-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
