import { useState } from 'react'
import HaloArc from '../components/HaloArc'
import WAButton from '../components/WAButton'
import { faqGroups, WHATSAPP, type WhatsAppItem, type FAQGroup, type FAQ as FAQType } from '../REUSABLES'

const tips = [
  {
    title: 'The Overnight Treatment',
    body: 'Apply 10–12 drops before bed, put on a silk bonnet, and wash out in the morning. This deep-treatment approach works especially well for dry, brittle, or high-porosity hair.',
  },
  {
    title: 'Scalp Massage Technique',
    body: 'Use your fingertips — not nails — and work in small circles for at least 2 minutes. This isn\'t just relaxing; it increases blood flow to the follicles and enhances oil absorption.',
  },
  {
    title: 'The Hot Oil Method',
    body: 'Place the closed bottle in a cup of warm (not boiling) water for 2 minutes to gently warm the oil. Warm oil penetrates more deeply and can be especially effective for tightly coiled hair.',
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: '#110E0C', paddingTop: 80 }}>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
            Help & Information
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white" style={{ lineHeight: 1.08 }}>
            Frequently Asked Questions
          </h1>
          <HaloArc color="#EF00C2" className="mt-8" />
          <p className="font-body text-base mt-6 leading-relaxed" style={{ color: '#EFD3C5', opacity: 0.9 }}>
            Can&apos;t find your answer below?{' '}
            <a
              href={WHATSAPP.find((w: WhatsAppItem) => w.request === 'enquiry')?.message || ''}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#EF00C2', borderBottom: '1px solid #EF00C2', paddingBottom: 1 }}
              className="font-semibold hover:opacity-70 transition-opacity"
            >
              Message us on WhatsApp
            </a>{' '}
            — we usually reply within a few hours.
          </p>
        </div>
      </section>

      {/* FAQ groups */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-16">
          {faqGroups.map((group: FAQGroup) => (
            <div key={group.group}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{group.icon}</span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: '#110E0C' }}>
                  {group.group}
                </h2>
              </div>
              <div className="space-y-3">
                {group.items.map((item: FAQType, i: number) => {
                  const key = `${group.group}-${i}`
                  return (
                    <div
                      key={key}
                      className="rounded-2xl overflow-hidden"
                      style={{ border: '1px solid #EFD3C5' }}
                    >
                      <button
                        className="w-full flex justify-between items-start gap-4 px-7 py-5 text-left"
                        onClick={() => toggle(key)}
                      >
                        <span className="font-body font-semibold text-base" style={{ color: '#110E0C' }}>{item.q}</span>
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
                          style={{ backgroundColor: '#EF00C2', transform: openItems[key] ? 'rotate(45deg)' : 'none' }}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                            <path d="M5 2v6M2 5h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </span>
                      </button>
                      {openItems[key] && (
                        <div className="px-7 pb-6">
                          <p className="font-body text-sm leading-relaxed" style={{ color: '#110E0C', opacity: 0.75 }}>{item.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hair tips */}
      <section style={{ backgroundColor: '#EFD3C5' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
              Expert Tips
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              Get more from your oil.
            </h2>
            <HaloArc color="#EF00C2" className="mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-2xl p-8"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="w-8 h-1 rounded mb-6" style={{ backgroundColor: '#EF00C2' }} />
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: '#110E0C' }}>{tip.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#110E0C', opacity: 0.75 }}>{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#EF00C2' }}>
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6" style={{ lineHeight: 1.1 }}>
            Still have questions?
          </h2>
          <p className="font-body text-white/80 text-base mb-12 max-w-md mx-auto">
            We&apos;re a small team and we love hearing from you. Chat to us directly on WhatsApp.
          </p>
          <WAButton label="Chat with us on WhatsApp" large light />
        </div>
      </section>
    </div>
  )
}
