import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HaloArc from '../components/HaloArc'
import WAButton from '../components/WAButton'
import { TESTIMONIES, faqs, type FAQ } from '../REUSABLES'

// images
import FOUNDER from '/lewa-img.png'
import PRODUCT from '/product-img.png'
import ROSEMARY from '/rosemary.png'
import COCONUT from '/coconut.png'
import WOMAN2 from '/hairylady.png'

const HERO_IMG = 'https://images.unsplash.com/photo-1596921393429-5ff36c7f5d8d?w=1800&h=1100&fit=crop&auto=format'
const FOUNDER_IMG = FOUNDER
const PRODUCT_IMG = PRODUCT
const ROSEMARY_IMG = ROSEMARY
const COCONUT_IMG = COCONUT
const WOMAN2_IMG = WOMAN2

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C12 2 5 8.5 5 14a7 7 0 0014 0c0-5.5-7-12-7-12z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Growth',
    desc: 'Stimulates follicles and promotes healthy, visible growth within weeks.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Hydration',
    desc: 'Locks moisture deep into the shaft, leaving hair soft and supple all day.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12h18M12 3v18" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'Scalp Care',
    desc: 'Clears dandruff, soothes irritation, and maintains a healthy scalp environment.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Lightweight',
    desc: 'Fast-absorbing, never greasy — works with all hair types and textures.',
  },
]



function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#EF00C2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Home() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState<number>(0)

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? TESTIMONIES.length - 1 : prev - 1))
  }

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === TESTIMONIES.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextTestimonial()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentTestimonialIndex])

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end" style={{ backgroundColor: '#110E0C' }}>
        <img
          src={HERO_IMG}
          alt="Woman with lush natural hair"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0.55 }}
        />
        {/* Gradient overlay — darkens bottom for text legibility */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(17,14,12,0.92) 0%, rgba(17,14,12,0.3) 60%, transparent 100%)' }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32">
          <p
            className="font-body text-xs font-semibold uppercase tracking-[0.25em] mb-5"
            style={{ color: '#EF00C2' }}
          >
            Premium Natural Hair Care
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-none text-white max-w-2xl mb-6"
            style={{ lineHeight: 1.05 }}
          >
            Royal care for hair that flows freely.
          </h1>
          <p className="font-body text-base md:text-lg text-white/70 max-w-sm mb-10 leading-relaxed">
            One oil. Rooted in nature. Crafted for every crown.
          </p>
          <WAButton large />
        </div>
      </section>

      {/* ── Problem → Promise strip ── */}
      <section style={{ backgroundColor: '#110E0C', color: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <HaloArc color="#EF00C2" className="mb-10" />
          <p className="font-body text-sm uppercase tracking-widest mb-6" style={{ color: '#EF00C2' }}>
            Sound familiar?
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight mb-6" style={{ lineHeight: 1.15 }}>
            Dandruff. Breakage.<br />
            <em>Routines that never seem to work.</em>
          </h2>
          <HaloArc color="#EFD3C5" className="my-8" />
          <p className="font-body text-base leading-relaxed" style={{ color: '#EFD3C5', maxWidth: 540, margin: '0 auto' }}>
            Lewa&apos;s Growth Oil is the answer your scalp has been asking for. One lightweight formula that nourishes from root to tip — no complicated 10-step routine needed.
          </p>
        </div>
      </section>

      {/* ── Brand story teaser ── */}
      <section style={{ backgroundColor: '#EFD3C5' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <img
              src={FOUNDER_IMG}
              alt="Lewa, founder"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '4/5', maxHeight: 600 }}
            />
            {/* Floating accent */}
            <div
              className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#EF00C2' }}
            >
              <span className="font-display text-white text-center text-xs font-semibold leading-tight">Since<br />2020</span>
            </div>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#EF00C2' }}>
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              Inherited wisdom.<br />Bottled with love.
            </h2>
            <HaloArc color="#EF00C2" className="justify-start mb-8" />
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: '#110E0C', maxWidth: '60ch' }}>
              Lewa grew up watching her grandmother blend oils by hand — rosemary, coconut, cold-pressed seeds — each drop carrying generations of hair wisdom. What started as a ritual became a recipe, and a recipe became a mission.
            </p>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: '#110E0C', opacity: 0.75, maxWidth: '58ch' }}>
              "I wanted every woman to have access to the kind of care that was passed down to me — without the guesswork."
            </p>
            <Link
              to="/about"
              className="font-body font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: '#EF00C2', borderBottom: '1px solid #EF00C2', paddingBottom: 2 }}
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Product spotlight ── */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#EF00C2' }}>
              The Product
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              Everything your hair needs.<br />
              <em>Nothing it doesn&apos;t.</em>
            </h2>
            <HaloArc color="#EFD3C5" className="justify-start mb-8" />
            <ul className="space-y-4 mb-10">
              {[
                'Stimulates growth from the root',
                'Locks in moisture for 24+ hours',
                'Strengthens from root to tip',
                'Clears dandruff and soothes the scalp',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#EF00C2' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                      <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </span>
                  <span className="font-body text-base" style={{ color: '#110E0C' }}>{item}</span>
                </li>
              ))}
            </ul>
            <WAButton />
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={PRODUCT_IMG}
              alt="Lewa's Growth Oil bottle"
              className="rounded-2xl object-cover"
              style={{ width: '100%', maxWidth: 420, aspectRatio: '4/5', backgroundColor: '#EFD3C5' }}
            />
          </div>
        </div>
      </section>

      {/* ── Benefits grid ── */}
      <section style={{ backgroundColor: '#EFD3C5' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
              Why it works
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              Four pillars of hair health.
            </h2>
            <HaloArc color="#EF00C2" className="mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-8 transition-shadow hover:shadow-lg"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(239,211,197,0.8)' }}
              >
                <div className="mb-5" style={{ color: '#EF00C2' }}>{b.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: '#110E0C' }}>{b.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#110E0C', opacity: 0.75 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ingredients strip ── */}
      <section style={{ backgroundColor: '#110E0C' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#EF00C2' }}>
                What&apos;s inside
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6" style={{ lineHeight: 1.12 }}>
                Nature&apos;s most powerful<br />
                <em>hair ingredients.</em>
              </h2>
              <HaloArc color="#EFD3C5" className="justify-start mb-8" />
              <p className="font-body text-base leading-relaxed mb-10" style={{ color: '#EFD3C5', maxWidth: '52ch' }}>
                Every drop of Lewa&apos;s Growth Oil is crafted from cold-pressed, plant-derived oils — no fillers, no mineral oil, no compromise. Just the good stuff, working together.
              </p>
              <Link
                to="/the-oil"
                className="font-body font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-60"
                style={{ color: '#EF00C2', borderBottom: '1px solid #EF00C2', paddingBottom: 2 }}
              >
                Full ingredient breakdown →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { img: ROSEMARY_IMG, name: 'Rosemary Extract', desc: 'Stimulates follicles & boosts circulation' },
                { img: COCONUT_IMG, name: 'Coconut Oil', desc: 'Deep moisture & protein retention' },
                { img: WOMAN2_IMG, name: 'Castor Oil', desc: 'Strengthens roots & reduces breakage' },
                { img: PRODUCT_IMG, name: 'Argan Oil', desc: 'Shine, softness & frizz control' },
              ].map((ing) => (
                <div key={ing.name} className="rounded-xl overflow-hidden relative group" style={{ aspectRatio: '1', backgroundColor: '#EFD3C5' }}>
                  <img src={ing.img} alt={ing.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4" style={{ background: 'linear-gradient(to top, rgba(17,14,12,0.85) 0%, transparent 60%)' }}>
                    <p className="font-body text-white font-semibold text-sm">{ing.name}</p>
                    <p className="font-body text-white/70 text-xs mt-0.5">{ing.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
              Real results
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              Customers are talking.
            </h2>
            <HaloArc color="#EF00C2" className="mt-6" />
          </div>
          <div className="relative overflow-hidden max-w-3xl mx-auto" style={{ minHeight: '280px' }}>
            {/* Active Testimonial Card */}
            <div
              key={currentTestimonialIndex}
              className="rounded-2xl p-8 md:p-10 animate-slide-left flex flex-col justify-between"
              style={{ backgroundColor: '#EFD3C5', border: '1px solid rgba(239,0,194,0.1)', minHeight: '240px' }}
            >
              <div>
                <Stars count={TESTIMONIES[currentTestimonialIndex].stars} />
                <blockquote className="font-display text-xl md:text-2xl italic mt-5 mb-6 leading-relaxed" style={{ color: '#110E0C' }}>
                  &ldquo;{TESTIMONIES[currentTestimonialIndex].quote}&rdquo;
                </blockquote>
              </div>
              <p className="font-body font-semibold text-base" style={{ color: '#110E0C' }}>
                — {TESTIMONIES[currentTestimonialIndex].name}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={handlePrevTestimonial}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-[#EFD3C5] hover:scale-105 active:scale-95 cursor-pointer"
              style={{ borderColor: 'rgba(239,0,194,0.3)', color: '#EF00C2' }}
              aria-label="Previous testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <span className="font-body text-sm font-medium" style={{ color: '#110E0C', opacity: 0.6 }}>
              {currentTestimonialIndex + 1} of {TESTIMONIES.length}
            </span>

            <button
              onClick={handleNextTestimonial}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:bg-[#EFD3C5] hover:scale-105 active:scale-95 cursor-pointer"
              style={{ borderColor: 'rgba(239,0,194,0.3)', color: '#EF00C2' }}
              aria-label="Next testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ preview ── */}
 <section style={{ backgroundColor: '#EFD3C5' }}>
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
              Got questions?
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              We have answers.
            </h2>
            <HaloArc color="#EF00C2" className="mt-6" />
          </div>

          <div className="space-y-3">
            {faqs.map((faq: FAQ, i: number) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(239,211,197,0.8)' }}
              >
                <button
                  className="w-full flex justify-between items-start gap-4 px-7 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-body font-semibold text-base" style={{ color: '#110E0C' }}>{faq.q}</span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
                    style={{
                      backgroundColor: '#EF00C2',
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    }}
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

          <div className="text-center mt-10">
            <Link
              to="/faq"
              className="font-body font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: '#EF00C2', borderBottom: '1px solid #EF00C2', paddingBottom: 2 }}
            >
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA band ── */}
      <section style={{ backgroundColor: '#EF00C2' }}>
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2
            className="font-display text-4xl md:text-6xl font-semibold text-white mb-6"
            style={{ lineHeight: 1.1 }}
          >
            Ready to let your crown flourish?
          </h2>
          <p className="font-body text-white/80 text-base mb-12 max-w-md mx-auto leading-relaxed">
            Order directly through WhatsApp — quick, easy, and personal. We usually reply within a few hours.
          </p>
          <WAButton label="Chat to Order on WhatsApp" large light />
        </div>
      </section>
    </div>
  )
}
