import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/siteData'

export function WhatsAppButton({ message, className = 'button-secondary', label = 'WhatsApp us' }: { message?: string; className?: string; label?: string }) {
  return (
    <a href={whatsappLink(message)} target="_blank" rel="noreferrer" className={className}>
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  )
}
