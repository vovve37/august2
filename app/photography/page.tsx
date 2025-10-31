import GridWithLightbox from "@/components/GridWithLightbox";

export default function PhotoPage(){
  const images = [
    { src: "/images/photography_01.jpg", title: "H&M" },
    { src: "/video/photography_03.mov", title: "H&M" },
    { src: "/images/photography_08.jpg", title: "H&M" },
    { src: "/images/photography_14.jpg", title: "H&M" },
    { src: "/images/photography_21.jpg", title: "Elle Deco" },
    { src: "/images/photography_15.jpg", title: "Sköna Hem" },
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">
          PHOTOGRAPHY
        </h1>
        <GridWithLightbox items={images} />
      </div>
    </section>
  );
}
