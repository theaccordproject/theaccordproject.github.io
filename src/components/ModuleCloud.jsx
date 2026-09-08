import Icon from './Icon'

const rows = [
  {
    className: 'sm:pr-12',
    items: [['globe', 'Custom domains'], ['spark', 'Reviews']],
  },
  {
    className: 'sm:pl-6',
    items: [['message', 'Contact', true], ['calendar', 'Booking', true], ['pen', 'Blog']],
  },
  {
    className: '',
    items: [['globe', 'Free website', true], ['card', 'Payments & Invoicing', true]],
  },
  {
    className: 'sm:pr-4',
    items: [['spark', 'Events'], ['bag', 'Store', true], ['people', 'Careers']],
  },
  {
    className: 'sm:pl-10',
    items: [['people', 'Staff access'], ['message', 'FAQs'], ['calendar', 'Business hours']],
  },
]

export default function ModuleCloud() {
  return (
    <div className="relative isolate overflow-hidden py-10 sm:py-16 lg:py-20" aria-label="TAP Business modules and features">
      <div aria-hidden="true" className="absolute -z-10 inset-x-4 inset-y-6 rounded-full bg-light-sand/70" />
      <div aria-hidden="true" className="absolute -z-10 inset-x-10 inset-y-0 rounded-full border border-mid-sand/50 rotate-[-18deg]" />
      <p className="eyebrow text-center mb-9">A LITTLE OF EVERYTHING. ONLY WHAT YOU NEED.</p>
      <div className="space-y-4 sm:space-y-5">
        {rows.map(({ className, items }, index) => (
          <ul key={index} className={`flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 ${className}`}>
            {items.map(([icon, label, featured]) => (
              <li
                key={label}
                className={`flex items-center gap-2 sm:gap-3 rounded-full border px-4 py-3 sm:px-5 sm:py-4 shadow-lg shadow-dark-brown/5 ${
                  label === 'Free website'
                    ? 'bg-dark-brown border-dark-brown text-white text-base sm:text-lg font-semibold sm:rotate-[-3deg]'
                    : featured
                      ? 'bg-white border-mid-sand/70 text-dark-brown text-sm sm:text-base font-semibold sm:rotate-[2deg]'
                      : 'bg-warm-white border-mid-sand/60 text-muted-brown text-xs sm:text-sm'
                }`}
              >
                <Icon name={icon} className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${label === 'Free website' ? 'text-tan' : ''}`} />
                {label}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p className="text-sm text-muted-brown text-center mt-9">One TAP Business. Plenty of possibilities.</p>
    </div>
  )
}
