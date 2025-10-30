import GridWithLightbox from "@/components/GridWithLightbox";

export default function PhotoPage(){
  const images = [
    { src: "/images/photography_01.jpg", title: "H&M" },
    { src: "/images/photography_08.jpg", title: "H&M" },
    { src: "/images/photography_14.jpg", title: "H&M" },
    { src: "/images/photography_15.jpg", title: "H&M" },
    { src: "/images/photography_21.jpg", title: "H&M" },
  ];
  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">PHOTOGRAPHY</h1>
        <figure className="text-center mb-16">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <video src="/video/photography-03.mov" controls className="w-full h-full object-cover" />
          </div>
          <figcaption className="mt-3 text-xs md:text-sm text-center">H&M</figcaption>
        </figure>
        <GridWithLightbox items={images} />
      </div>
    </section>
  );
}
