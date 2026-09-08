import Icon from './Icon'

const solutions = [
  [
    'globe',
    'Look the part, online.',
    'Bring your logo, colors, content, and domain. Prepared layouts keep your website polished and mobile-friendly, without designing every page.',
  ],
  [
    'grid',
    'Keep everything together.',
    'Manage your website, business information, modules, leads, reviews, applications, payments, and customer activity in one private portal.',
  ],
  [
    'message',
    'Turn interest into opportunity.',
    'Capture inquiries, marketing consent, and reviews. Keep leads organized, then let customers book around your services, hours, and staff availability.',
  ],
  [
    'card',
    'Make getting paid simpler.',
    'Use Stripe-powered tools for payments, invoices, recurring bills, subscriptions, and fundraising or donations.',
  ],
  [
    'bag',
    'Make room for what’s next.',
    'Sell physical and digital products, gift cards, and subscription services. Host events, take registrations, and publish news that brings customers back.',
  ],
  [
    'people',
    'Bring your team along.',
    'Invite staff, manage access to broad areas of your business, publish selected team profiles, and remove access when employment ends.',
  ],
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 mb-14">
          <div>
            <p className="eyebrow mb-4">LESS SOFTWARE TO MANAGE</p>
            <h2 className="section-title">
              More time for the
              <br />
              business you’re building.
            </h2>
          </div>
          <p className="text-muted-brown leading-relaxed md:pt-10">
            Your website should work with your business. TAP Business connects your public presence with the tools behind
            it, giving customers one experience built around you. Plug in your content, choose your tools, and make it
            yours.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {solutions.map(([icon, title, body]) => (
            <article key={title} className="border-t border-mid-sand pt-6">
              <Icon name={icon} className="w-7 h-7 mb-5" />
              <h3 className="font-semibold text-lg mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-brown">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
