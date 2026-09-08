import Nav from './components/Nav'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Features from './components/Features'
import Pricing from './components/Pricing'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Solutions />
        <Features />
        <Pricing />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
