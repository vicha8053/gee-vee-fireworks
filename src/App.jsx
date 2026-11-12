import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import Safety from './pages/Safety'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/safety" element={<Safety />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
