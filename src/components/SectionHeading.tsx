export function SectionHeading({ eyebrow, title, copy, align = 'left' }: { eyebrow: string; title: string; copy?: string; align?: 'left' | 'center' }) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="display-lg">{title}</h2>
      {copy && <p className={`body-copy mt-6 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>{copy}</p>}
    </div>
  )
}
