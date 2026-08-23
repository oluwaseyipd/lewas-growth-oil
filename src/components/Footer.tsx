import { Link } from 'react-router-dom'
import logow from '/logo.png'
import HaloArc from './HaloArc'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#110E0C', color: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <img src={logow} alt="" className="w-24" />
            <p className="font-body text-sm mt-4 leading-relaxed" style={{ color: '#EFD3C5', opacity: 0.8 }}>
              Premium natural hair growth oil rooted in inherited wisdom. Made for women who know their crown deserves care.
            </p>
            <HaloArc color="#EF00C2" className="mt-6 justify-start" />
          </div>

          <div className="grid  grid-cols md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
                Navigate
              </p>
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'The Oil', to: '/the-oil' },
                { label: 'FAQ', to: '/faq' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="block font-body text-sm mb-3 transition-colors hover:text-[#EF00C2]"
                  style={{ color: '#EFD3C5' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#EF00C2' }}>
                Connect
              </p>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm mb-3 transition-colors hover:text-[#EF00C2]"
                style={{ color: '#EFD3C5' }}
              >
                +254 700 000 000
              </a>
              <a
                href="mailto:hello@lewasgrowthoil.com"
                className="block font-body text-sm mb-3 transition-colors hover:text-[#EF00C2]"
                style={{ color: '#EFD3C5' }}
              >
                hello@lewasgrowthoil.com
              </a>
              <div className="flex gap-4 mt-5">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-70">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#EFD3C5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="transition-opacity hover:opacity-70">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#EFD3C5">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.24 8.24 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(239,211,197,0.2)' }}
        >
          <p className="font-body text-xs" style={{ color: 'rgba(239,211,197,0.5)' }}>
            © 2026 Lewa&apos;s Growth Oil. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: 'rgba(239,211,197,0.5)' }}>
            Premium Natural Hair Care · Made with love
          </p>
        </div>
      </div>
    </footer>
  )
}
