import GridWithLightbox from "@/components/GridWithLightbox";

export default function PhotoPage(){
  const images = [
    { src: "/images/photography_01.jpg", title: "H&M" },
    { src: "/images/photography_02.jpg", title: "H&M" },
    { src: "/video/photography_03.mov", title: "H&M" },
    { src: "/images/photography_04.jpg", title: "H&M" },
    { src: "/images/photography_05.jpg", title: "Sköna Hem" },
    { src: "/images/photography_06.jpg", title: "Sköna Hem" },
    { src: "/images/photography_07.jpg", title: "H&M" },
    { src: "/images/photography_08.jpg", title: "H&M" },
    { src: "/images/photography_09.jpg", title: "H&M" },
    { src: "/images/photography_10.jpg", title: "H&M" },
    { src: "/images/photography_11.jpg", title: "H&M" },
    { src: "/images/photography_12.jpg", title: "H&M" },
    { src: "/images/photography_13.jpg", title: "H&M" },
    { src: "/images/photography_14.jpg", title: "H&M" },
    { src: "/images/photography_15.jpg", title: "Sköna Hem" },
    { src: "/images/photography_16.jpg", title: "Stockholm Fashion Week" },
    { src: "/images/photography_17.jpg", title: "Skanska" },
    { src: "/images/photography_18.jpg", title: "H&M" },
    { src: "/images/photography_19.jpg", title: "H&M" },
    { src: "/images/photography_20.jpg", title: "H&M" },
    { src: "/images/photography_21.jpg", title: "Elle Deco" },
    { src: "/images/photography_22.jpg", title: "Sköna Hem" },
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
