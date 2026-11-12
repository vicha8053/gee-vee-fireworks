import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, MessageCircle, Shield } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatINR } from '../data/products'

export default function Cart() {
  const { items, updateQuantity, removeItem, totalItems, totalValue } = useCart()
  const [customer, setCustomer] = useState({ name: '', phone: '', location: '', notes: '' })
  const [errors, setErrors] = useState({})
  const [showPreview, setShowPreview] = useState(false)

  const validate = () => {
    const e = {}
    if (!customer.name.trim()) e.name = 'Name is required'
    if (!customer.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(customer.phone.replace(/\D/g, ''))) e.phone = 'Enter valid 10-digit mobile'
    if (!customer.location.trim()) e.location = 'Location is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const buildMessage = () => {
    let msg = `Hello GEE VEE FIREWORKS!\n\n`
    msg += `I would like to enquire about these products:\n\n`
    items.forEach((item, i) => {
      const sub = item.product.price * item.quantity
      msg += `${i + 1}. Product Name: ${item.product.name}\n`
      msg += `   Quantity: ${item.quantity}\n`
      msg += `   Pack: ${item.product.packQuantity}\n`
      msg += `   Unit Price: ₹${item.product.price.toLocaleString('en-IN')}\n`
      msg += `   Subtotal: ₹${sub.toLocaleString('en-IN')}\n\n`
    })
    msg += `Total Quantity: ${totalItems}\n`
    msg += `Estimated Total: ₹${totalValue.toLocaleString('en-IN')}\n\n`
    msg += `Customer Name: ${customer.name.trim()}\n`
    msg += `Phone: ${customer.phone.trim()}\n`
    msg += `Location: ${customer.location.trim()}\n`
    if (customer.notes.trim()) msg += `Notes: ${customer.notes.trim()}\n`
    msg += `\nPlease confirm availability and final pricing.\n\nThank you!`
    return msg
  }

  const sendWhatsApp = () => {
    if (!validate()) return
    const text = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/919944581264?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Order Enquiry Cart is Empty</h1>
        <p className="text-white/60 mb-8">Add products from the catalogue to start a WhatsApp enquiry.</p>
        <Link to="/products" className="inline-block bg-gold-500 text-dark-950 font-semibold px-6 py-3 rounded-lg">
          Browse Catalogue
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded">WHOLESALE CART</span>
        <span className="text-xs text-white/50">{items.length} Selected Items • {totalItems} Units Total</span>
      </div>
      <h1 className="text-3xl font-bold mb-2">Your Order Enquiry Cart</h1>
      <p className="text-white/60 text-sm mb-8">
        Direct mill pricing from Moovaraivendran, Sivakasi. Final availability, parcel freight and dispatch slot confirmed directly by Prop. GeeVee Bala via WhatsApp.
      </p>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => {
            const sub = item.product.price * item.quantity
            return (
              <div key={item.product.id} className="bg-dark-800 rounded-xl border border-white/5 p-4 flex gap-4">
                <div className="w-16 h-16 bg-dark-700 rounded-lg flex-shrink-0 overflow-hidden">
                  <img src={item.product.image} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{item.product.name}</h3>
                  <div className="text-xs text-white/50">{item.product.packQuantity}</div>
                  {item.product.greenCracker && (
                    <span className="text-[10px] text-green-400">CSIR Green Code</span>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/60">{formatINR(item.product.price)}</div>
                  <div className="flex items-center gap-1 mt-1 justify-end">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1 border border-white/10 rounded hover:bg-white/5">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1 border border-white/10 rounded hover:bg-white/5">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="font-semibold mt-1">{formatINR(sub)}</div>
                  <button onClick={() => removeItem(item.product.id)} className="text-red-400 hover:text-red-300 mt-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}

          <Link to="/products" className="inline-flex items-center gap-1 text-sm text-gold-400 hover:underline mt-2">
            Want to add Ground Chakkars, Rockets, or Mega Gift Hampers? Browse 100+ Catalog →
          </Link>

          {/* Customer form */}
          <div className="bg-dark-800 rounded-xl border border-white/5 p-5 mt-6">
            <h2 className="font-semibold text-lg mb-1 flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold-500" /> Delivery & Despatch Booking Details
            </h2>
            <p className="text-xs text-white/50 mb-4">Prop. GeeVee Bala verifies each shipment personally prior to packaging.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Full Name *</label>
                <input
                  value={customer.name}
                  onChange={e => setCustomer({ ...customer, name: e.target.value })}
                  className="w-full bg-dark-700 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                  placeholder="Karthik Raja"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">WhatsApp Mobile Number *</label>
                <input
                  type="tel"
                  value={customer.phone}
                  onChange={e => setCustomer({ ...customer, phone: e.target.value })}
                  className="w-full bg-dark-700 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium mb-1 block">Destination Town / District / State *</label>
                <input
                  value={customer.location}
                  onChange={e => setCustomer({ ...customer, location: e.target.value })}
                  className="w-full bg-dark-700 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                  placeholder="Madurai, Tamil Nadu"
                />
                {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium mb-1 block">Special Notes / Packing Request</label>
                <textarea
                  rows={2}
                  value={customer.notes}
                  onChange={e => setCustomer({ ...customer, notes: e.target.value })}
                  className="w-full bg-dark-700 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                  placeholder="e.g. Please add water-proof plastic carton wrapping for rain protection."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar estimate */}
        <div>
          <div className="bg-dark-800 rounded-xl border border-white/5 p-5 sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">Order Estimate</h2>
              <span className="text-xs bg-green-600/20 text-green-400 px-2 py-0.5 rounded">80% Factory Direct</span>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between"><span className="text-white/60">Total Selected Items</span><span>{totalItems} Units</span></div>
              <div className="flex justify-between"><span className="text-white/60">Estimated Catalog Subtotal</span><span>{formatINR(totalValue)}</span></div>
              <div className="flex justify-between"><span className="text-white/60">Sivakasi Lorry Freight</span><span className="text-green-400">PAY AT DESTINATION</span></div>
              <div className="flex justify-between"><span className="text-white/60">Standard Waterproof Packaging</span><span className="text-green-400">FREE (Diwali Special)</span></div>
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between items-baseline mb-4">
              <span className="font-semibold">Estimated Total</span>
              <span className="text-2xl font-bold text-gold-400">{formatINR(totalValue)}</span>
            </div>
            <p className="text-xs text-white/40 mb-4">Inclusive of all local GST taxes</p>

            {/* Live preview toggle */}
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="w-full text-left text-xs text-white/50 hover:text-white mb-3"
            >
              LIVE WHATSAPP MESSAGE PREVIEW {showPreview ? '▾' : '▸'}
            </button>
            {showPreview && (
              <pre className="bg-dark-950 border border-white/10 rounded-lg p-3 text-xs text-white/70 whitespace-pre-wrap mb-4 max-h-48 overflow-auto">
                {buildMessage()}
              </pre>
            )}

            <button
              onClick={sendWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3.5 rounded-lg"
            >
              <MessageCircle className="w-5 h-5" />
              SEND ENQUIRY VIA WHATSAPP (+91 9944581264)
            </button>
            <p className="text-xs text-white/40 text-center mt-2">Prop. GeeVee Bala usually replies within 5 to 15 minutes</p>

            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/40 space-y-1">
              <div>100% Sivakasi Mill Rate</div>
              <div>CSIR-NEERI Tested</div>
              <div>Safe Lorry Transport</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-dark-800 rounded-xl border border-white/5 p-5 text-sm text-white/60">
        <h3 className="font-semibold text-white mb-2">Why Direct WhatsApp Order Confirmation?</h3>
        <p>
          In strict compliance with PESO Sivakasi regulatory directives, explosive parcel bookings require consignment allotment codes and weight verification with local transport agents (VRL, KPN, MSS). When you click submit, your exact bill is transferred to our Sivakasi order desk WhatsApp with zero commission markups.
        </p>
      </div>
    </div>
  )
}
