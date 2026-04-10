import { useSelector } from 'react-redux';

function TestimonialSection() {
  const testimonials = useSelector((state) => state.data.testimonials);

  return (
    <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:mt-14 sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Testimonials</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">What our customers say</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="rounded-3xl border border-slate-200 p-4 sm:p-6">
            <p className="text-slate-700">“{testimonial.message}”</p>
            <div className="mt-4 flex items-center justify-between sm:mt-5">
              <span className="font-semibold text-slate-900">{testimonial.name}</span>
              <span className="text-sm text-slate-500">{testimonial.rating}/5</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
