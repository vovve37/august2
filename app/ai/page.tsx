cat > app/ai/page.tsx <<'EOF'
import GridWithLightbox from "@/components/GridWithLightbox";

export default function AIPage(){
  const images = [
    { src: "/images/ai_02.jpg", title: "Klarna" },
    { src: "/images/ai_03.jpg", title: "Klarna" },
    { src: "/video/toteme_web.mp4", title: " " },
    { src: "/images/ai_05.jpg", title: " " },
    { src: "/images/ai_06.jpg", title: " " },
    { src: "/images/ai_07.jpg", title: " " },
    { src: "/images/ai_08.jpg", title: " " },
    { src: "/images/ai_09.jpg", title: " " },
    { src: "/images/ai_10.jpg", title: " " },
    { src: "/images/ai_11.jpg", title: " " },
    { src: "/images/ai_12.jpg", title: "Spec ad Loro Piana" }
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">
          AI
        </h1>

        {/* Rad 1: video i 3:2, egen rad, tom högerkolumn på desktop */}
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
              THE INTERVIEW – AN AI SHORT FILM
            </figcaption>
          </figure>
          <div aria-hidden className="hidden md:block" />
        </div>

        <GridWithLightbox items={images} />
      </div>
    </section>
  );
}
EOF
