import Icon from './Icon'

const solutions = [
  [
    'globe',
    'Look the part, online.',
    'Your logo, colors, and content in polished layouts that work on phones and computers.',
  ],
  [
    'grid',
    'Keep everything together.',
    'Update your website and manage customer activity from one private business portal.',
  ],
  [
    'message',
    'Turn interest into opportunity.',
    'Collect inquiries and organize leads. Let customers book around your services and staff availability.',
  ],
  [
    'card',
    'Make getting paid simpler.',
    'Accept payments, send invoices, and manage recurring bills with Stripe-powered tools.',
  ],
  [
    'bag',
    'Make room for what’s next.',
    'Sell products, host events, and publish updates with optional tools you can add as you grow.',
  ],
  [
    'people',
    'Bring your team along.',
    'Invite staff, choose what they can access, and introduce your team on your website.',
  ],
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 mb-8 lg:mb-12">
          <div>
            <p className="eyebrow mb-4">LESS SOFTWARE TO MANAGE</p>
            <h2 className="section-title">
              More time for the
              <br />
              business you’re building.
            </h2>
          </div>
          <p className="text-muted-brown leading-relaxed md:pt-10">
            Your website should work with your business. TAP Business connects your public presence with the tools
            behind it, giving customers one experience built around you. Plug in your content, choose your tools, and
            make it yours.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 sm:gap-y-10">
          {solutions.map(([icon, title, body]) => (
            <article
              key={title}
              className="grid grid-cols-[24px_1fr] sm:block gap-x-3 border-t border-mid-sand pt-4 sm:pt-6"
            >
              <Icon name={icon} className="w-6 h-6 sm:mb-5" />
              <h3 className="font-semibold text-lg mb-3">{title}</h3>
              <p className="col-start-2 text-sm leading-relaxed text-muted-brown">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
