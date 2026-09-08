export default function Footer() {
  return (
    <footer className="bg-dark-brown text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <a href="#hero" className="font-semibold text-2xl tracking-tight">
            The Accord Project
          </a>
          <p className="text-mid-sand text-sm mt-3 max-w-sm">
            The company behind TAP Business. Your website and business tools—without the busywork.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-7 gap-y-4 text-sm text-mid-sand md:items-start"
        >
          <a href="#solutions" className="hover:text-white">
            Why TAP Business
          </a>
          <a href="#features" className="hover:text-white">
            Free website
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white">
            FAQs
          </a>
          <a href="#contact" className="hover:text-white">
            Launch updates
          </a>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-mid-sand">
          <p>© {new Date().getFullYear()} The Accord Project. All rights reserved.</p>
          <p>TAP Business, by The Accord Project.</p>
        </div>
      </div>
    </footer>
  )
}
