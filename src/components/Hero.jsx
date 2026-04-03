import { useState } from 'react'

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY
const BREVO_LIST_ID = Number(import.meta.env.VITE_BREVO_LIST_ID)

export default function Hero() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          listIds: [BREVO_LIST_ID],
          updateEnabled: true,
        }),
      })
    } catch (err) {
      console.error('Failed to subscribe', err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <section id="hero" className="bg-warm-white min-h-screen flex items-center py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold text-dark-brown leading-tight mb-6">
            Empowering Organizations to Thrive
          </h1>
          <p className="text-brown text-lg leading-relaxed mb-8">
            A unified suite of software built for churches, nonprofits, and community
            organizations. We are building something great - be the first to know when
            we launch.
          </p>

          {submitted ? (
            <div className="bg-success-bg border border-success-border text-dark-brown rounded-2xl px-6 py-5 inline-block">
              <p className="font-semibold mb-1">We are so excited to have you onboard!</p>
              <p className="text-sm">You are officially on the list — we cannot wait to share what we have been building. Stay tuned!</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="flex-1 bg-white border border-mid-sand text-dark-brown placeholder:text-brown/60 rounded-full px-5 py-3 text-sm outline-none focus:border-tan transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-dark-brown text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-brown transition-colors whitespace-nowrap disabled:opacity-60"
              >
                {loading ? 'Saving...' : 'Get Updates'}
              </button>
            </form>
          )}

          <p className="text-brown/60 text-xs mt-4">No spam. Just a note when we launch.</p>
        </div>

        <div className="relative flex items-center justify-center h-96">
          <div className="w-80 h-80 bg-light-sand rounded-full absolute"></div>
          <div className="w-64 h-64 bg-mid-sand rounded-full absolute translate-x-10 -translate-y-6"></div>
          <div className="w-52 h-52 bg-tan/30 rounded-full absolute -translate-x-8 translate-y-8"></div>

          <div className="relative z-10 flex flex-col gap-3">
            {[
              { abbr: 'PAY', bg: 'bg-dark-brown', label: 'AccordPAY', sub: 'Payment Portal', offset: '' },
              { abbr: 'T1',  bg: 'bg-tan',        label: 'TapONE',    sub: 'Church Management', offset: 'translate-x-8' },
              { abbr: 'APP', bg: 'bg-brown',       label: 'TapAPP',    sub: 'Member App', offset: '' },
            ].map(({ abbr, bg, label, sub, offset }) => (
              <div
                key={label}
                className={`bg-white rounded-2xl shadow-lg px-4 py-3.5 flex items-center gap-3 w-52 ${offset}`}
              >
                <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{abbr}</span>
                </div>
                <div>
                  <p className="text-dark-brown text-sm font-semibold">{label}</p>
                  <p className="text-brown text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
