import { useState } from 'react'
import HaloArc from '../components/HaloArc'
import WAButton from '../components/WAButton'
import { productFaqs, type FAQ } from '../REUSABLES'

// imsages
import PRODUCT from '/product-img.png'
import ROSEMARY from '/rosemary.png'
import INGREDIENTS from '/ingredient-banner.png'
import ONION from '/onion.jpg'
import MENTHOL from '/menthol.jpg'
import ALOEVRA from '/aloevera.jpg'
import CLOVE from '/clove.jpg'
import AVOCADO from '/avocado.jpg'




const PRODUCT_IMG = PRODUCT
const ROSEMARY_IMG = ROSEMARY
const INGREDIENTS_BG = INGREDIENTS
const ONION_IMG = ONION
const MENTHOL_IMG = MENTHOL
const ALOEVERA_IMG = ALOEVRA
const CLOVE_IMG = CLOVE
const AVOCADO_IMG = AVOCADO




const ingredients = [
  {
    name: 'Rosemary Leaf',
    role: 'Growth & Circulation',
    desc: 'Rosemary leaf is derived from the salvia Rosmarinus plants which when extracted gives the oil. Aside hair, Rosemary is useful and applied in so many areas in the light of skincare, cooking and for medicinal purposes. But since our concern is the hair, it has a positive effect to the hair in which it fortifies the hair strands i.e it\'s reinforces your hair from the root to the tip, reducing breakage. It also known for boosting scalp circulation to deliver nutrients and oxygen to the hair follicles which stimulates the growth of your hair. Its anti inflammatory and anti bacterial action helps calm irritation, fight dandruff and wards off infection.',
    img: ROSEMARY_IMG,
  },
  {
    name: 'Onion Oil',
    role: 'Scalp Health & Strength',
    desc: 'Onion is also an effective hair care product, which when extracted gives its oil. It\'s an ingredient rich in sulfur and potassium. With presence of multiple nutrients, onion oil helps in maintaining the PH level of the scalp. The antioxidants in onion oil protect the hair from the damaging effects of free radicals. Those free radicals support quick ageing, resulting in hair thinning and fall. Thus, it prevents premature hair greying. It as well pampers the texture of your hair, nourishing and giving it strength.',
    img: ONION_IMG,
  },
  {
    name: 'Avocado Oil',
    role: 'Moisture & Sun Protection',
    desc: 'The natural oils and vitamins in avocado make it a great natural ingredient due to the moisturizing qualities and nourishing qualities of oils and vitamins. Oftentimes, we hear that avocados have “good” fats for eating, but they also have “good” fats for hair. Whether you are applying a hair mask, or using hair oils, one ingredient you can start to keep an eye out for is avocado. Avocado is especially great for people with dry or damaged hair. Avocados are rich in protein as well as Vitamin B, which is an essential vitamin for optimal hair health. These, along with those good fats and Vitamin E, make the hair strong, healthy, soft and shiny. Avocado acts as a natural sunscreen for hair to help protect hair in the sun.',
    img: AVOCADO_IMG,
  },
  {
    name: 'Clove Oil',
    role: 'Hydration & Scalp Detox',
    desc: 'Clove oil is one of the best natural moisturizers for hair, deeply hydrating dry strands and enhancing shine. Rich in Vitamin K. This nourishing oil conditions rough, brittle curls, leaving them soft, smooth, and manageable. It helps combat frizz, split ends, and breakage while giving your hair a lustrous, healthy appearance. Clove oil also detoxifies the scalp by removing grease, dirt, and buildup, creating an ideal environment for hair regeneration. Its refreshing aroma is an added bonus, while its dandruff fighting properties help reduce flaking and irritation. Applied to the scalp and hair shaft, clove oil works as a natural conditioner locking in moisture, strengthening strands, and adding volume to dull, thinning hair.',
    img: CLOVE_IMG,
  },
  {
    name: 'Aloe Vera',
    role: 'Scalp Calm & Cleanse',
    desc: 'Aloe vera has many active ingredients and minerals that can help strengthen your hair. It has fatty acids and amino acids and is rich in vitamins A, B12, C, and E. These play a part in healthy hair follicles. Aloe vera calms an itchy scalp. Aloe vera cleanses the hair shaft efficiently, stripping off extra oil and residue from other hair products. But aloe vera doesn’t hurt your hair strands while it cleans. Unlike other chemicals in hair products, aloe vera is gentle and preserves the integrity of your hair. Using aloe vera is a great way to get hair that looks healthier, shinier, and softer.',
    img: ALOEVERA_IMG,
  },
  {
    name: 'Menthol',
    role: 'Cooling & Circulation Boost',
    desc: 'Menthol is scientifically known as a vasodilator, meaning it may promote blood circulation to hair follicles and, in turn, support improved hair nutrition. Menthol crystals are derived from mint plants like peppermint and are commonly used in hair care products due to their beneficial properties for the scalp and hair. Menthol provides a cooling and soothing sensation, which can help alleviate an itchy or irritated scalp. It can help regulate sebum production, making it beneficial for oily scalps, and its antiseptic properties can contribute to a cleaner scalp environment. Menthol is believed to increase blood circulation in the scalp, which can deliver essential nutrients to hair follicles and potentially stimulate hair growth and thickness. Menthol can be found in shampoos, conditioners, and hair tonics to clean strands, promote natural luster, and provide a refreshing feel.',
    img: MENTHOL_IMG,
  },
]

const benefits = [
  {
    title: 'Dandruff & Dirt Removal',
    desc: 'Helps in the removal of dandruff & dirt, making your scalp clear, fresh, and clean.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF00C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    )
  },
  {
    title: 'Enhanced Hair Growth',
    desc: 'Increases blood circulation and delivers nutrients to follicles to stimulate active growth.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF00C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.886H3.879l5.037 3.659L6.993 18.5 12 14.83l5.007 3.67-1.923-5.955 5.037-3.66h-6.21L12 3z"/>
      </svg>
    )
  },
  {
    title: 'Soothes Dryness & Itchiness',
    desc: 'Provides a cooling sensation, regulates sebum production, and calms scalp irritation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF00C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    )
  },
  {
    title: 'Reduces Hair Loss & Breakage',
    desc: 'Reinforces each hair strand from root to tip, dramatically reducing breakage.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF00C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    title: 'Softens Texture & Keeps Healthy',
    desc: 'Deeply hydrates dry strands, conditions curls, and enhances natural shine.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF00C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 8.5 5 14a7 7 0 0 0 14 0c0-5.5-7-12-7-12z"/>
      </svg>
    )
  }
]

const steps = [
  {
    number: '01',
    title: 'Part your hair',
    desc: 'The bottle features a dropper for easy, mess-free application. Simply part your hair to expose the scalp.',
  },
  {
    number: '02',
    title: 'Place a few drops',
    desc: 'Place a few drops of Lewa’s Growth Oil directly onto the targeted areas of your scalp.',
  },
  {
    number: '03',
    title: 'Gently massage in',
    desc: 'Gently massage the oil into your scalp with your fingertips to boost circulation and promote absorption.',
  },
  {
    number: '04',
    title: 'Apply daily & store',
    desc: 'For optimal results, apply daily directly to the scalp. Store the bottle in a cool, dry place.',
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
              Nourish, Grow, Glow.
            </h1>
            <HaloArc color="#EF00C2" className="justify-start mb-8" />
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: '#EFD3C5', opacity: 0.9, maxWidth: '56ch' }}>
              Introducing Lewa’s Growth Oil, born from a deep love for healthy, thriving hair. An all-natural blend product that nourishes the scalp, promotes healthy hair growth, locks in moisture, and helps clear dandruff for soft, strong, and vibrant strands.
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

      {/* Product Benefits */}
      <section style={{ backgroundColor: '#EFD3C5' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
              Results & Benefits
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              What does it actually do to your hair?
            </h2>
            <p className="font-body text-sm mt-3" style={{ color: '#110E0C', opacity: 0.7 }}>
              Formulated for both Natural and Relaxed Hair
            </p>
            <HaloArc color="#EF00C2" className="mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(239,211,197,0.5)', boxShadow: '0 4px 20px rgba(17,14,12,0.03)' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#EFD3C5', color: '#EF00C2' }}>
                  {benefit.icon}
                </div>
                <h3 className="font-display text-lg font-semibold mb-3" style={{ color: '#110E0C' }}>
                  {benefit.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#110E0C', opacity: 0.75 }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
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
          <p className="font-body text-sm mt-6 font-semibold" style={{ color: '#EF00C2' }}>— Glory Omolewa, on the formula</p>
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
            {productFaqs.map((faq: FAQ, i: number) => (
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
