import Icon from './Icon'
import WebsiteGraphic from './WebsiteGraphic'

const features = [
  [
    'Make it yours',
    'Logo, favicon & brand colors',
    'Light or dark theme',
    'Homepage hero & calls to action',
    'Custom-domain connection',
  ],
  [
    'Tell your story',
    'About page & services showcase',
    'Ratings & reviews',
    'FAQs & team profiles',
    'Announcement bar',
  ],
  [
    'Help people find you',
    'Business hours & service areas',
    'Contact details, location & map',
    'Social links & multi-tier footer',
    'Desktop & mobile layouts',
  ],
  [
    'Payments & Invoicing',
    'One-time payments & invoices',
    'Recurring bills',
    'Payment history',
    'Fundraising & donations',
  ],
]

export default function Features() {
  return (
    <section id="features" className="bg-warm-white border-y border-mid-sand/60 py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">YOUR FOUNDATION, INCLUDED</p>
            <h2 className="section-title">
              Free Website
              <br />Your static website is free forever!
            </h2>
            <p className="text-muted-brown leading-relaxed mt-5">
              Your TAP Business account, private business portal, static website, and visual website features are free.
            </p>
            <p className="text-muted-brown leading-relaxed mt-3">
              Payments &amp; Invoicing is included as a free website feature. Standard payment-processing fees apply.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="text-4xl font-semibold tracking-tight">
                $0<span className="text-base font-normal tracking-normal text-muted-brown"> / month</span>
              </p>
              <p className="text-sm text-muted-brown">The essentials, before any extras.</p>
            </div>
          </div>
          <WebsiteGraphic />
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {features.map(([title, ...items]) => (
            <article key={title} className="rounded-xl bg-white border border-mid-sand/60 p-7">
              <h3 className="font-semibold text-lg mb-5">{title}</h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-brown">
                    <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-dark-brown" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-7 text-sm text-muted-brown">
          You bring the content. TAP Business takes care of the layout. Add interactive business tools when you need
          them.
        </p>
      </div>
    </section>
  )
}
