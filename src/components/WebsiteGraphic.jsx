import Icon from './Icon'

export default function WebsiteGraphic() {
  return (
    <figure className="w-full max-w-lg mx-auto" aria-label="Illustration of a business website and its private management portal">
      <div className="rounded-2xl border border-mid-sand bg-white shadow-xl shadow-dark-brown/5 overflow-hidden mr-4 sm:mr-8">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-mid-sand/60">
          <span aria-hidden="true" className="w-2 h-2 rounded-full bg-mid-sand" />
          <span aria-hidden="true" className="w-2 h-2 rounded-full bg-mid-sand" />
          <span aria-hidden="true" className="w-2 h-2 rounded-full bg-mid-sand" />
          <span className="text-xs text-muted-brown ml-auto">Your website</span>
          <Icon name="globe" className="w-4 h-4 ml-1" />
        </div>
        <div className="p-5 sm:p-7">
          <p className="text-[10px] font-semibold tracking-widest">YOUR BUSINESS</p>
          <div className="flex items-center gap-4 sm:gap-8 mt-5">
            <div className="flex-1">
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">Your brand.<br />Your story.<br />Your place online.</p>
              <p className="text-xs text-muted-brown mt-3">Made to feel like you.</p>
            </div>
            <div className="w-16 sm:w-24 h-32 rounded-t-full bg-light-sand flex items-center justify-center shrink-0">
              <Icon name="spark" className="w-9 h-9 text-muted-brown" />
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 pt-4 pb-4 border-t border-mid-sand/60 text-xs text-muted-brown">
            <span>About us</span><span>Our services</span><span>Meet the team</span>
          </div>
        </div>
      </div>
      <div className="relative ml-5 sm:ml-16 -mt-7 rounded-2xl bg-dark-brown text-white p-5 sm:p-6 shadow-xl shadow-dark-brown/10">
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold text-sm sm:text-base">Your business portal</p>
          <Icon name="lock" className="w-4 h-4 text-tan shrink-0" />
        </div>
        <p className="text-xs text-mid-sand mt-2">Everything behind your website, in one place.</p>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[['pen', 'Content'], ['spark', 'Branding'], ['people', 'Staff']].map(([icon, label]) => (
            <div key={label} className="rounded-lg border border-white/15 py-3 text-center">
              <Icon name={icon} className="w-5 h-5 text-tan mx-auto mb-2" />
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="text-[11px] text-muted-brown text-right mt-4">An illustration of the TAP Business experience.</figcaption>
    </figure>
  )
}
