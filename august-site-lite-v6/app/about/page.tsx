export default function About(){
  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">ABOUT / CV</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-neutral-700">
              Photographer and image maker based in Stockholm. Commercial studio background with 15+ years of collaboration with H&M and editorial clients.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border bg-white/60">
                <div className="text-xs text-neutral-500">Location</div>
                <div className="font-medium">Stockholm, Sweden</div>
              </div>
              <div className="p-4 rounded-xl border bg-white/60">
                <div className="text-xs text-neutral-500">Email</div>
                <div className="font-medium">contact@augusteriksson.com</div>
              </div>
            </div>
            <h3 className="mt-8 text-xl font-semibold">CV</h3>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li className="flex gap-3 justify-center md:justify-start"><span className="w-32 text-neutral-500 shrink-0">2009—ongoing</span><span className="font-medium">Commercial photographer & studio lead</span><span className="text-neutral-500">— Studio August Eriksson</span></li>
              <li className="flex gap-3 justify-center md:justify-start"><span className="w-32 text-neutral-500 shrink-0">2009—ongoing</span><span className="font-medium">Photographer (collab)</span><span className="text-neutral-500">— H&M</span></li>
            </ul>
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
