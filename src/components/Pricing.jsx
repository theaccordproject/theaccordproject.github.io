const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: null,
    description: 'Free for small congregations — no time limit, free forever!',
    features: [
      'Up to 100 members',
      'Events & registration',
      'Donation funds',
      'Member directory',
    ],
    cta: 'Get Free Access',
    highlight: false,
    badge: 'Free Forever',
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/ mo',
    description: 'For growing churches ready for more.',
    features: [
      'Up to 500 members',
      'Everything in Starter',
      'Groups & ministries',
      'Donation tracking & reports',
      'Community messaging',
      'Service scheduling',
    ],
    cta: 'Get Early Access',
    highlight: true,
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/ mo',
    description: 'Full platform for established organizations.',
    features: [
      'Unlimited members',
      'Everything in Growth',
      'Priority support',
      'Custom roles & permissions',
      'Advanced reports',
    ],
    cta: 'Get Early Access',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-tan uppercase tracking-widest text-xs font-semibold mb-4">
            Pricing
          </p>
          <h2 className="text-4xl font-semibold text-dark-brown mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-brown max-w-xl mx-auto leading-relaxed">
            Plans designed to grow with your organization. Start free, upgrade when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, period, description, features, cta, highlight }) => (
            <div
              key={name}
              className={`relative rounded-3xl p-8 border-2 transition-all ${
                highlight
                  ? 'border-dark-brown bg-white shadow-xl'
                  : 'border-mid-sand bg-white'
              }`}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-dark-brown text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <p className="text-xs font-semibold text-brown uppercase tracking-widest mb-3">
                {name}
              </p>

              <div className="flex items-end gap-2 mb-3">
                <span className="text-4xl font-bold text-dark-brown">{price}</span>
                {period && <span className="text-brown mb-1">{period}</span>}
              </div>

              <p className="text-brown text-sm leading-relaxed mb-6">{description}</p>

              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-brown">
                    <svg className="w-4 h-4 text-tan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full text-sm font-semibold transition-colors ${
                  highlight
                    ? 'bg-dark-brown text-white hover:bg-brown'
                    : 'border border-dark-brown text-dark-brown hover:bg-light-sand'
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-brown text-sm mt-10">
          The Starter plan is free forever. We earn a small processing fee on donations — so if the free plan meets your needs, it stays free.
        </p>
      </div>
    </section>
  )
}
