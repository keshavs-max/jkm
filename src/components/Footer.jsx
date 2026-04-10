import { useSelector } from 'react-redux';

function Footer() {
  const site = useSelector((state) => state.data.site);

  return (
    <footer className="border-t border-slate-200 bg-white/90 py-6">
      <div className="mx-auto max-w-6xl px-4 text-slate-600 sm:px-6">
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>{site.site_title || 'Solar Lights Store'} © {new Date().getFullYear()}</p>
          <p>{site.email || 'contact@example.com'} · {site.phone || '+91 99999 99999'}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
