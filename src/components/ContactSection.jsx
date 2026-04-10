import { useSelector } from 'react-redux';
import { createWhatsAppLink } from '../utils/whatsapp.js';

function ContactSection() {
  const site = useSelector((state) => state.data.site);

  return (
    <section className="grid gap-10 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Get in touch for a custom quote</h2>
        <p className="mt-4 text-slate-600">Reach out via WhatsApp, email, phone, or use the Google Form to instantly send your inquiry.</p>
        <div className="mt-8 space-y-4 text-slate-700">
          <div>
            <p className="font-semibold">Phone</p>
            <p>{site.phone || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>{site.email || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold">Address</p>
            <p>{site.address || 'N/A'}</p>
          </div>
        </div>
        <a
          href={createWhatsAppLink({ whatsappNumber: site.whatsapp_number })}
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
        >
          Chat on WhatsApp
        </a>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <p className="font-semibold text-slate-900">Google Form</p>
        <p className="mt-3 text-slate-600">Use this form for product inquiries and order details.</p>
        {site.google_form_link ? (
          <a
            href={site.google_form_link}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
          >
            Open inquiry form
          </a>
        ) : (
          <p className="mt-5 text-sm text-slate-500">Google Form link is not configured yet.</p>
        )}
      </div>
    </section>
  );
}

export default ContactSection;
