import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

export function PageHero({ eyebrow, title, description, image, actions }: { eyebrow: string; title: string; description: string; image?: string; actions?: ReactNode }) {
  const reduceMotion = useReducedMotion()
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-28 sm:pt-32">
      {image && (
        <div className="absolute inset-0">
          <motion.img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-30"
            initial={reduceMotion ? false : { scale: 1.06 }}
            animate={reduceMotion ? undefined : { scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />
        </div>
      )}
      <div className="page-shell relative flex min-h-[560px] items-end py-16 sm:py-20 lg:min-h-[640px] lg:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="display-xl max-w-4xl">{title}</h1>
          <p className="body-copy mt-7 max-w-2xl">{description}</p>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  )
}
