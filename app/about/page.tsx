export default function About(){
  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">ABOUT</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-xl font-semibold">About</h3>
            <p className="mt-3 text-neutral-700">
              Photographer and image maker based in Stockholm. Commercial studio background with 15+ years of collaboration with H&amp;M and editorial clients.
            </p>
          </div>

          <aside className="md:col-span-1">
            <div className="rounded-2xl border p-4 bg-white/60 text-center md:text-left">
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm text-neutral-600 mt-1">Inquiries for advertising, fashion and editorial.</p>
              <a href="mailto:contact@augusteriksson.com" className="mt-3 inline-block px-4 py-2 rounded-2xl bg-black text-white text-sm">Email</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
