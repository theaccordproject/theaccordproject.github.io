import { useState } from 'react'
import Icon from './Icon'

const SUBSCRIBE_URL = import.meta.env.VITE_SUBSCRIBE_URL

export default function SubscribeForm({ id }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  async function onSubmit(event) {
    event.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    try {
      if (!SUBSCRIBE_URL) throw new Error('Subscription endpoint is not configured')
      const response = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Subscription request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="w-full max-w-lg">
      {status === 'success' ? (
        <div role="status" className="rounded-xl border border-success-border bg-success-bg text-dark-brown px-5 py-4">
          <p className="font-semibold">You’re on the list.</p>
          <p className="text-sm mt-1">Thanks for subscribing! Watch your inbox for TAP Business launch news.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} aria-busy={status === 'loading'}>
          <label htmlFor={id} className="sr-only">
            Email address
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              id={id}
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-describedby={status === 'error' ? `${id}-error` : undefined}
              className="min-w-0 flex-1 rounded-lg border border-mid-sand bg-white px-4 py-3.5 text-sm text-dark-brown placeholder:text-muted-brown"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="button whitespace-nowrap disabled:opacity-60"
            >
              {status === 'loading' ? 'Subscribing…' : 'Notify me'}
              <Icon name="arrow" className="w-4 h-4" />
            </button>
          </div>
          {status === 'error' && (
            <p id={`${id}-error`} role="alert" className="mt-3 bg-danger-bg text-dark-brown rounded-lg p-3 text-sm">
              We couldn’t confirm your subscription. Please try again in a moment.
            </p>
          )}
        </form>
      )}
    </div>
  )
}
