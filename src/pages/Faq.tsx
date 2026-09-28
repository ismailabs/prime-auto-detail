import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FaqAccordion } from '../components/FaqAccordion'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { heroImage } from '../data/siteData'

export default function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Know what happens next." description="Practical answers about time, pricing, correction, protection, maintenance and the fictional enquiry process." image={heroImage} actions={<><Link to="/contact" className="button-primary">Request a quote <ArrowRight className="h-4 w-4" /></Link><WhatsAppButton /></>} />
      <section className="section-pad">
        <div className="page-shell grid gap-12 lg:grid-cols-[.55fr_1.45fr]">
          <Reveal><SectionHeading eyebrow="Questions before booking" title="Useful answers, no mystery." copy="The goal is to answer the questions that often delay an enquiry without burying the customer in technical language." /></Reveal>
          <Reveal delay={.08}><FaqAccordion /></Reveal>
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="page-shell"><Reveal><div className="surface flex flex-col gap-6 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9"><div><p className="eyebrow">Still not sure?</p><h2 className="mt-3 font-display text-2xl font-semibold uppercase">Send the vehicle details and the concern.</h2></div><div className="flex flex-wrap gap-3"><WhatsAppButton className="button-primary" /><Link to="/contact" className="button-secondary">Use quote form</Link></div></div></Reveal></div>
      </section>
    </>
  )
}
