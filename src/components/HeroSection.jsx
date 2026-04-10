import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function HeroSection() {
  const site = useSelector((state) => state.data.site);
  const homeItems = useSelector((state) => state.data.home);
  const hero = homeItems.find((item) => item.type === 'hero');

  return (
    <section className="bg-gradient-to-r from-primary to-teal-500 px-4 py-12 text-white shadow-lg sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-100 sm:text-sm">{hero?.tagline || 'Solar garden lighting'}</p>
        <h1 className="mt-3 text-2xl font-semibold leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">{hero?.title || 'Brighten your outdoor spaces with premium solar lights'}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-100/90 sm:mt-5 sm:text-lg">{hero?.description || 'Low-maintenance solar lighting for pathways, gardens, and exteriors—designed to last through every season.'}</p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg shadow-primary/10 transition hover:bg-slate-100 sm:px-8 sm:py-4"
          >
            Explore Products
          </Link>
          <a
            href={site.whatsapp_number ? `https://wa.me/${site.whatsapp_number}` : '#'}
            className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/20 sm:px-8 sm:py-4"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
