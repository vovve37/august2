export default function About(){
  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">ABOUT</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-center md:text-left">
            <p className="mt-3 text-neutral-700">
              Photographer, AI-artist and author of photo books. I am an experienced photographer with over 25 years of professional work in studio and interior photography. Extensive collaboration with H&M, and other clients across a wide range of editorials, campaigns and creative teams. Educated in AI-driven image and film production at Curious Refuge, with a focus on open-source tools and customized workflows. My practice blends classic craft with the latest technology: I build custom ComfyUI pipelines, prompt-engineer in tools such as Midjourney, Seedream, Seedance and, Wan. I am very experienced in working closely with multiple stages of production: pre-production with art buyers, in the creative production phase with art directors.
            </p>
          </div>

          <aside className="md:col-span-1">
            <div className="rounded-2xl border p-4 bg-white/60 text-center md:text-left">
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm text-neutral-600 mt-1">Inquiries </p>
              <a href="mailto:info@august.se" className="mt-3 inline-block px-4 py-2 rounded-2xl bg-black text-white text-sm">Email</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
