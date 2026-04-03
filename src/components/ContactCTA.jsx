import { useState } from 'react'

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY
const BREVO_LIST_ID = Number(import.meta.env.VITE_BREVO_LIST_ID)

export default function ContactCTA() {
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
    <section id="contact" className="bg-dark-brown py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-tan uppercase tracking-widest text-xs font-semibold mb-6">
          Stay in the Loop
        </p>
        <h2 className="text-4xl font-semibold text-white leading-snug mb-6">
          We Are Launching Soon
        </h2>
        <p className="text-mid-sand leading-relaxed mb-10">
          Drop your email and we will notify you the moment we go live. Early sign-ups
          will get priority access and founding member pricing.
        </p>

        {submitted ? (
          <div className="bg-success-bg border border-success-border text-dark-brown rounded-2xl px-8 py-6">
            <p className="font-semibold mb-1">We are so excited to have you onboard!</p>
            <p className="text-sm">You are officially on the list — we cannot wait to share what we have been building. Stay tuned!</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="flex-1 bg-white/10 border border-mid-sand/40 text-white placeholder:text-mid-sand rounded-full px-5 py-3 text-sm outline-none focus:border-tan transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-tan text-dark-brown px-7 py-3 rounded-full text-sm font-semibold hover:bg-mid-sand transition-colors whitespace-nowrap disabled:opacity-60"
            >
              {loading ? 'Saving...' : 'Notify Me'}
            </button>
          </form>
        )}

        <p className="text-mid-sand/60 text-xs mt-5">No spam. Just a note when we launch.</p>
      </div>
    </section>
  )
}
