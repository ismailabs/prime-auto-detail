import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, MessageCircle, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { serviceAreas, services, whatsappLink } from '../data/siteData'

const nav = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Packages', '/packages'],
  ['Gallery', '/gallery'],
  ['About', '/about'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
] as const

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? 'border-b border-white/10 bg-black/85 backdrop-blur-xl' : 'bg-gradient-to-b from-black/75 to-transparent'}`}>
      <div className="page-shell flex h-20 items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-3" aria-label="Prime Auto Detailing home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white text-xs font-black tracking-tighter text-black">P/A</span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Prime Auto</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `rounded-full px-3 py-2 text-sm transition ${isActive ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="button-secondary !min-h-10 !px-4 !py-2">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <Link to="/contact" className="button-primary !min-h-10 !px-4 !py-2">Get a quote <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <button type="button" aria-label="Open menu" aria-expanded={open} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#070707] lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="page-shell flex h-20 items-center justify-between border-b border-white/10">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.16em]">Prime Auto</span>
              <button type="button" aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-white/15" onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
            </div>
            <nav className="page-shell flex flex-col py-8" aria-label="Mobile navigation">
              {nav.map(([label, to], index) => (
                <motion.div key={to} initial={reduceMotion ? false : { opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                  <NavLink to={to} className="flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl font-semibold uppercase tracking-tight">
                    {label}<ArrowRight className="h-5 w-5 text-zinc-600" />
                  </NavLink>
                </motion.div>
              ))}
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="button-primary mt-8"><MessageCircle className="h-4 w-4" /> WhatsApp enquiry</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="page-shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr_.9fr]">
          <div>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-xs font-black text-black">P/A</span>
            <h2 className="mt-5 max-w-xs font-display text-3xl font-semibold uppercase tracking-[-0.04em]">Precision care. Clear next steps.</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">A fictional premium detailing concept built to demonstrate conversion-focused automotive web design.</p>
            <Link to="/contact" className="button-primary mt-6">Request a demo quote <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              {nav.slice(1).map(([label, to]) => <Link key={to} to={to} className="hover:text-white">{label}</Link>)}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-4">Services</p>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              {services.slice(0, 5).map((service) => <Link key={service.slug} to="/services" className="hover:text-white">{service.name}</Link>)}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-4">Service areas</p>
            <p className="text-sm leading-7 text-zinc-400">{serviceAreas.slice(0, 8).join(' · ')}</p>
            <div className="mt-6 text-sm leading-6 text-zinc-500">
              <p>Mon–Sat · 9:00–18:00</p>
              <p>Appointment concept only</p>
              <p className="mt-3">hello@primeauto.example</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#050505] px-4 py-5 sm:px-8">
            <img src="/built-by-ismail.png" alt="Built by Ismail" className="mx-auto h-auto w-full max-w-5xl object-contain" loading="lazy" />
          </div>
          <div className="mt-6 flex flex-col gap-4 text-xs leading-5 text-zinc-600 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-3xl">Prime Auto Detailing is a fictional business created as a portfolio demonstration. Business details, testimonials, pricing and contact information shown on this website are illustrative. Stock imagery does not represent real customer vehicles.</p>
            <p className="shrink-0">© 2026 Prime Auto Detailing · Fictional portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [location.pathname])
  return <><Header /><main>{children}</main><Footer /></>
}
