import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/siteData'

export function FaqAccordion({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0)
  const items = typeof limit === 'number' ? faqs.slice(0, limit) : faqs

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, index) => {
        const isOpen = open === index
        const buttonId = `faq-button-${index}`
        const panelId = `faq-panel-${index}`
        return (
          <div key={item.question}>
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-5 py-6 text-left font-display text-lg font-semibold text-white sm:text-xl"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-zinc-500 transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 leading-7 text-zinc-400">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
