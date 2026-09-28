import { ArrowRight, Check, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { packages, processImage } from '../data/siteData'

export default function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Packages & pricing"
        title="Useful starting points."
        description="Starting prices create clarity without pretending every car is identical. Vehicle size, condition, paint condition and selected treatments can change the final quotation."
        image={processImage}
        actions={<><Link to="/contact" className="button-primary">Request a quote <ArrowRight className="h-4 w-4" /></Link><WhatsAppButton /></>}
      />

      <section className="section-pad">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="Four ways in" title="Pick the closest fit." copy="Each package is designed around a customer situation rather than arbitrary feature stacking. Final recommendations should still follow vehicle inspection or photo review." /></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {packages.map((pkg, index) => (
              <Reveal key={pkg.name} delay={index * .05}>
                <article className={`h-full rounded-2xl border p-7 sm:p-9 ${pkg.featured ? 'border-white/35 bg-white/[0.07] shadow-glow' : 'border-white/10 bg-white/[0.025]'}`}>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="eyebrow">{pkg.duration}{pkg.featured ? ' · Most balanced' : ''}</p>
                      <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[-.04em]">{pkg.name}</h2>
                      <p className="mt-3 max-w-lg leading-7 text-zinc-400">{pkg.tagline}</p>
                    </div>
                    <p className="shrink-0 font-display text-2xl font-semibold">{pkg.price}</p>
                  </div>
                  <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-500">Included</p>
                      <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                        {pkg.includes.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-500">Optional upgrades</p>
                      <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                        {pkg.upgrades.map((item) => <li key={item} className="flex gap-2"><Plus className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />{item}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-zinc-400"><span className="font-semibold text-zinc-200">Best for:</span> {pkg.idealFor}</div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <WhatsAppButton message={`Hi Prime Auto Detailing, I'd like a quote for the ${pkg.name} package.`} label="Ask on WhatsApp" className="button-primary" />
                    <Link to="/contact" className="button-secondary">Detailed quote request</Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="rounded-2xl border border-amber-200/15 bg-amber-100/[0.04] p-6 text-sm leading-7 text-zinc-400">
              <strong className="text-zinc-200">Pricing note:</strong> All prices are fictional starting prices for this portfolio concept. A real detailer should confirm final pricing after considering vehicle size, existing condition, contamination, paint condition, selected treatments and inspection requirements.
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
