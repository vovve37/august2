export default function Home(){
  const rows = [
    {href: "/ai", label: "AI"},
    {href: "/photography", label: "PHOTOGRAPHY"},
    {href: "/books", label: "BOOKS"},
  ];
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="text-center space-y-8 md:space-y-12">
        {rows.map(r => (
          <div key={r.href} className="text-4xl md:text-6xl font-semibold">
            <a href={r.href} className="tracking-[0.2em]">{r.label}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
