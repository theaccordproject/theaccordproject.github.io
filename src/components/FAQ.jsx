const questions = [
  [
    'What’s free, and what costs extra?',
    'Your business website, management portal, and Payments & Invoicing are free. Contact, Blog, Careers, Booking, Events, and Store are optional paid modules. Standard payment-processing fees are separate; the final TAP Business transaction-fee policy will be announced before launch.',
  ],
  [
    'Can I use my existing domain?',
    'Yes. Connecting a domain you own is included in the free website features. You can use your own logo, brand colors, and business content too.',
  ],
  [
    'Do I need design or technical experience?',
    'You don’t need to design pages or manage plugins. Add your content and choose your branding; TAP Business handles the page layouts for desktop and mobile.',
  ],
  [
    'Is TAP Business available yet?',
    'Not yet. TAP Business is coming soon. Subscribe for launch news and product updates. Signing up here does not create a business account or start a paid subscription.',
  ],
]

export default function FAQ() {
  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 border-t border-mid-sand/60">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.4fr] gap-7 lg:gap-16">
        <div>
          <p className="eyebrow mb-4">A FEW THINGS TO KNOW</p>
          <h2 className="section-title">Before you sign up.</h2>
        </div>
        <div className="border-t border-mid-sand">
          {questions.map(([question, answer]) => (
            <details key={question} className="group border-b border-mid-sand py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer font-semibold list-none [&::-webkit-details-marker]:hidden">
                {question}
                <span aria-hidden="true" className="text-xl font-normal group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>
              <p className="text-sm text-muted-brown leading-relaxed mt-4 pr-6">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
