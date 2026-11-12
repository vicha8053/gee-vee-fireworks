import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', requirement: '' })

  const sendEnquiry = (e) => {
    e.preventDefault()
    const text = `Hello GEE VEE FIREWORKS!\n\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\n\nRequirement:\n${form.requirement}\n\nPlease share estimate and packing photos.\n\nThank you!`
    window.open(`https://wa.me/919944581264?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs bg-green-600/20 text-green-400 px-2 py-0.5 rounded">OFFICIAL SIVAKASI MANUFACTURING DEPOT SUPPORT</span>
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold mb-2">Customer Support & Pyrotechnic Safety Hub</h1>
      <p className="text-white/60 mb-8 max-w-2xl">
        Connect directly with our master dispatch unit at Moovaraivendran, Sivakasi. Review statutory green cracker handling standards and secure pan-India parcel consignments.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-dark-800 rounded-xl border border-white/5 p-6">
            <h2 className="text-xl font-semibold mb-2">Direct Factory Interaction. Zero Middlemen Margin.</h2>
            <p className="text-white/60 text-sm mb-4">
              GEE VEE FIREWORKS delivers 100% genuine, lab-tested green crackers crafted with multi-generational pyrotechnic mastery straight from our Sivakasi manufacturing lines to your festive celebration doorstep.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="bg-dark-700 rounded-lg p-3"><div className="font-bold text-gold-400">35+ Yrs</div><div className="text-xs text-white/50">Sivakasi Lineage</div></div>
              <div className="bg-dark-700 rounded-lg p-3"><div className="font-bold text-green-400">100% Green</div><div className="text-xs text-white/50">NEERI Lab Certified</div></div>
              <div className="bg-dark-700 rounded-lg p-3"><div className="font-bold text-gold-400">24-48 Hr</div><div className="text-xs text-white/50">Fast Depot Despatch</div></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-dark-800 rounded-xl border border-white/5 p-4">
              <div className="text-xs text-white/50 mb-1">PROPRIETOR: GEEVEE BALA</div>
              <a href="tel:+919944581264" className="text-lg font-semibold text-gold-400 hover:underline">+91 9944581264</a>
              <p className="text-xs text-white/50 mt-1">Instant carton rates, corporate gifting bundles & festive priority booking.</p>
              <a href="tel:+919944581264" className="mt-3 inline-block bg-gold-500 text-dark-950 text-sm font-medium px-4 py-2 rounded-lg">Call Now (8 AM – 10 PM)</a>
            </div>
            <div className="bg-dark-800 rounded-xl border border-white/5 p-4">
              <div className="text-xs text-white/50 mb-1">WHATSAPP SUPPORT DESK</div>
              <a href="https://wa.me/919944581264" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-green-400 hover:underline">+91 9944581264</a>
              <p className="text-xs text-white/50 mt-1">Send your product wishlist for rapid invoice estimate & packing photos.</p>
              <a href="https://wa.me/919944581264" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg">Chat on WhatsApp</a>
            </div>
            <div className="bg-dark-800 rounded-xl border border-white/5 p-4">
              <div className="text-xs text-white/50 mb-1">COMMERCIAL ORDERS</div>
              <a href="mailto:geeveebala1982@gmail.com" className="text-sm font-medium hover:text-gold-400">geeveebala1982@gmail.com</a>
              <p className="text-xs text-white/50 mt-1">GST invoices, temple festival bulk inquiries, and institutional bookings.</p>
            </div>
            <div className="bg-dark-800 rounded-xl border border-white/5 p-4">
              <div className="text-xs text-white/50 mb-1">FACTORY WORKS & PACKING YARD</div>
              <div className="text-sm">Moovaraivendran, Sivakasi Main Road</div>
              <div className="text-xs text-white/50">Virudhunagar District, Tamil Nadu – 626123</div>
            </div>
          </div>

          <form onSubmit={sendEnquiry} className="bg-dark-800 rounded-xl border border-white/5 p-5 space-y-3">
            <h3 className="font-semibold">Quick WhatsApp Estimate Request</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Full Name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="bg-dark-700 border border-white/10 rounded-lg px-3 py-2 text-sm" />
              <input required placeholder="Delivery City & Pincode *" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="bg-dark-700 border border-white/10 rounded-lg px-3 py-2 text-sm" />
              <input required placeholder="Mobile / WhatsApp Number *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="bg-dark-700 border border-white/10 rounded-lg px-3 py-2 text-sm sm:col-span-2" />
              <textarea required rows={3} placeholder="Crackers Requirement / Cart Items" value={form.requirement} onChange={e => setForm({ ...form, requirement: e.target.value })} className="bg-dark-700 border border-white/10 rounded-lg px-3 py-2 text-sm sm:col-span-2" />
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-400 text-dark-950 font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> SEND ENQUIRY TO GEEVEE SIVAKASI DISPATCH
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-dark-800 rounded-xl border border-white/5 p-5">
            <h3 className="font-semibold mb-4">Safety First: Do's & Don'ts</h3>
            <div className="space-y-4 text-sm">
              {[
                { n: '01', t: 'Light in Wide Open Spaces', d: 'Always ignite crackers in cleared open grounds or concrete terraces away from overhead electric wires, dry shrubs, parked vehicles, and thatched roofs.' },
                { n: '02', t: 'Keep Water & Sand Buckets at Hand', d: 'Keep two full buckets of clean water and dry sand nearby. Submerge spent sparklers and glowing debris immediately.' },
                { n: '03', t: 'Close Adult Supervision & Safe Distance', d: 'Never permit unsupervised children near fireworks. Maintain a strict 5-meter safety perimeter when igniting multi-shot aerial cakes and sound crackers.' },
                { n: '04', t: 'Cool, Dry & Locked Storage', d: 'Store fireworks inside sealed cartons placed in cool, dry areas far from gas cylinders, kitchen stoves, open wiring, and direct sunlight.' },
                { n: '05', t: 'Wear Pure Cotton Clothing', d: 'Wear snug cotton garments and sturdy footwear. Never wear synthetic, nylon, or loose fluttering clothes while lighting sparklers or flower pots.' },
              ].map(s => (
                <div key={s.n} className="flex gap-3">
                  <span className="text-gold-400 font-bold text-lg">{s.n}</span>
                  <div>
                    <div className="font-medium">{s.t}</div>
                    <div className="text-white/60 text-xs mt-0.5">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-red-950/50 border border-red-800/50 rounded-lg p-3 text-sm text-red-200">
              NATIONAL EMERGENCY HOTLINES — Fire: Dial 101 • Unified: Dial 112
            </div>
          </div>

          <div className="bg-dark-800 rounded-xl border border-white/5 p-5">
            <h3 className="font-semibold mb-2">Sivakasi Works & Consignment Yard</h3>
            <div className="aspect-video bg-dark-700 rounded-lg flex items-center justify-center text-white/40 text-sm">
              Map: Moovaraivendran, Sivakasi Main Road, TN 626123<br />GPS: 9.4532°N, 77.7984°E
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
