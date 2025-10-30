import GridWithLightbox from "@/components/GridWithLightbox";

export default function PhotoPage(){
  // Samma filnamn som du redan laddat upp i public/images/
  const images = [
    { src: "/images/photography_01.jpg", title: "H&M" },
    { src: "/images/photography_08.jpg", title: "H&M" },
    { src: "/images/photography_14.jpg", title: "H&M" },
    { src: "/images/photography_15.jpg", title: "H&M" },
    { src: "/images/photography_21.jpg", title: "H&M" },
  ];

  // Gör alla rutor lika stora: vi lägger grid + enhetligt bildförhållande
  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">PHOTOGRAPHY</h1>

        <div className="grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2">
          {images.map((it,i)=>(
            <figure key={i}>
              <div className="w-full aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={it.src}
                  alt={it.title || ""}
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={(e)=>{ e.preventDefault(); (document.getElementById(`ph-${i}`) as HTMLButtonElement)?.click(); }}
                />
              </div>
              {it.title && <figcaption className="text-center text-xs md:text-sm mt-3">{it.title}</figcaption>}
              {/* “Knapp” som GridWithLightbox brukar ha internt – vi gör en dummy trigger */}
              <button id={`ph-${i}`} className="hidden" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
