import SubscribeForm from './SubscribeForm'
import Icon from './Icon'
import ModuleCloud from './ModuleCloud'

export default function Hero({ subscription }) {
  return (
    <section id="hero" className="bg-warm-white border-b border-mid-sand/60">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-10 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-dark-brown" /> TAP Business · COMING SOON
          </p>
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-semibold tracking-[-0.055em] leading-[1.06] mt-6 mb-7">
            Your website and business tools.
            <br />
            <span className="text-muted-brown">Starting free.</span>
          </h1>
          <p className="text-lg text-muted-brown leading-relaxed max-w-lg">
            Meet TAP Business, from The Accord Project. Get a free business website, a private management portal, and
            Payments &amp; Invoicing with no monthly fee. Add extra tools as your business grows.
          </p>
          <p className="text-xs text-muted-brown mt-3">Standard payment-processing fees apply.</p>
          <div className="mt-8">
            <SubscribeForm id="hero-email" subscription={subscription} />
          </div>
          <p className="text-xs text-muted-brown mt-4">
            Coming soon. Subscribe to hear when we launch. No payment required.
          </p>
          <a href="#email-updates" className="inline-block text-xs text-muted-brown underline underline-offset-4 mt-2">
            How we use your email
          </a>
        </div>
        <ModuleCloud />
      </div>
      <div className="border-t border-mid-sand/60">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-between gap-x-8 gap-y-3 text-sm font-medium">
          {['Free website & portal', 'Your brand. Your domain.', 'Paid modules from $0.99/month'].map((text) => (
            <span key={text} className="flex items-center gap-2">
              <Icon name="check" className="w-4 h-4" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
