import AboutSections from '../components/AboutSections.jsx';

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 sm:space-y-8 sm:px-0">
      <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">About</p>
          <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">Our mission and approach</h1>
          <p className="mt-4 max-w-2xl text-slate-600">We use clean energy solar lighting systems to make outdoor spaces safer, smarter, and more attractive.</p>
        </div>
      </section>
      <AboutSections />
    </div>
  );
}

export default AboutPage;
