import GridWithLightbox from "@/components/GridWithLightbox";

export default function AIPage(){
  // Endast stillbilder här. Videon läggs separat nedan.
  const images = [
    { src: "/images/ai_02.jpg", title: "Klarna" },
    { src: "/images/ai_03.jpg", title: "Klarna" },
    { src: "/images/ai_05.jpg", title: " " },
    { src: "/images/ai_06.jpg", title: " " },
    { src: "/images/ai_07.jpg", title: " " },
    { src: "/images/ai_08.jpg", title: " " },
    { src: "/images/ai_09.jpg", title: " " },
    { src: "/images/ai_10.jpg", title: " " },
    { src: "/images/ai_12.jpg", title: "Spec Ad Loro Piana" }
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">
          AI
        </h1>

        {/* Rad 1: videon i samma 3:2-storlek som bilderna, tom spalt till höger på desktop */}
        <div className="grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2 mb-16">
          <figure>
            <div className="w-full aspect-[3/2] overflow-hidden bg-neutral-100">
              <video
                src="https://askmjbecgnz35zwl.public.blob.vercel-storage.com/the_interview.mp4"
                poster="/images/4_14.jpg"
                controls
                className="w-full h-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-xs md:text-sm text-center">
              The Interview - An AI Short Film
            </figcaption>
          </figure>
          <div aria-hidden className="hidden md:block" />
        </div>

        {/* Övriga bilder (3:2, obeskurna via GridWithLightbox) */}
        <GridWithLightbox items={images} />
      </div>
    </section>
  );
}
