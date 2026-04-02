const links = {
  Products: ['AccordPAY', 'TapONE', 'TapAPP'],
  Company: ['About', 'Careers', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security'],
}

export default function Footer() {
  return (
    <footer className="bg-dark-brown border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 bg-tan rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-dark-brown rounded-full"></div>
            </div>
            <span className="text-white font-semibold tracking-widest text-xs uppercase">
              The Accord Project
            </span>
          </div>
          <p className="text-mid-sand text-sm leading-relaxed">
            Empowering organizations to thrive through thoughtful, purpose-built software.
          </p>
        </div>

        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              {group}
            </p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-mid-sand text-sm hover:text-tan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-mid-sand text-xs">
            © {new Date().getFullYear()} The Accord Project. All rights reserved.
          </p>
          <p className="text-mid-sand text-xs">
            Built for organizations that build communities.
          </p>
        </div>
      </div>
    </footer>
  )
}
