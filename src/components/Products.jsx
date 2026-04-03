const products = [
  {
    abbr: 'PAY',
    bg: 'bg-dark-brown',
    name: 'AccordPAY',
    tagline: 'Payment Portal for Organizations',
    description:
      'Accept donations, event payments, and fees online or in person. Built with security and compliance at its core.',
    features: [
      'Online & in-person payments',
      'Recurring giving & subscriptions',
      'Donor management & receipts',
      'Real-time reporting & payouts',
      'Secure, PCI-compliant processing',
    ],
  },
  {
    abbr: 'ONE',
    bg: 'bg-tan',
    name: 'TapONE',
    tagline: 'Church Management Software',
    description:
      'A complete church administration platform to manage members, ministries, events, attendance, and more from one dashboard.',
    features: [
      'Member & family directory',
      'Attendance tracking',
      'Ministry & group management',
      'Event planning & check-in',
      'Staff & volunteer coordination',
    ],
  },
  {
    abbr: 'APP',
    bg: 'bg-brown',
    name: 'TapAPP',
    tagline: 'Church Member App',
    description:
      "Put your church in every member's pocket. TapAPP keeps your congregation connected, informed, and engaged wherever they are.",
    features: [
      'Give & track donations',
      'Event calendar & RSVP',
      'Sermon notes & media',
      'Push notifications & updates',
      'Branded for your church',
    ],
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-light-sand py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-tan uppercase tracking-widest text-xs font-semibold mb-4">
            Our Products
          </p>
          <h2 className="text-4xl font-semibold text-dark-brown mb-4">
            Everything Your Organization Needs
          </h2>
          <p className="text-brown max-w-xl mx-auto leading-relaxed">
            Three focused products. One connected platform. Built to work independently
            or together as your organization grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map(({ abbr, bg, name, tagline, description, features }) => (
            <div
              key={name}
              className="bg-white rounded-3xl p-8 border border-mid-sand hover:border-tan hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="text-white text-xs font-bold">{abbr}</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-brown mb-1">{name}</h3>
              <p className="text-tan text-sm font-medium mb-4">{tagline}</p>
              <p className="text-brown text-sm leading-relaxed mb-6">{description}</p>
              <ul className="space-y-2 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-brown">
                    <span className="text-tan mt-0.5 flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center border border-dark-brown text-dark-brown text-sm py-2.5 rounded-full hover:bg-dark-brown hover:text-white transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
