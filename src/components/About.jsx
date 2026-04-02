export default function About() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-warm-white rounded-3xl h-48 flex items-center justify-center">
            <div className="w-16 h-16 bg-tan rounded-2xl"></div>
          </div>
          <div className="bg-light-sand rounded-3xl h-48 mt-8 flex items-center justify-center">
            <div className="w-12 h-12 bg-brown rounded-full"></div>
          </div>
          <div className="bg-mid-sand/50 rounded-3xl h-48 -mt-4 flex items-center justify-center">
            <div className="w-10 h-10 bg-dark-brown/30 rounded-xl"></div>
          </div>
          <div className="bg-warm-white rounded-3xl h-48 mt-4 flex items-center justify-center">
            <div className="w-14 h-14 bg-tan/60 rounded-full"></div>
          </div>
        </div>

        <div>
          <p className="text-tan uppercase tracking-widest text-xs font-semibold mb-4">
            Who We Are
          </p>
          <h2 className="text-4xl font-semibold text-dark-brown leading-snug mb-6">
            Built for the Organizations That Build Communities
          </h2>
          <p className="text-brown leading-relaxed mb-5">
            The Accord Project is a technology company dedicated to equipping churches,
            nonprofits, and community organizations with the tools they need to operate
            efficiently and grow their impact.
          </p>
          <p className="text-brown leading-relaxed">
            From managing members and processing tithes to running a full church
            administration — our products are thoughtfully designed to serve the people
            behind the mission.
          </p>
        </div>
      </div>
    </section>
  )
}
