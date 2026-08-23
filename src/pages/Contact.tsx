import HaloArc from '../components/HaloArc'
import WAButton from '../components/WAButton'

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: '#110E0C', paddingTop: 80 }}>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white" style={{ lineHeight: 1.08 }}>
            We&apos;d love to hear from you.
          </h1>
          <HaloArc color="#EF00C2" className="mt-8" />
        </div>
      </section>

      {/* Main contact block */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-2xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="font-body text-base leading-relaxed mb-16" style={{ color: '#110E0C', opacity: 0.75 }}>
            The fastest way to reach us — for orders, questions, or just to say hello — is always WhatsApp. We&apos;re a small team and we actually read every message.
          </p>

          <WAButton label="Chat on WhatsApp" large />

          <p className="font-body text-sm mt-6" style={{ color: '#110E0C', opacity: 0.5 }}>
            We usually reply within a few hours.
          </p>

          <HaloArc color="#EFD3C5" className="my-16" />

          <div className="space-y-8">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#EF00C2' }}>
                WhatsApp & Phone
              </p>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl transition-opacity hover:opacity-60"
                style={{ color: '#110E0C' }}
              >
                +254 700 000 000
              </a>
            </div>

            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#EF00C2' }}>
                Email
              </p>
              <a
                href="mailto:hello@lewasgrowthoil.com"
                className="font-display text-2xl transition-opacity hover:opacity-60"
                style={{ color: '#110E0C' }}
              >
                hello@lewasgrowthoil.com
              </a>
            </div>

            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#EF00C2' }}>
                Follow Along
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body font-semibold text-sm transition-opacity hover:opacity-60"
                  style={{ color: '#110E0C' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @lewasgrowthoil
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body font-semibold text-sm transition-opacity hover:opacity-60"
                  style={{ color: '#110E0C' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.24 8.24 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z"/>
                  </svg>
                  @lewasgrowthoil
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
