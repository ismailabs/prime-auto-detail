import { ArrowRight, Check, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { heroImage, services } from '../data/siteData'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Choose by outcome."
        description="Maintenance, reset, correction and protection — each service explains what it does, who it suits, how long it typically takes and where pricing starts."
        image={heroImage}
        actions={<><Link to="/contact" className="button-primary">Get a quote <ArrowRight className="h-4 w-4" /></Link><WhatsAppButton /></>}
      />

      <section className="section-pad">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="Detailing menu" title="Eight focused services." copy="The menu is intentionally understandable. If the right service is unclear, the quote flow asks for vehicle condition first so the recommendation can follow the evidence." /></Reveal>
          <div className="mt-14 space-y-5">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={Math.min(index * .035, .18)}>
                <article className="surface group grid overflow-hidden rounded-2xl lg:grid-cols-[.72fr_1.28fr]">
                  <div className="min-h-72 overflow-hidden lg:min-h-[360px]">
                    <img src={service.image} alt={`${service.name} — illustrative stock automotive image`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <p className="eyebrow">{service.eyebrow}</p>
                        <span className="inline-flex items-center gap-2 text-xs text-zinc-500"><Clock3 className="h-4 w-4" />{service.duration}</span>
                      </div>
                      <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[-.04em] sm:text-4xl">{service.name}</h2>
                      <p className="mt-5 max-w-2xl leading-7 text-zinc-400">{service.description}</p>
                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {service.benefits.map((benefit) => <div key={benefit} className="flex items-center gap-3 text-sm text-zinc-300"><span className="grid h-6 w-6 place-items-center rounded-full border border-white/10"><Check className="h-3.5 w-3.5" /></span>{benefit}</div>)}
                      </div>
                    </div>
                    <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div><p className="text-xs uppercase tracking-[.18em] text-zinc-600">Starting price</p><p className="mt-1 font-display text-2xl font-semibold">{service.price}</p></div>
                      <WhatsAppButton message={`Hi Prime Auto Detailing, I'd like a quote for ${service.name}.`} label={`Ask about ${service.name}`} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] section-pad">
        <div className="page-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal><SectionHeading eyebrow="Not sure what to choose?" title="Describe the condition, not the solution." copy="If you are unsure whether the car needs a full detail, correction or coating preparation, start with what you can see. The quote form captures condition and priorities so the recommendation can be made from there." /></Reveal>
          <Reveal delay={.08}>
            <div className="surface rounded-2xl p-7 sm:p-9">
              <p className="eyebrow">Useful quote details</p>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-zinc-300">
                {['Vehicle make, model and year', 'Whether the car is regularly maintained or heavily soiled', 'Visible swirls, haze, water spots or scratches', 'Any interior stains, odours or pet hair', 'Your priority: presentation, correction, protection or maintenance'].map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-zinc-500" />{item}</li>)}
              </ul>
              <Link to="/contact" className="button-primary mt-7">Build a quote request <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
