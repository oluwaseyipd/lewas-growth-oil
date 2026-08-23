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
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: '#110E0C', maxWidth: '60ch' }}>
              Lewa grew up in a household where hair care was a ceremony. Every Saturday morning, her grandmother would sit her down, section her hair with a wide-tooth comb, and work her handmade oil blend through each strand — patient, precise, full of stories.
            </p>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: '#110E0C', opacity: 0.8, maxWidth: '60ch' }}>
              The blend was never written down. It lived in her grandmother&apos;s hands — knowledge passed between women, the way it had always been. When Lewa moved abroad for university, she realised she&apos;d taken that knowledge for granted. Store shelves offered dozens of products, but none felt like home.
            </p>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: '#110E0C', opacity: 0.8, maxWidth: '60ch' }}>
              So she called home. She asked questions she&apos;d never thought to ask. She experimented, researched, and — over two years — she refined a formula she could be proud of. One that worked for her 4C hair, her sister&apos;s 3B curls, and the relaxed hair of women in her community.
            </p>
            <blockquote
              className="font-display text-2xl italic leading-relaxed pl-6"
              style={{ color: '#110E0C', borderLeft: '3px solid #EF00C2' }}
            >
              &ldquo;Every woman&apos;s crown deserves the kind of care that&apos;s been refined over generations — not just formulated in a lab.&rdquo;
            </blockquote>
            <p className="font-body text-sm mt-4 font-semibold" style={{ color: '#EF00C2' }}>— Lewa, Founder</p>
          </div>

          <div>
            <img
              src={FOUNDER2_IMG}
              alt="Lewa in her element"
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
              What drives us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: '#110E0C', lineHeight: 1.12 }}>
              Our values, clearly stated.
            </h2>
            <HaloArc color="#EF00C2" className="mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: 'Heritage',
                body: 'We honour the intergenerational wisdom embedded in plant-based hair care traditions. Our formulas are informed by knowledge that predates product marketing.',
              },
              {
                label: 'Transparency',
                body: 'Every ingredient is listed clearly, with no proprietary blend hiding behind a vague "fragrance." You know exactly what you&apos;re putting on your scalp.',
              },
              {
                label: 'Inclusivity',
                body: 'Lewa&apos;s is made for every hair texture, every curl pattern, every woman who deserves to see her hair thrive. There is no one way to have beautiful hair.',
              },
            ].map((v) => (
              <div
                key={v.label}
                className="rounded-2xl p-10"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="w-8 h-1 rounded mb-6" style={{ backgroundColor: '#EF00C2' }} />
                <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: '#110E0C' }}>{v.label}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: '#110E0C', opacity: 0.75 }}
                  dangerouslySetInnerHTML={{ __html: v.body }} />
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
