export type Service = {
  slug: string
  name: string
  eyebrow: string
  description: string
  benefits: string[]
  duration: string
  price: string
  image: string
}

export type Package = {
  name: string
  tagline: string
  price: string
  duration: string
  featured?: boolean
  idealFor: string
  includes: string[]
  upgrades: string[]
}

export const image = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const heroImage = image('photo-1492144534655-ae79c964c9d7', 2200)
export const processImage = image('photo-1553440569-bcc63803a83d', 1800)
export const aboutImage = image('photo-1503736334956-4c8f8e92946d', 1800)
export const compareImage = image('photo-1511919884226-fd3cad34687c', 1800)

export const services: Service[] = [
  {
    slug: 'exterior-detail',
    name: 'Exterior Detail',
    eyebrow: 'Reset the finish',
    description:
      'A methodical exterior clean, decontamination and finishing service designed to restore gloss without unnecessary abrasion.',
    benefits: ['Safe contact wash', 'Wheel and tyre deep clean', 'Chemical decontamination', 'Gloss-enhancing protection'],
    duration: '2–3 hours',
    price: 'From RM180',
    image: image('photo-1542362567-b07e54358753', 1200),
  },
  {
    slug: 'interior-detail',
    name: 'Interior Detail',
    eyebrow: 'Clean, calm, restored',
    description:
      'Deep interior cleaning focused on high-touch areas, fabrics, plastics and trim while preserving the original finish.',
    benefits: ['Vacuum & crevice clean', 'Upholstery treatment', 'Dashboard & trim reset', 'Glass & finishing'],
    duration: '2–4 hours',
    price: 'From RM220',
    image: image('photo-1552519507-da3b142c6e3d', 1200),
  },
  {
    slug: 'full-detail',
    name: 'Full Detail',
    eyebrow: 'Inside and out',
    description:
      'A complete presentation reset combining our core exterior and interior processes for vehicles that need a thorough refresh.',
    benefits: ['Exterior decontamination', 'Interior deep clean', 'Paint sealant', 'Tyre & trim dressing'],
    duration: '5–7 hours',
    price: 'From RM380',
    image: image('photo-1525609004556-c46c7d6cf023', 1200),
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    eyebrow: 'Clarity over cover-up',
    description:
      'Machine polishing tailored to paint condition to reduce swirls, haze and eligible defects while protecting clear-coat integrity.',
    benefits: ['Paint inspection', 'Test section', 'Controlled machine polishing', 'Finishing protection'],
    duration: '1–2 days',
    price: 'From RM650',
    image: image('photo-1503376780353-7e6692767b70', 1200),
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    eyebrow: 'Longer-term protection',
    description:
      'A carefully prepared coating service that adds chemical resistance, water behaviour and easier maintenance to properly prepared paint.',
    benefits: ['Preparation wash', 'Paint preparation', 'Coating application', 'Cure guidance'],
    duration: '1–2 days',
    price: 'From RM1,200',
    image: image('photo-1504215680853-026ed2a45def', 1200),
  },
  {
    slug: 'machine-polish',
    name: 'Machine Polish',
    eyebrow: 'Sharper gloss',
    description:
      'A single-stage machine polish for vehicles that need improved gloss and lighter defect reduction without a multi-stage correction.',
    benefits: ['Paint inspection', 'Single-stage polish', 'Gloss refinement', 'Sealant protection'],
    duration: '4–6 hours',
    price: 'From RM420',
    image: image('photo-1549317661-bd32c8ce0db2', 1200),
  },
  {
    slug: 'headlight-restoration',
    name: 'Headlight Restoration',
    eyebrow: 'Clarity restored',
    description:
      'A focused restoration process for eligible oxidised headlight lenses, followed by protection to slow future degradation.',
    benefits: ['Lens assessment', 'Progressive refinement', 'Optical finishing', 'Protective finish'],
    duration: '1–2 hours',
    price: 'From RM160',
    image: image('photo-1533473359331-0135ef1b58bf', 1200),
  },
  {
    slug: 'maintenance-detail',
    name: 'Maintenance Detail',
    eyebrow: 'Keep it dialled in',
    description:
      'A lighter recurring service for previously detailed vehicles that keeps surfaces clean and protection performing as intended.',
    benefits: ['Maintenance wash', 'Interior reset', 'Protection top-up', 'Condition check'],
    duration: '1.5–2.5 hours',
    price: 'From RM140',
    image: image('photo-1507136566006-cfc505b114fc', 1200),
  },
]

export const packages: Package[] = [
  {
    name: 'Essential Detail',
    tagline: 'A clean baseline for daily drivers.',
    price: 'From RM180',
    duration: '2–3 hours',
    idealFor: 'Regular upkeep, newer cars and pre-event refreshes.',
    includes: ['Safe exterior wash', 'Wheels & tyres', 'Interior vacuum', 'Glass cleaned', 'Spray protection'],
    upgrades: ['Pet-hair removal', 'Engine bay detail', 'Headlight restoration'],
  },
  {
    name: 'Signature Detail',
    tagline: 'Our most balanced full-vehicle reset.',
    price: 'From RM380',
    duration: '5–7 hours',
    featured: true,
    idealFor: 'Vehicles needing a meaningful inside-and-out refresh.',
    includes: ['Full exterior decontamination', 'Deep interior clean', 'Light paint enhancement', 'Trim & tyre finish', 'Durable sealant'],
    upgrades: ['Leather treatment', 'Odour treatment', 'Glass coating'],
  },
  {
    name: 'Correction Detail',
    tagline: 'For paint that has lost clarity and depth.',
    price: 'From RM780',
    duration: '1 day',
    idealFor: 'Swirls, haze and eligible clear-coat defects.',
    includes: ['Full preparation', 'Paint inspection', 'Machine correction', 'Panel wipe-down', 'Protective finish'],
    upgrades: ['Multi-stage correction', 'Wheel coating', 'Ceramic protection'],
  },
  {
    name: 'Ceramic Protection',
    tagline: 'Prepared, corrected and protected.',
    price: 'From RM1,680',
    duration: '1–2 days',
    idealFor: 'Owners wanting easier maintenance and longer-term finish protection.',
    includes: ['Decontamination', 'Paint refinement', 'Panel preparation', 'Ceramic coating', 'Care guide'],
    upgrades: ['Glass coating', 'Wheel coating', 'Interior protection'],
  },
]

export const testimonials = [
  {
    quote:
      'The whole experience felt organised — I knew what was included, why it mattered and what the final price depended on before booking.',
    name: 'Aiman R.',
    vehicle: 'Fictional testimonial · BMW 3 Series',
  },
  {
    quote:
      'The paint looked noticeably clearer and the maintenance advice was practical. No hard sell, just a clear recommendation.',
    name: 'Mei L.',
    vehicle: 'Fictional testimonial · Mazda CX-5',
  },
  {
    quote:
      'I sent photos on WhatsApp, got a straightforward estimate and knew exactly what to expect before the appointment.',
    name: 'Daniel T.',
    vehicle: 'Fictional testimonial · Honda Civic',
  },
]

export const serviceAreas = [
  'Kuala Lumpur',
  'Petaling Jaya',
  'Subang Jaya',
  'Shah Alam',
  'Puchong',
  'Cheras',
  'Ampang',
  'Mont Kiara',
  'Bangsar',
  'Klang Valley',
]

export const faqs = [
  {
    question: 'How long does a detailing appointment take?',
    answer:
      'It depends on the service and vehicle condition. A maintenance visit can take around 1.5–2.5 hours, while paint correction or coating work may require a full day or more. We would confirm the expected duration after reviewing your vehicle details.',
  },
  {
    question: 'Do I need an appointment?',
    answer:
      'Yes. Prime Auto Detailing is presented as an appointment-based studio so each vehicle can be allocated an appropriate service window. This is a fictional portfolio website, so no real appointment will be created.',
  },
  {
    question: 'What affects the final price?',
    answer:
      'Vehicle size, current condition, contamination level, paint condition, selected treatment and any specialist add-ons can change the final quotation. Package prices are therefore shown as starting prices.',
  },
  {
    question: 'What is paint correction?',
    answer:
      'Paint correction uses controlled machine polishing to reduce eligible defects in the clear coat, such as swirls, haze and light scratches. The goal is improved clarity while preserving as much paint as practical.',
  },
  {
    question: 'How long does ceramic coating last?',
    answer:
      'Durability varies by product, preparation, storage, climate and maintenance. A coating should not be sold as permanent or maintenance-free; proper washing and periodic care still matter.',
  },
  {
    question: 'Can every scratch be removed?',
    answer:
      'No. Some defects are too deep to safely polish away. A responsible approach is to assess the paint first and improve what can be corrected without chasing unsafe levels of material removal.',
  },
  {
    question: 'How should I maintain the vehicle afterward?',
    answer:
      'Use a safe wash method, clean tools, suitable shampoo and avoid harsh automatic brushes. Coated vehicles still need regular washing. A maintenance-detail schedule can also help keep the finish consistent.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'This fictional concept is positioned around Kuala Lumpur and nearby Selangor areas, including Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Cheras, Ampang, Mont Kiara and Bangsar.',
  },
  {
    question: 'Can I request a quote through WhatsApp?',
    answer:
      'Yes. The demo includes WhatsApp enquiry links with prefilled messages. The number used is intentionally fictional and should be replaced with a real business number before any production launch.',
  },
]

export const galleryItems = [
  { category: 'Paint correction', title: 'Gloss recovery', image: image('photo-1503376780353-7e6692767b70', 1400) },
  { category: 'Exterior', title: 'Precision exterior finish', image: image('photo-1492144534655-ae79c964c9d7', 1400) },
  { category: 'Interior', title: 'Cabin reset', image: image('photo-1552519507-da3b142c6e3d', 1400) },
  { category: 'Ceramic coating', title: 'Protected dark finish', image: image('photo-1504215680853-026ed2a45def', 1400) },
  { category: 'Restoration', title: 'Clarity-focused restoration', image: image('photo-1533473359331-0135ef1b58bf', 1400) },
  { category: 'Exterior', title: 'Detail-ready presentation', image: image('photo-1503736334956-4c8f8e92946d', 1400) },
]

export const whatsappNumber = '601100000000'
export const whatsappLink = (message = "Hi Prime Auto Detailing, I'd like to request a quote.") =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
