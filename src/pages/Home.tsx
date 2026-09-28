import { ArrowRight, Check, Clock3, MapPin, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { BeforeAfter } from '../components/BeforeAfter'
import { FaqAccordion } from '../components/FaqAccordion'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { heroImage, packages, processImage, serviceAreas, services, testimonials } from '../data/siteData'

const trustItems = ['Paint-safe process', 'KL & Selangor', 'Appointment-led', 'Clear from-pricing', 'WhatsApp quotes']

export default function Home() {
  const reduceMotion = useReducedMotion()
  return (
    <>
      <section className="noise relative min-h-[760px] overflow-hidden border-b border-white/10 pt-20 lg:min-h-[820px]">
        <motion.img
          src={heroImage}
          alt="Silver performance car on a dark road, representing Prime Auto Detailing's premium automotive aesthetic"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={reduceMotion ? false : { scale: 1.08 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
        <div className="page-shell relative flex min-h-[680px] items-end py-14 sm:min-h-[740px] sm:py-20 lg:min-h-[800px] lg:py-24">
          <div className="max-w-5xl">
            <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .65 }}>
              <p className="eyebrow mb-5">Premium detailing · Kuala Lumpur & Selangor</p>
              <h1 className="font-display text-[clamp(3.4rem,8.7vw,8.8rem)] font-semibold uppercase leading-[.78] tracking-[-0.07em] text-white">
                Detail with<br /><span className="text-outline">intent.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">A premium detailing concept built around one simple promise: understand the car, recommend the right work, and make the next step obvious.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="button-primary">Get a quote <ArrowRight className="h-4 w-4" /></Link>
                <WhatsAppButton />
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> KL & Klang Valley</span>
                <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" /> Appointment-based concept</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Clear process & pricing</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-white/10 bg-white/[0.02] py-4" aria-label="Key benefits">
        <div className="marquee-track flex gap-4 pr-4">
          {[...trustItems, ...trustItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-200" />{item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="Core services" title="The right work, not every service." copy="Services are positioned by customer need: maintenance, restoration, correction and protection. Each one explains what changes, how long it takes and where pricing starts." /></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <Reveal key={service.slug} delay={index * .06}>
                <article className="group surface h-full overflow-hidden rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={service.image} alt={`${service.name} — stock automotive imagery`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <p className="eyebrow">{service.eyebrow}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-tight">{service.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{service.description}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                      <span className="font-semibold text-white">{service.price}</span>
                      <span className="text-zinc-500">{service.duration}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8"><Link to="/services" className="button-secondary">Explore all services <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-white/10 bg-white/[0.02]">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="Packages" title="Start with a clear decision." copy="Four packages give customers a useful price anchor without pretending every vehicle needs the same amount of work." /></Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {packages.map((pkg, index) => (
              <Reveal key={pkg.name} delay={index * .05}>
                <article className={`relative flex h-full flex-col rounded-2xl border p-6 ${pkg.featured ? 'border-white/35 bg-white/[0.07] shadow-glow' : 'border-white/10 bg-black/20'}`}>
                  {pkg.featured && <span className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">Most balanced</span>}
                  <p className="eyebrow">{pkg.duration}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight">{pkg.name}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-400">{pkg.tagline}</p>
                  <p className="mt-6 font-display text-2xl font-semibold">{pkg.price}</p>
                  <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                    {pkg.includes.slice(0, 4).map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />{item}</li>)}
                  </ul>
                  <Link to="/packages" className="button-secondary mt-7 w-full">View package</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <Reveal><SectionHeading eyebrow="Before / after" title="Make the improvement visible." copy="A comparison tool can communicate paint improvement quickly. This demo uses one stock image with a visual treatment to demonstrate the interaction rather than pretend it is a real customer transformation." /></Reveal>
            <Reveal delay={.08}><BeforeAfter /></Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10">
        <img src={processImage} alt="Dark premium car used as supporting automotive imagery" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
        <div className="page-shell relative section-pad">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal><SectionHeading eyebrow="Why this process" title="Clarity is part of the service." copy="Premium does not mean vague. A useful detailing website should remove uncertainty before the customer ever opens WhatsApp." /></Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['01', 'Inspect first', 'Match the recommendation to the car’s actual condition instead of forcing a package.'],
                ['02', 'Price clearly', 'Show meaningful starting prices and explain what can change the final quote.'],
                ['03', 'Protect the paint', 'Correction should balance defect reduction with preservation, not chase every mark.'],
                ['04', 'Explain upkeep', 'A finished detail should come with practical guidance for keeping the result consistent.'],
              ].map(([num, title, copy], index) => (
                <Reveal key={num} delay={index * .05}>
                  <div className="surface rounded-2xl p-6">
                    <span className="font-display text-xs font-bold tracking-[.2em] text-zinc-600">{num}</span>
                    <h3 className="mt-5 font-display text-xl font-semibold uppercase">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="Fictional customer voice" title="Trust needs specifics." copy="These illustrative testimonials are written to show what credible social proof could sound like without pretending the fictional business has real customers." /></Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * .06}>
                <figure className="surface h-full rounded-2xl p-7">
                  <div className="flex gap-1 text-zinc-300" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                  <blockquote className="mt-6 font-display text-xl font-medium leading-8 tracking-tight text-white">“{item.quote}”</blockquote>
                  <figcaption className="mt-7 border-t border-white/10 pt-5 text-sm"><span className="font-semibold text-zinc-200">{item.name}</span><span className="mt-1 block text-zinc-500">{item.vehicle}</span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-white/10 bg-white/[0.02]">
        <div className="page-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal><SectionHeading eyebrow="Service areas" title="Built for the Klang Valley." copy="The fictional service model is positioned around Kuala Lumpur and nearby Selangor areas, with location context kept useful rather than repetitive." /></Reveal>
          <Reveal delay={.06} className="flex flex-wrap content-start gap-3">
            {serviceAreas.map((area) => <span key={area} className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-zinc-300">{area}</span>)}
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal><SectionHeading eyebrow="FAQ" title="Answer the objections before the enquiry." copy="Useful answers reduce uncertainty around timing, pricing, paint correction, coating claims and what a customer should expect." /></Reveal>
          <Reveal delay={.08}><FaqAccordion limit={5} /><Link to="/faq" className="button-secondary mt-7">See all questions <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="page-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white p-7 text-black sm:p-10 lg:p-14">
              <Sparkles className="absolute right-8 top-8 h-16 w-16 text-black/10" />
              <div className="relative max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[.22em] text-black/50">Ready for the next step?</p>
                <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-[.95] tracking-[-.05em] sm:text-5xl lg:text-6xl">Send the car. Pick the service. Start the conversation.</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-black/65">The quote flow is intentionally low-friction: form for detail, WhatsApp for speed. Both are portfolio demos and do not create a real booking.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">Request a demo quote <ArrowRight className="h-4 w-4" /></Link>
                  <WhatsAppButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
