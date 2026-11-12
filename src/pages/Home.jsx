import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Award, Package, MessageCircle, MapPin, Phone } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const featured = products.filter(p => p.isFeatured).slice(0, 8)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 via-transparent to-orange-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">DIWALI 2024-25 FACTORY DESPATCH OPEN</span>
                <span className="text-xs bg-green-600/20 text-green-400 px-3 py-1 rounded-full">CSIR-NEERI Approved</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Direct Sivakasi<br />
                <span className="text-gold-400">Factory Crackers</span><br />
                at Wholesale Prices
              </h1>
              <p className="text-white/70 text-lg mb-6 max-w-lg">
                Handcrafted aerial repeats, high-decibel wala garlands, sparklers, and gift boxes dispatched directly from Moovaraivendran, Sivakasi with uncompromised quality and certified safety.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { label: 'Up to 80% OFF', sub: 'Retail Price Direct' },
                  { label: '100% Green', sub: 'QR Verified Lot' },
                  { label: '100+ Items', sub: 'Live Sivakasi Stock' },
                  { label: 'Pan-India', sub: 'Lorry Parcel Hubs' },
                ].map(s => (
                  <div key={s.label} className="bg-dark-800 rounded-lg p-3 text-center border border-white/5">
                    <div className="font-semibold text-gold-400 text-sm">{s.label}</div>
                    <div className="text-xs text-white/50">{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/products" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-950 font-semibold px-6 py-3 rounded-lg">
                  Browse 100+ Catalogue <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919944581264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg"
                >
                  <MessageCircle className="w-4 h-4" /> Instant WhatsApp (+91 9944581264)
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-dark-800 rounded-2xl border border-white/10 p-6 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gold-400 font-bold text-lg mb-2">GEE VEE Sparkle Quality</div>
                  <div className="text-xs text-white/50">ISO / PESO • 2024-25 Festive Batch Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Shop by Pyrotechnic Category</h2>
            <Link to="/products" className="text-gold-400 text-sm hover:underline">View All 12 Categories →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Sound Crackers', icon: '🔊' },
              { name: 'Ground Chakkars', icon: '🌀' },
              { name: 'Flower Pots', icon: '🌸' },
              { name: 'Aerial Repeats', icon: '🚀' },
              { name: 'Sparklers & Pencils', icon: '✨' },
              { name: 'Diwali Gift Boxes', icon: '🎁' },
            ].map(c => (
              <Link
                key={c.name}
                to={`/products?category=${encodeURIComponent(c.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}`}
                className="bg-dark-800 rounded-xl p-5 text-center border border-white/5 hover:border-gold-500/40 transition-colors"
              >
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="text-sm font-medium">{c.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">Festive Best-Sellers & Wholesale Hot Picks</h2>
            <span className="text-xs text-white/50">Minimum Depot Order: ₹3,000</span>
          </div>
          <p className="text-white/60 text-sm mb-8">Direct packing from depot with genuine CSIR-NEERI green stamps and factory batch numbers.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="inline-flex items-center gap-2 text-gold-400 font-medium hover:underline">
              Explore All 100+ Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-14 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-xs text-gold-400 uppercase tracking-wider mb-2">Pioneers in Sivakasi Pyrotechnics</div>
            <h2 className="text-2xl lg:text-3xl font-bold">Why 18,000+ Families Trust GEE VEE</h2>
            <p className="text-white/60 mt-2">Every box leaves our Moovaraivendran mill under strict quality and decibel norms.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Package, title: '100% Mill Direct', desc: 'No middleman distributor cut or retail inflation. You receive genuine direct Sivakasi mill prices.' },
              { icon: Shield, title: 'CSIR-NEERI Green Certified', desc: 'Formulated with potassium nitrate & selected barium-free formulations emitting 30–35% less particulate matter.' },
              { icon: Award, title: 'Heavy Moisture-Proof Packing', desc: 'Packed in multi-ply corrugated cartons with inner thermal silica protection.' },
              { icon: MessageCircle, title: 'Direct Owner WhatsApp Desk', desc: 'Direct coordination with Prop. GeeVee Bala and logistics leads for live booking slips.' },
            ].map(item => (
              <div key={item.title} className="bg-dark-800 rounded-xl p-5 border border-white/5">
                <item.icon className="w-8 h-8 text-gold-500 mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depot + Map */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-dark-800 rounded-2xl p-6 border border-white/5">
              <div className="text-xs text-gold-400 mb-2">DIRECT DESPATCH HUB • PESO Lic: SVK/EXPL/2018</div>
              <h2 className="text-2xl font-bold mb-4">Factory Depot & All-India Parcel Booking</h2>
              <p className="text-white/60 mb-6">Orders are dispatched daily from our main depot on the Sivakasi-Sattur Connecting Highway directly to over 450+ parcel lorry hubs across South & Central India.</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-500 mt-0.5" />
                  <span>Moovaraivendran Village, Sivakasi Main Road, TN 626123</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-500" />
                  <a href="tel:+919944581264" className="hover:text-gold-400">Direct Call: +91 9944581264</a>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <a href="tel:+919944581264" className="bg-gold-500 text-dark-950 font-semibold px-4 py-2 rounded-lg text-sm">Direct Call</a>
                <a href="https://wa.me/919944581264" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg text-sm">Send Cart via WhatsApp</a>
              </div>
            </div>
            <div className="bg-dark-800 rounded-2xl border border-white/5 aspect-video flex items-center justify-center text-white/40 text-sm">
              Map: Moovaraivendran, Sivakasi (GPS: 9.4532°N, 77.7984°E)
            </div>
          </div>
        </div>
      </section>

      {/* Safety strip */}
      <section className="py-6 bg-dark-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 text-white/70">
            <Shield className="w-4 h-4 text-gold-500" />
            Safe Fireworks Practice: Always light crackers in open outdoor spaces, keep water buckets at hand, and ensure adult supervision.
          </div>
          <Link to="/safety" className="text-gold-400 hover:underline whitespace-nowrap">Read Safety Guidelines →</Link>
        </div>
      </section>
    </div>
  )
}
