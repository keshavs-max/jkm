import ContactSection from '../components/ContactSection.jsx';

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-0">
      <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Contact</p>
          <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">Talk to our team</h1>
          <p className="mt-4 max-w-2xl text-slate-600">Send a message for quotes, product details, or design help. We'll respond quickly via WhatsApp or email.</p>
        </div>
      </section>
      <div className="mt-6 sm:mt-8">
        <ContactSection />
      </div>
    </div>
  );
}

export default ContactPage;
