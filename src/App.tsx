import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Packages from './pages/Packages'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page-shell flex min-h-[70vh] items-center justify-center pt-28">
      <div className="max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold uppercase tracking-[-.05em]">Page not found.</h1>
        <p className="mt-5 leading-7 text-zinc-400">The route does not exist in this portfolio project.</p>
        <Link to="/" className="button-primary mt-7">Return home</Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
