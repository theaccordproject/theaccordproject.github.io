import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-mid-sand">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="https://www.theaccordproject.com/" className="flex items-center">
          <img src="/tap-logo.jpg" alt="The Accord Project" className="h-18 w-42 rounded-xl object-cover" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Products', 'Features', 'Pricing', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-brown hover:text-dark-brown transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block bg-dark-brown text-white text-sm px-5 py-2 rounded-full hover:bg-brown transition-colors"
        >
          Get Started
        </a>

        <button
          className="md:hidden text-dark-brown p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-mid-sand px-6 py-5 flex flex-col gap-5">
          {['About', 'Products', 'Features', 'Pricing', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-brown"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-dark-brown text-white text-sm px-5 py-2.5 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
