import { ArrowRight, Gauge, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { aboutImage, processImage } from '../data/siteData'

const principles = [
  { icon: ShieldCheck, title: 'Preserve first', copy: 'Correction should improve the finish without treating clear coat like an unlimited resource.' },
  { icon: Gauge, title: 'Explain the trade-off', copy: 'Customers should understand what can realistically improve, what may remain and why.' },
  { icon: Sparkles, title: 'Finish with intent', copy: 'Every dressing, polish and protective step should have a reason beyond making a checklist longer.' },
  { icon: Users, title: 'Make the process easy', copy: 'Clear pricing, useful FAQs and low-friction enquiries are part of premium service design.' },
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About the concept" title="Premium without the theatre." description="Prime Auto Detailing is a fictional brand concept built around careful workmanship, honest recommendations and a customer journey that removes uncertainty." image={aboutImage} actions={<><Link to="/contact" className="button-primary">Request a quote <ArrowRight className="h-4 w-4" /></Link><WhatsAppButton /></>} />

      <section className="section-pad">
        <div className="page-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-white/10"><img src={processImage} alt="Premium sports car used as fictional brand imagery" className="aspect-[4/3] h-full w-full object-cover" loading="lazy" /></div>
          </Reveal>
          <Reveal delay={.08}>
            <p className="eyebrow">Brand story</p>
            <h2 className="mt-4 display-lg">The detail is in the decision.</h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-zinc-400">
              <p>Prime Auto Detailing is positioned as a studio that begins with condition and intent rather than automatically upselling the longest service menu.</p>
              <p>A daily driver that needs a clean reset should not be sold the same process as paint with heavy swirl marks. A ceramic coating should not be described as maintenance-free. A deep scratch should not be promised away if correction would require unsafe material removal.</p>
              <p>That same clarity extends to the website: show real starting prices, explain what changes a quote, answer common objections early and make it easy to send the right vehicle information.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-white/10 bg-white/[0.02]">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="Working principles" title="Four rules behind the experience." /></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * .05}>
                <div className="surface h-full rounded-2xl p-6"><item.icon className="h-6 w-6 text-zinc-400" /><h3 className="mt-6 font-display text-xl font-semibold uppercase">{item.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{item.copy}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell">
          <Reveal>
            <div className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[.07] to-transparent p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div><p className="eyebrow">Portfolio disclosure</p><h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight sm:text-4xl">A real website concept for a fictional business.</h2><p className="mt-4 max-w-2xl leading-7 text-zinc-400">This project demonstrates branding, conversion strategy, frontend implementation and automotive presentation. Prime Auto Detailing itself is not a real operating business, and all business details are illustrative.</p></div>
              <Link to="/contact" className="button-primary">See the enquiry flow <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
