import { loadEnv } from 'vite'

const endpoint = process.env.VITE_SUBSCRIBE_URL || loadEnv('production', process.cwd(), 'VITE_').VITE_SUBSCRIBE_URL

try {
  const url = new URL(endpoint)
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('Invalid public endpoint')
  console.log(
    'Subscription endpoint configured. Verify the API accepts signups from the production site before publishing.',
  )
} catch {
  console.error(
    'Deployment stopped: set VITE_SUBSCRIBE_URL to your public HTTPS subscription API URL in .env.local or the build environment. Local builds and previews remain available.',
  )
  process.exitCode = 1
}
