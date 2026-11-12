import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/5 mt-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="/images/gee-vee-logo-transparent.png" alt="GEE VEE" className="h-12 w-auto mb-4" />
            <p className="text-white/60 leading-relaxed mb-4">
              Premier certified pyrotechnics manufacturer delivering genuine green crackers straight from Sivakasi factory depots across India at wholesale rates.
            </p>
            <a
              href="https://wa.me/919944581264"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Quick Order
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">FACTORY DEPOT</h3>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" />
                <span>Moovaraivendran Village, Sivakasi Main Road, Virudhunagar District, Tamil Nadu – 626123</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500" />
                <a href="tel:+919944581264" className="hover:text-gold-400">Direct Helpline: +91 9944581264</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500" />
                <a href="mailto:geeveebala1982@gmail.com" className="hover:text-gold-400">orders@geeveefireworks.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-500" />
                Open 7 Days: 8:00 AM – 10:00 PM IST
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">POPULAR CATEGORIES</h3>
            <ul className="space-y-2 text-white/60">
              {['Aerial Multi-Shot Cakes', 'Mega Ground Chakkars & Flower Pots', 'Electric Sparklers & Twinklers', 'Sound Crackers & Garlands (Ladis)', 'Festival Family Gift Boxes'].map(c => (
                <li key={c}>
                  <Link to="/products" className="hover:text-gold-400">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">TRANSPORT & DESPATCH</h3>
            <p className="text-white/60 mb-4">
              Consignments dispatched via approved explosive-safe parcel transport carriers throughout Tamil Nadu, Karnataka, Andhra, Kerala, and North India hubs.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {['VRL Logistics', 'KPN Parcel', 'MSS Transports'].map(t => (
                <span key={t} className="bg-dark-800 px-2.5 py-1 rounded border border-white/10">{t}</span>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-4">Govt. Licensed Sivakasi Depot No: SVK/EXPL/2018</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} GEE VEE Fireworks, Moovaraivendran, Sivakasi. All Rights Reserved. Sivakasi, Tamil Nadu.</div>
          <div className="flex gap-4">
            <Link to="/safety" className="hover:text-white">Safety Guidelines</Link>
            <span>Terms of Despatch</span>
            <span>Privacy Policy</span>
          </div>
        </div>

        <div className="mt-6 bg-amber-950/40 border border-amber-800/50 rounded-lg p-4 text-xs text-amber-200/90 flex items-start gap-3">
          <span className="text-amber-400 font-bold">⚠</span>
          <span>
            Legal Safety Compliance Advisory: As per Supreme Court directives, we supply only CSIR-NEERI certified Green Crackers with verified QR codes. Fireworks sale strictly prohibited to minors below 18 years.
          </span>
          <span className="ml-auto text-green-400 text-xs whitespace-nowrap">100% Green Cracker Certified</span>
        </div>
      </div>
    </footer>
  )
}
