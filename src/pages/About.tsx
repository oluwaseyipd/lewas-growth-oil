import HaloArc from '../components/HaloArc'
import WAButton from '../components/WAButton'

// images
import FOUNDER from '/about-banner.png'
import FOUNDER2 from '/about-img.png'

const FOUNDER_IMG = FOUNDER
const FOUNDER2_IMG = FOUNDER2

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex items-end" style={{ minHeight: '70vh', backgroundColor: '#110E0C' }}>
        <img
          src={FOUNDER_IMG}
          alt="Lewa, founder of Lewa's Growth Oil"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.5, objectPosition: 'center 15%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(17,14,12,0) 0%, rgba(17,14,12,0) 70%, transparent 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40">
          <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white" style={{ lineHeight: 1.05 }}>
            Rooted in love.<br />
            <em>Made with purpose.</em>
          </h1>
        </div>
      </section>

      {/* Origin story */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <HaloArc color="#EF00C2" className="justify-start mb-10" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ color: '#110E0C' }}>
              Inspired by Family, Refined by Science
            </h2>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: '#110E0C', maxWidth: '60ch' }}>
              The recipe isn’t from a factory, it’s a heritage. I learnt the process of blending these rich, nourishing oils from my mum, watching how natural ingredients could revive tired strands. I began making small batches for myself and used it faithfully, and soon my own hair told the story: stronger roots, fuller volume, and a healthy, dandruff-free scalp.
            </p>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: '#110E0C', opacity: 0.8, maxWidth: '60ch' }}>
              Seeing those results, I couldn’t keep it to myself. Friends noticed the difference, and I realized many women around me were struggling, sometimes simply because hair care felt like one more chore. I wanted to change that by offering a product that makes consistent care easy and rewarding.
            </p>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: '#110E0C', opacity: 0.8, maxWidth: '60ch' }}>
              Glory Omolewa Adepoju is a graduate of Science Laboratory Technology and the founder of Lewa’s Growth Oil, a natural hair-care brand she developed after crafting and testing a formula that transformed her own hair. Driven by a love for healthy, thriving hair, she combines scientific knowledge with natural ingredients to help others achieve stronger, dandruff-free strands.
            </p>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: '#110E0C', opacity: 0.8, maxWidth: '60ch' }}>
              Beyond her brand, Glory is a public-speaking enthusiast eager to grow in that field. She also enjoys modeling and influencing, often creating personal photos and videos to share her style and creativity across platforms.
            </p>
            <blockquote
              className="font-display text-2xl italic leading-relaxed pl-6 mb-6"
              style={{ color: '#110E0C', borderLeft: '3px solid #EF00C2' }}
            >
              &ldquo;LEWA’S GROWTH Oil was born from a simple idea: every woman deserves a crown that flourishes. What started as a quiet plan for the year quickly grew into a heartfelt mission to help others fall in love with their hair again.&rdquo;
            </blockquote>
            <p className="font-body text-sm font-semibold" style={{ color: '#EF00C2' }}>— Glory Omolewa Adepoju, Founder</p>
          </div>

          <div>
            <img
              src={FOUNDER2_IMG}
              alt="Glory Omolewa Adepoju, founder of Lewa's Growth Oil"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '4/5', backgroundColor: '#EFD3C5' }}
            />
          </div>
        </div>
      </section>

      {/* Mission / values */}
      <section style={{ backgroundColor: '#EFD3C5' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-16">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
              Our Purpose
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              What we believe & aspire to.
            </h2>
            <HaloArc color="#EF00C2" className="mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: 'What We Believe',
                body: 'At LEWA’S GROWTH Oil, we believe that beautiful hair begins with a healthy scalp and a little daily love. Our goal is to help every woman nurture her natural texture, remove dandruff and buildup, and enjoy hair that is strong, soft, and radiant.',
              },
              {
                label: 'Our Vision',
                body: 'Maintaining healthy hair, a dandruff-free scalp, and increasing growth on every side of the hair, bringing out the ultimate natural beauty of every crown.',
              },
              {
                label: 'Our Heritage',
                body: 'Our recipe isn’t from a factory, it’s a heritage. Learned from a mother\'s process of blending rich, nourishing oils, every bottle is a promise of quality, tradition, and care.',
              },
            ].map((v) => (
              <div
                key={v.label}
                className="rounded-2xl p-10 flex flex-col justify-between"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div>
                  <div className="w-8 h-1 rounded mb-6" style={{ backgroundColor: '#EF00C2' }} />
                  <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: '#110E0C' }}>{v.label}</h3>
                  <p className="font-body text-sm leading-relaxed text-balance" style={{ color: '#110E0C', opacity: 0.75 }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#EF00C2' }}>
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6" style={{ lineHeight: 1.1 }}>
            Ready to experience the difference?
          </h2>
          <p className="font-body text-white/80 text-base mb-12 max-w-md mx-auto">
            Join thousands of women who have made Lewa&apos;s a permanent part of their hair ritual.
          </p>
          <WAButton label="Chat to Order on WhatsApp" large light />
        </div>
      </section>
    </div>
  )
}
