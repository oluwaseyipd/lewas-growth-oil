import { useState } from 'react'
import HaloArc from '../components/HaloArc'
import WAButton from '../components/WAButton'

const faqGroups = [
  {
    group: 'Ordering & Delivery',
    icon: '📦',
    items: [
      {
        q: 'How do I place an order?',
        a: "Tap any \"Chat to Order\" button on our site. You'll be taken to WhatsApp where you can tell us your preferred size, quantity, and delivery address. We handle everything from there.",
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept M-Pesa, bank transfer, and cash on delivery for local orders. WhatsApp us for international payment options.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes — we ship to the UK, USA, Canada, and select European countries. Shipping times and costs are communicated during your WhatsApp conversation before you commit.',
      },
      {
        q: 'How long will delivery take?',
        a: 'Nairobi and major Kenyan cities: 1–2 business days. Rest of Kenya: 3–5 days. International: 7–14 business days depending on destination.',
      },
      {
        q: 'Can I return or exchange my order?',
        a: 'We offer returns within 14 days for unopened products. If you\'ve experienced a reaction or the product is defective, reach out on WhatsApp and we\'ll make it right, no questions asked.',
      },
    ],
  },
  {
    group: 'Using the Product',
    icon: '✨',
    items: [
      {
        q: 'How often should I use the oil?',
        a: 'For best results, use 3 times per week — on wash day, mid-week, and before protective styling. Consistent use over 4–6 weeks is where the real results begin.',
      },
      {
        q: 'How many drops should I use?',
        a: 'Start with 5–8 drops per application and adjust based on your hair\'s thickness and length. Short to medium hair needs less; long or thick hair may need up to 12 drops.',
      },
      {
        q: 'Can I use it on my children\'s hair?',
        a: "Lewa's Growth Oil is formulated for adults. For children under 12, we recommend consulting a paediatrician before use.",
      },
      {
        q: 'Do I need to wash it out?',
        a: 'No. It\'s designed as a leave-in treatment. Apply to the scalp and lengths and go — it absorbs without residue. On wash days, apply before or after washing as part of your routine.',
      },
      {
        q: 'Can I use it under a wig or braids?',
        a: 'Absolutely. Applying the oil to your scalp before installing protective styles is one of the best ways to maintain growth while your natural hair is tucked away.',
      },
    ],
  },
  {
    group: 'Ingredients & Suitability',
    icon: '🌿',
    items: [
      {
        q: 'Is the formula 100% natural?',
        a: 'Yes. Every ingredient is plant-derived or naturally extracted. There are no mineral oils, silicones, parabens, sulphates, or synthetic fragrances in the formula.',
      },
      {
        q: 'Is it suitable for sensitive scalps?',
        a: "We've formulated with sensitive scalps in mind — no harsh essential oils at irritating concentrations. However, if you have a known allergy to any ingredient, please check the full ingredient list or reach out to us.",
      },
      {
        q: 'Is it cruelty-free?',
        a: 'Completely. No animal testing at any stage of production, and all our suppliers operate under cruelty-free standards.',
      },
      {
        q: 'Is it safe during pregnancy or breastfeeding?',
        a: 'The formula uses gentle plant oils at safe concentrations, but as with all topical products, we advise consulting your healthcare provider during pregnancy or while breastfeeding.',
      },
    ],
  },
]

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
              href="https://wa.me/254700000000"
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
          {faqGroups.map((group) => (
            <div key={group.group}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{group.icon}</span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: '#110E0C' }}>
                  {group.group}
                </h2>
              </div>
              <div className="space-y-3">
                {group.items.map((item, i) => {
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
