import SubscribeForm from './SubscribeForm'

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-light-sand py-20 lg:py-24 border-t border-mid-sand">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 md:gap-16">
        <div>
          <p className="eyebrow mb-4">GOOD THINGS ARE TAKING SHAPE</p>
          <h2 className="section-title">
            Your next chapter
            <br />
            starts here.
          </h2>
          <p className="text-muted-brown mt-5 leading-relaxed max-w-md">
            We’re building TAP Business for owners who want to run their business, without becoming website designers.
            Subscribe to hear what’s next and know when we launch.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Be in the loop from the beginning.</h3>
          <p className="text-sm text-muted-brown mb-6">Launch news and TAP Business updates, in your inbox.</p>
          <SubscribeForm id="contact-email" />
          <p className="text-xs text-muted-brown mt-4">No spam. No payment required. Just updates.</p>
        </div>
      </div>
    </section>
  )
}
