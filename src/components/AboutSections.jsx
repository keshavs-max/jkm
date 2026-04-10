import { useSelector } from 'react-redux';

function AboutSections() {
  const about = useSelector((state) => state.data.about);

  return (
    <div className="space-y-10">
      {about.map((section) => (
        <div key={`${section.order}-${section.heading}`} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">{section.heading}</h3>
          <p className="mt-4 text-slate-600">{section.paragraph}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutSections;
