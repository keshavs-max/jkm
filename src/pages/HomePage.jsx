import HeroSection from '../components/HeroSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { useSelector } from 'react-redux';

function HomePage() {
  const site = useSelector((state) => state.data.site);

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 sm:space-y-12 sm:px-0">
      <HeroSection />
      <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Products</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">Featured solar solutions</h2>
          </div>
          <p className="text-sm text-slate-500">Browse popular categories and solutions for gardens and homes.</p>
        </div>
        <ServicesSection />
      </section>
      <TestimonialSection />
      <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Why choose us</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">Solar lighting built for durability and ease</h2>
            <p className="mt-4 text-slate-600">{site.meta_description || 'Our solar lights are designed to deliver bright illumination and low-maintenance use for pathways, gardens, and outdoor living.'}</p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
              <p className="font-semibold text-slate-900">Free installation guidance</p>
              <p className="mt-2 text-slate-600">Get planning support for every layout, from lighting stairways to garden beds.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
              <p className="font-semibold text-slate-900">Quality tested parts</p>
              <p className="mt-2 text-slate-600">Each product is curated for long life with IP65 protection and premium solar panels.</p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

export default HomePage;
