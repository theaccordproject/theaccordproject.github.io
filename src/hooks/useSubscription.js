import { useRef, useState } from 'react'

const SUBSCRIBE_URL = import.meta.env.VITE_SUBSCRIBE_URL

function recordSignup(phase, location) {
  // No email addresses or other personal data enter the measurement events.
  const detail = { phase, location }
  try {
    window.dispatchEvent(new CustomEvent('tap:signup', { detail }))
    window.dataLayer?.push({ event: `tap_signup_${phase}`, form_location: location })
  } catch {
    // A measurement integration must never interrupt a subscription.
  }
}

export default function useSubscription() {
  const [status, setStatus] = useState('idle')
  const inFlight = useRef(false)
  const subscribed = useRef(false)

  async function subscribe(email, location) {
    if (inFlight.current || subscribed.current) return
    if (!SUBSCRIBE_URL) {
      setStatus('unavailable')
      recordSignup('unavailable', location)
      return
    }

    inFlight.current = true
    setStatus('loading')
    recordSignup('attempt', location)
    try {
      const response = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Subscription request failed')
      subscribed.current = true
      setStatus('success')
      recordSignup('success', location)
    } catch {
      setStatus('error')
      recordSignup('error', location)
    } finally {
      inFlight.current = false
    }
  }

  return { status, subscribe }
}
