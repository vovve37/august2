import GridWithLightbox from "@/components/GridWithLightbox";

export default function AIPage(){
  const images = [
    { src: "/images/ai_02.jpg", title: "H&M" },
    { src: "/images/ai_03.jpg", title: "H&M" },
    { src: "/video/ai_04.mov", title: "H&M" },
    { src: "/images/ai_05.jpg", title: "H&M" },
    { src: "/images/ai_06.jpg", title: "H&M" },
    { src: "/images/ai_07.jpg", title: "H&M" },
    { src: "/images/ai_08.jpg", title: "H&M" },
    { src: "/images/ai_09.jpg", title: "H&M" },
    { src: "/images/ai_10.jpg", title: "H&M" },
    { src: "/images/ai_11.jpg", title: "H&M" },
    { src: "/images/ai_12.jpg", title: "H&M" },
  ];
  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">AI</h1>
        <figure className="text-center mb-16">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <video src="/video/the-interview.mp4" poster="/images/4_14.jpg" controls className="w-full h-full object-cover" />
          </div>
          <figcaption className="mt-3 text-xs md:text-sm text-center">THE INTERVIEW – AN AI SHORT FILM</figcaption>
        </figure>
        <GridWithLightbox items={images} />
      </div>
    </section>
  );
}
