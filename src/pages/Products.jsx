import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Filter } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('popular')

  const category = searchParams.get('category') || 'all'

  const filtered = useMemo(() => {
    let result = [...products]
    if (category && category !== 'all') {
      result = result.filter(p => p.category === category)
    }
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    else if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name))
    return result
  }, [category, search, sort])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-gold-600 rounded-2xl p-6 mb-8 text-dark-950">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium opacity-80 mb-1">DIWALI 2024 DIRECT CLEARANCE</div>
            <h1 className="text-2xl lg:text-3xl font-bold">Festive Factory Direct Pricing – Up to 80% Off</h1>
            <p className="text-sm mt-1 opacity-90">Procure directly from Moovaraivendran Sivakasi depot. Safe packaging with bubble-wrap lining and licensed regional transport delivery.</p>
          </div>
          <div className="text-right">
            <div className="text-xs">MIN. BOOKING VALUE</div>
            <div className="text-2xl font-bold">₹3,000 / Consignment</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-dark-800 rounded-xl border border-white/5 p-4 sticky top-24">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="search"
                placeholder="Search 100+ Sivakasi crackers..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-dark-700 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>

            <div className="text-xs text-white/50 uppercase tracking-wider mb-3">Categories</div>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSearchParams(cat.id === 'all' ? {} : { category: cat.id })}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm flex justify-between ${
                    category === cat.id
                      ? 'bg-gold-500 text-dark-950 font-medium'
                      : 'hover:bg-white/5 text-white/80'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-xs opacity-70">{cat.count}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="text-xs text-white/50 uppercase tracking-wider mb-3">Sort By</div>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="w-full bg-dark-700 border border-white/10 rounded-lg px-3 py-2 text-sm"
              >
                <option value="popular">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">All Sivakasi Crackers</h2>
              <p className="text-sm text-white/50">Displaying {filtered.length} genuine factory direct pyrotechnic products</p>
            </div>
            <a
              href="https://wa.me/919944581264"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg"
            >
              Quick WhatsApp Enquire
            </a>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-white/50">
              <Filter className="w-10 h-10 mx-auto mb-3 opacity-40" />
              No products match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          <p className="text-xs text-amber-400/80 bg-amber-950/30 border border-amber-800/40 rounded-lg p-3 mt-8">
            Demo catalogue shown. Edit <code className="bg-dark-700 px-1 rounded">src/data/products.js</code> to update names, prices, pack quantities, and image paths. Place real photos in <code className="bg-dark-700 px-1 rounded">public/images/products/</code>.
          </p>
        </div>
      </div>
    </div>
  )
}
