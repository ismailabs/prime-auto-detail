import { FormEvent, useMemo, useState } from 'react'
import { CheckCircle2, LoaderCircle, MessageCircle } from 'lucide-react'
import { services, whatsappLink } from '../data/siteData'

type FormState = {
  name: string
  phone: string
  email: string
  make: string
  model: string
  year: string
  service: string
  condition: string
  preferredDate: string
  message: string
}

const emptyForm: FormState = {
  name: '', phone: '', email: '', make: '', model: '', year: '', service: '', condition: '', preferredDate: '', message: '',
}

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const whatsappMessage = useMemo(() => {
    const vehicle = [form.year, form.make, form.model].filter(Boolean).join(' ') || 'vehicle'
    const selected = form.service || 'a detailing service'
    return `Hi Prime Auto Detailing, I'd like to request a quote for my ${vehicle} for ${selected}.`
  }, [form.year, form.make, form.model, form.service])

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (form.name.trim().length < 2) next.name = 'Enter your name.'
    if (!/^\+?[0-9\s-]{8,}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone or WhatsApp number.'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.make.trim()) next.make = 'Enter the vehicle make.'
    if (!form.model.trim()) next.model = 'Enter the vehicle model.'
    if (!form.service) next.service = 'Choose a service.'
    if (!form.condition) next.condition = 'Choose the closest condition.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    window.setTimeout(() => setStatus('success'), 900)
  }

  if (status === 'success') {
    return (
      <div className="surface rounded-2xl p-7 sm:p-9" role="status">
        <CheckCircle2 className="h-10 w-10 text-white" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-semibold uppercase tracking-tight">Demo request received</h3>
        <p className="mt-3 max-w-xl leading-7 text-zinc-400">
          This portfolio form does not send or store data. In a production project, this success state is where a real CRM, email service or server endpoint could take over.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className="button-primary" onClick={() => { setForm(emptyForm); setStatus('idle') }}>Send another demo request</button>
          <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer" className="button-secondary">
            <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  const fieldError = (field: keyof FormState) => errors[field] ? <p className="mt-2 text-xs text-red-300">{errors[field]}</p> : null

  return (
    <form onSubmit={submit} noValidate className="surface rounded-2xl p-6 sm:p-8">
      <div className="mb-7">
        <p className="eyebrow">Quote request</p>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-tight">Tell us about the car</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">Demo only — no information entered here is transmitted or stored.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-zinc-300">
          Name <span className="text-zinc-600">*</span>
          <input className="field mt-2" value={form.name} onChange={(e) => update('name', e.target.value)} aria-invalid={!!errors.name} />
          {fieldError('name')}
        </label>
        <label className="text-sm font-medium text-zinc-300">
          Phone / WhatsApp <span className="text-zinc-600">*</span>
          <input className="field mt-2" inputMode="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="e.g. 012 345 6789" aria-invalid={!!errors.phone} />
          {fieldError('phone')}
        </label>
        <label className="text-sm font-medium text-zinc-300">
          Email <span className="text-zinc-600">optional</span>
          <input className="field mt-2" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} aria-invalid={!!errors.email} />
          {fieldError('email')}
        </label>
        <label className="text-sm font-medium text-zinc-300">
          Vehicle year
          <input className="field mt-2" inputMode="numeric" value={form.year} onChange={(e) => update('year', e.target.value)} placeholder="2022" />
        </label>
        <label className="text-sm font-medium text-zinc-300">
          Vehicle make <span className="text-zinc-600">*</span>
          <input className="field mt-2" value={form.make} onChange={(e) => update('make', e.target.value)} placeholder="BMW" aria-invalid={!!errors.make} />
          {fieldError('make')}
        </label>
        <label className="text-sm font-medium text-zinc-300">
          Vehicle model <span className="text-zinc-600">*</span>
          <input className="field mt-2" value={form.model} onChange={(e) => update('model', e.target.value)} placeholder="330i" aria-invalid={!!errors.model} />
          {fieldError('model')}
        </label>
        <label className="text-sm font-medium text-zinc-300">
          Service <span className="text-zinc-600">*</span>
          <select className="field mt-2" value={form.service} onChange={(e) => update('service', e.target.value)} aria-invalid={!!errors.service}>
            <option value="">Choose a service</option>
            {services.map((service) => <option key={service.slug} value={service.name}>{service.name}</option>)}
          </select>
          {fieldError('service')}
        </label>
        <label className="text-sm font-medium text-zinc-300">
          Vehicle condition <span className="text-zinc-600">*</span>
          <select className="field mt-2" value={form.condition} onChange={(e) => update('condition', e.target.value)} aria-invalid={!!errors.condition}>
            <option value="">Select condition</option>
            <option>Regularly maintained</option>
            <option>Needs a deep clean</option>
            <option>Visible swirls / paint haze</option>
            <option>Heavy contamination / neglected</option>
            <option>Not sure</option>
          </select>
          {fieldError('condition')}
        </label>
        <label className="text-sm font-medium text-zinc-300 sm:col-span-2">
          Preferred date
          <input className="field mt-2" type="date" value={form.preferredDate} onChange={(e) => update('preferredDate', e.target.value)} />
        </label>
        <label className="text-sm font-medium text-zinc-300 sm:col-span-2">
          Anything else we should know?
          <textarea className="field mt-2 min-h-32 resize-y" value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us about any specific concerns, paint defects, stains or priorities." />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={status === 'submitting'} className="button-primary disabled:cursor-wait disabled:opacity-70">
          {status === 'submitting' ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Processing demo request</> : 'Request a quote'}
        </button>
        <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer" className="button-secondary">
          <MessageCircle className="h-4 w-4" /> Build WhatsApp enquiry
        </a>
      </div>
    </form>
  )
}
