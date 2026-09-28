import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { BeforeAfter } from '../components/BeforeAfter'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { galleryItems, processImage } from '../data/siteData'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const reduceMotion = useReducedMotion()
  const categories = ['All', ...Array.from(new Set(galleryItems.map((item) => item.category)))]
  const visible = useMemo(() => filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter), [filter])

  return (
    <>
      <PageHero eyebrow="Gallery" title="Show the finish." description="A visual portfolio presentation using stock automotive photography. The images demonstrate art direction and interaction design; they are not presented as real Prime Auto Detailing customer vehicles." image={processImage} actions={<Link to="/contact" className="button-primary">Request a quote <ArrowRight className="h-4 w-4" /></Link>} />

      <section className="section-pad">
        <div className="page-shell">
          <Reveal><SectionHeading eyebrow="Visual library" title="Filter by work type." copy="Category controls keep a larger gallery useful while the image treatment stays consistent with the premium automotive direction." /></Reveal>
          <div className="mt-8 flex flex-wrap gap-2" role="toolbar" aria-label="Filter gallery by category">
            {categories.map((category) => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)} className={`rounded-full px-4 py-2 text-sm transition ${filter === category ? 'bg-white text-black' : 'border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'}`}>{category}</button>)}
          </div>
          <motion.div layout={!reduceMotion} className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((item) => (
                <motion.figure key={`${item.category}-${item.title}`} layout={!reduceMotion} initial={reduceMotion ? false : { opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0, scale: .97 }} className="group surface overflow-hidden rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden"><img src={item.image} alt={`${item.title} — stock automotive image for ${item.category} presentation`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" /></div>
                  <figcaption className="flex items-end justify-between gap-4 p-5"><div><p className="eyebrow">{item.category}</p><h3 className="mt-2 font-display text-xl font-semibold uppercase">{item.title}</h3></div><span className="text-[10px] uppercase tracking-wider text-zinc-600">Stock image</span></figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10 bg-white/[0.02]">
        <div className="page-shell grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
          <Reveal><SectionHeading eyebrow="Comparison interaction" title="Before / after without pretending." copy="The slider below uses a single stock image with a deliberately degraded visual treatment on one side. It demonstrates the UX pattern without fabricating a real customer transformation." /></Reveal>
          <Reveal delay={.07}><BeforeAfter /></Reveal>
        </div>
      </section>
    </>
  )
}
