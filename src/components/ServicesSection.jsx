import { useSelector } from 'react-redux';

function ServicesSection() {
  const homeItems = useSelector((state) => state.data.home);
  const services = homeItems.filter((item) => item.type === 'service');

  return (
    <section className="mt-10 grid gap-6 md:grid-cols-3">
      {services.map((service) => (
        <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
          <p className="mt-3 text-slate-600">{service.description}</p>
          {service.link && (
            <p className="mt-4 text-sm font-semibold text-primary">{service.link}</p>
          )}
        </article>
      ))}
    </section>
  );
}

export default ServicesSection;
