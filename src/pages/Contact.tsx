import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { QuoteForm } from '../components/QuoteForm'
import { Reveal } from '../components/Reveal'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { heroImage, serviceAreas } from '../data/siteData'

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact & quote" title="Make the enquiry useful." description="A conversion-focused contact flow that collects enough vehicle context to support a better recommendation without turning the first interaction into paperwork." image={heroImage} actions={<WhatsAppButton className="button-primary" label="Start on WhatsApp" />} />

      <section className="section-pad">
        <div className="page-shell grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Contact details</p>
              <h2 className="mt-4 font-display text-4xl font-semibold uppercase tracking-[-.045em]">Two ways to start.</h2>
              <p className="mt-5 max-w-md leading-7 text-zinc-400">Use WhatsApp when speed matters, or the detailed quote form when the vehicle condition needs more context. Both are demonstration interactions only.</p>
              <div className="mt-8 space-y-3">
                <div className="surface flex gap-4 rounded-xl p-5"><MessageCircle className="mt-0.5 h-5 w-5 text-zinc-500" /><div><p className="font-semibold">WhatsApp</p><p className="mt-1 text-sm text-zinc-500">Fictional number · +60 11-0000 0000</p></div></div>
                <div className="surface flex gap-4 rounded-xl p-5"><Mail className="mt-0.5 h-5 w-5 text-zinc-500" /><div><p className="font-semibold">Email</p><p className="mt-1 text-sm text-zinc-500">hello@primeauto.example</p></div></div>
                <div className="surface flex gap-4 rounded-xl p-5"><Clock3 className="mt-0.5 h-5 w-5 text-zinc-500" /><div><p className="font-semibold">Hours concept</p><p className="mt-1 text-sm text-zinc-500">Mon–Sat · 9:00–18:00 · appointment-based</p></div></div>
                <div className="surface flex gap-4 rounded-xl p-5"><MapPin className="mt-0.5 h-5 w-5 text-zinc-500" /><div><p className="font-semibold">Coverage</p><p className="mt-1 text-sm leading-6 text-zinc-500">{serviceAreas.slice(0, 8).join(' · ')}</p></div></div>
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.025] p-5 text-xs leading-6 text-zinc-500"><Phone className="mb-3 h-4 w-4" />No real booking, call, message or email is created by this portfolio project. Replace all fictional contact details and connect the form to a real endpoint before production use.</div>
            </div>
          </Reveal>
          <Reveal delay={.08}><QuoteForm /></Reveal>
        </div>
      </section>
    </>
  )
}
