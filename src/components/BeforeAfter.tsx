import { useId, useState } from 'react'
import { compareImage } from '../data/siteData'

export function BeforeAfter() {
  const [position, setPosition] = useState(58)
  const id = useId()

  return (
    <div className="surface overflow-hidden rounded-2xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 sm:aspect-[16/8]">
        <img src={compareImage} alt="Sample dark sports car used for a fictional before and after detailing demonstration" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }} aria-hidden="true">
          <img
            src={compareImage}
            alt=""
            className="absolute left-0 top-0 h-full max-w-none object-cover grayscale-[35%] brightness-[55%] saturate-[55%]"
            style={{ width: 'calc(100vw - 2.5rem)', minWidth: '100%' }}
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">Before · visual demo</div>
        <div className="absolute bottom-4 right-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-black">After · visual demo</div>
        <div className="pointer-events-none absolute bottom-0 top-0 w-px bg-white" style={{ left: `${position}%` }}>
          <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black/20 bg-white text-black shadow-xl">
            <span className="text-sm font-bold">↔</span>
          </div>
        </div>
        <label htmlFor={id} className="sr-only">Adjust before and after comparison</label>
        <input
          id={id}
          type="range"
          min="15"
          max="85"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          aria-valuetext={`${position}% before image visible`}
        />
      </div>
      <div className="flex flex-col gap-2 border-t border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-300">Interactive presentation concept for eligible paint-improvement work.</p>
        <p className="text-xs text-zinc-500">Stock image · not a customer vehicle</p>
      </div>
    </div>
  )
}
