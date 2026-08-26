import { useState } from 'react'
import HaloArc from '../components/HaloArc'
import WAButton from '../components/WAButton'
import { productFaqs } from '../REUSABLES'

// imsages
import PRODUCT from '/product-img.png'
import ROSEMARY from '/rosemary.png'
import COCONUT from '/coconut.png'
import INGREDIENTS from '/ingredient-banner.png'


const PRODUCT_IMG = PRODUCT
const ROSEMARY_IMG = ROSEMARY
const COCONUT_IMG = COCONUT
const INGREDIENTS_BG = INGREDIENTS
const ingredients = [
  {
    name: 'Rosemary Extract',
    role: 'Growth Activator',
    desc: 'Clinical studies have shown rosemary to be as effective as minoxidil for stimulating hair growth, without the side effects. It increases blood circulation to the scalp and activates dormant follicles.',
    img: ROSEMARY_IMG,
  },
  {
    name: 'Cold-Pressed Coconut Oil',
    role: 'Deep Moisture & Protein',
    desc: 'Unique among plant oils for its ability to penetrate the hair shaft — not just coat it. Prevents protein loss, deeply moisturises, and leaves hair soft without heaviness.',
    img: COCONUT_IMG,
  },
  {
    name: 'Black Seed Oil',
    role: 'Scalp Health',
    desc: 'Rich in thymoquinone, a powerful antifungal and anti-inflammatory compound that addresses dandruff and scalp irritation at the source. Used in traditional medicine for over 3,000 years.',
    img: ROSEMARY_IMG,
  },
  {
    name: 'Jamaican Black Castor Oil',
    role: 'Strength & Retention',
    desc: 'High in ricinoleic acid, castor oil coats each strand and seals the cuticle, dramatically reducing breakage and improving length retention — especially on high-porosity hair.',
    img: COCONUT_IMG,
  },
  {
    name: 'Argan Oil',
    role: 'Shine & Frizz Control',
    desc: 'Liquid gold from Morocco. Rich in vitamin E and fatty acids, argan oil adds brilliant shine, tames frizz, and protects against environmental damage without weighing hair down.',
    img: ROSEMARY_IMG,
  },
  {
    name: 'Peppermint Oil',
    role: 'Circulation Boost',
    desc: 'Creates a gentle warming sensation that stimulates blood flow to the scalp. Shown to increase follicle depth and width, which correlates directly with thicker, fuller-looking hair.',
    img: COCONUT_IMG,
  },
]

const steps = [
  {
    number: '01',
    title: 'Section your hair',
    desc: 'Part your hair into 4–8 sections. This ensures even distribution from scalp to ends without using too much product.',
  },
  {
    number: '02',
    title: 'Apply to the scalp',
    desc: 'Using the dropper, apply 5–8 drops directly to the scalp along each parting. Massage in small circular motions for 2–3 minutes.',
  },
  {
    number: '03',
    title: 'Work through the lengths',
    desc: 'With remaining oil on your palms, smooth over the lengths of each section from mid-shaft to ends. No rinsing needed.',
  },
  {
    number: '04',
    title: 'Repeat 3× per week',
    desc: 'Consistency is the key to results. Use three times a week — on wash day, mid-week, and before protective styling.',
  },
]



export default function TheOil() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#110E0C', paddingTop: 80 }}>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#EF00C2' }}>
              Lewa&apos;s Growth Oil · 50ml & 100ml
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6 text-white" style={{ lineHeight: 1.08 }}>
              The only oil your hair needs.
            </h1>
            <HaloArc color="#EF00C2" className="justify-start mb-8" />
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: '#EFD3C5', opacity: 0.9, maxWidth: '56ch' }}>
              Six potent plant-based ingredients. One lightweight formula. Results you can see — and feel — from the very first use.
            </p>
            <WAButton large />
          </div>
          <div className="flex justify-center">
            <img
              src={PRODUCT_IMG}
              alt="Lewa's Growth Oil product bottle"
              className="rounded-2xl object-cover w-full"
              style={{ maxWidth: 420, aspectRatio: '4/5', backgroundColor: '#FFFFFF' }}
            />
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
              The Formula
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              Every ingredient, explained.
            </h2>
            <HaloArc color="#EF00C2" className="mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ingredients.map((ing) => (
              <div
                key={ing.name}
                className="flex gap-6 rounded-2xl p-7"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #EFD3C5' }}
              >
                <img
                  src={ing.img}
                  alt={ing.name}
                  className="rounded-xl object-cover flex-shrink-0"
                  style={{ width: 80, height: 80, backgroundColor: '#EFD3C5' }}
                />
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#EF00C2' }}>
                    {ing.role}
                  </p>
                  <h3 className="font-display text-xl font-semibold mb-2" style={{ color: '#110E0C' }}>{ing.name}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#110E0C', opacity: 0.75 }}>{ing.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients photo band */}
      <section className="relative" style={{ minHeight: 320, backgroundColor: '#110E0C' }}>
        <img
          src={INGREDIENTS_BG}
          alt="Rosemary plants in natural light"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="font-display text-3xl md:text-4xl italic text-white leading-relaxed">
            &ldquo;Every ingredient earns its place. Nothing is in this bottle by accident.&rdquo;
          </p>
          <p className="font-body text-sm mt-6 font-semibold" style={{ color: '#EF00C2' }}>— Lewa, on the formula</p>
        </div>
      </section>

      {/* How to use */}
      <section style={{ backgroundColor: '#EFD3C5' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
              Application
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              How to use it.
            </h2>
            <HaloArc color="#EF00C2" className="mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="rounded-2xl p-8" style={{ backgroundColor: '#FFFFFF' }}>
                <p
                  className="font-display text-5xl font-semibold mb-6"
                  style={{ color: '#EF00C2', lineHeight: 1 }}
                >
                  {step.number}
                </p>
                <h3 className="font-body font-semibold text-base mb-3" style={{ color: '#110E0C' }}>{step.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#110E0C', opacity: 0.75 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <WAButton large />
          </div>
        </div>
      </section>

      {/* Product FAQ */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              Product questions, answered.
            </h2>
            <HaloArc color="#EF00C2" className="mt-6" />
          </div>
          <div className="space-y-3">
            {productFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid #EFD3C5' }}
              >
                <button
                  className="w-full flex justify-between items-start gap-4 px-7 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-body font-semibold text-base" style={{ color: '#110E0C' }}>{faq.q}</span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
                    style={{ backgroundColor: '#EF00C2', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                      <path d="M5 2v6M2 5h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6">
                    <p className="font-body text-sm leading-relaxed" style={{ color: '#110E0C', opacity: 0.75 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: '#EF00C2' }}>
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-semibold text-white mb-6" style={{ lineHeight: 1.1 }}>
            Ready to let your crown flourish?
          </h2>
          <p className="font-body text-white/80 text-base mb-12 max-w-md mx-auto">
            Order through WhatsApp — fast, personal, and always replied to.
          </p>
          <WAButton label="Chat to Order on WhatsApp" large light />
        </div>
      </section>
    </div>
  )
}
