import Nav from './components/Nav'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Features from './components/Features'
import Pricing from './components/Pricing'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import useSubscription from './hooks/useSubscription'

export default function App() {
  const subscription = useSubscription()
  return (
    <>
      <Nav />
      <main id="main">
        <Hero subscription={subscription} />
        <Solutions />
        <Features />
        <Pricing />
        <FAQ />
        <ContactCTA subscription={subscription} />
      </main>
      <Footer />
    </>
  )
}
