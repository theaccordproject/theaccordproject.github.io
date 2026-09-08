import Icon from './Icon'

const modules = [
  [
    'message',
    'Contact',
    'Customer contact form, lead capture, optional marketing consent, spam protection, and lead management.',
    '0.99',
  ],
  ['pen', 'Blog', 'Create and publish business news, articles, announcements, and updates.', '0.99'],
  [
    'people',
    'Careers',
    'Publish job openings, create application questions, collect résumés, and review applicants.',
    '1.99',
  ],
  [
    'calendar',
    'Booking',
    'Appointments, reservations, availability, reminders, cancellations, and rescheduling.',
    '1.99',
  ],
  ['spark', 'Events', 'Event listings, registrations, tickets, and special or ticketed experiences.', '1.99'],
  ['bag', 'Store', 'Physical and digital products, subscriptions, shipping, gift cards, and promotions.', '3.99'],
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-8 lg:mb-12">
          <p className="eyebrow mb-4">OPTIONAL MODULES · PLANNED PRICING</p>
          <h2 className="section-title">
            Start free.
            <br />
            Add tools when you need them.
          </h2>
          <p className="text-muted-brown leading-relaxed mt-5">
            Payments &amp; Invoicing is included as a free website feature. No forced bundles or large plans. Activate
            only the interactive modules your business actually uses, and remove them when you no longer need them.
          </p>
        </div>
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          <div className="border-t border-mid-sand">
            {modules.map(([icon, name, description, price]) => (
              <article key={name} className="flex gap-4 py-4 sm:py-6 border-b border-mid-sand/70">
                <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warm-white">
                  <Icon name={icon} className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-semibold">{name}</h3>
                    <p className="font-semibold text-lg">
                      ${price}
                      <span className="text-xs font-normal text-muted-brown"> / month</span>
                    </p>
                  </div>
                  <p className="text-sm text-muted-brown leading-relaxed mt-2 max-w-md">{description}</p>
                </div>
              </article>
            ))}
          </div>
          <aside className="bg-warm-white border border-mid-sand/70 rounded-2xl p-7">
            <div className="mb-6 pb-6 border-b border-mid-sand">
              <p className="text-sm font-semibold">Save when you add all six modules</p>
              <div className="mt-3">
                <p className="text-lg text-muted-brown">
                  <span className="sr-only">Individual-price total: </span>
                  <del>$11.94</del>
                </p>
                <p className="text-5xl font-bold tracking-tight text-red-700 mt-1">
                  <span className="sr-only">Discounted price: </span>
                  $10.99<span className="text-sm font-normal tracking-normal"> / month</span>
                </p>
              </div>
              <p className="text-xs text-muted-brown mt-3 leading-relaxed">
                Every module is optional. Payments &amp; Invoicing is a free website feature, included with every
                combination.
              </p>
            </div>
            <h3 className="text-lg font-semibold mb-5">Or choose just what you need</h3>
            <ul className="space-y-5 text-sm">
              {[
                ['Contact + Blog', '1.98'],
                ['Contact + Booking', '2.98'],
                ['Contact + Booking + Blog', '3.97'],
                ['Store', '3.99'],
              ].map(([name, price]) => (
                <li key={name} className="flex justify-between gap-4">
                  <span className="text-muted-brown">{name}</span>
                  <span className="shrink-0 font-semibold">
                    ${price}
                    <span className="text-xs font-normal">/mo</span>
                  </span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="button w-full mt-7">
              Get launch updates
              <Icon name="arrow" className="w-4 h-4" />
            </a>
          </aside>
        </div>
        <p className="text-xs text-muted-brown leading-relaxed mt-7 max-w-3xl">
          TAP Business is coming soon. These are planned monthly module prices. Standard payment-processing fees are
          separate. Any TAP Business transaction fees will also be separate; the final transaction-fee policy will be
          announced before launch.
        </p>
      </div>
    </section>
  )
}
