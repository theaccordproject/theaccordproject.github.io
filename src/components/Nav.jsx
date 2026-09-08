import { useState } from 'react'

const links = [
  ['#hero', 'TAP Business'],
  ['#solutions', 'Why TAP Business'],
  ['#features', 'Free website'],
  ['#pricing', 'Pricing'],
  ['#faq', 'FAQs'],
  ['#contact', 'Launch updates'],
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-mid-sand/60">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white">
        Skip to content
      </a>
      <nav aria-label="Main navigation" className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="flex xl:grid xl:grid-cols-[1fr_auto_1fr] items-center justify-between h-20 xl:h-25 gap-5">
          <a href="#hero" aria-label="The Accord Project home" className="justify-self-start shrink-0">
            <img src="/tap-logo.jpg" alt="The Accord Project" className="w-40 xl:w-52 h-auto" />
          </a>
          <div className="hidden xl:flex items-center gap-6 text-sm">
            {links.map(([href, label]) => (
              <a key={href} href={href} className="text-muted-brown hover:text-dark-brown">
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden xl:inline-flex justify-self-end rounded-full bg-dark-brown text-white px-6 py-2.5 text-base font-medium transition-colors hover:bg-[#514037]"
          >
            Get launch updates
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden border border-mid-sand rounded-lg p-2.5 shrink-0"
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d={menuOpen ? 'M6 6l12 12M6 18 18 6' : 'M3 6h18M3 12h18M3 18h18'} />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div
            id="mobile-menu"
            className="xl:hidden border-t border-mid-sand py-5 flex flex-col gap-5"
            onKeyDown={(event) => {
              if (event.key === 'Escape') setMenuOpen(false)
            }}
          >
            {[...links, ['#contact', 'Get launch updates']].map(([href, label]) => (
              <a href={href} key={label} onClick={() => setMenuOpen(false)} className="text-sm">
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
