export default function AIPage() {
  const items = [
    {
      type: "video",
      src: "https://askmjbecgnz35zwl.public.blob.vercel-storage.com/the_interview.mp4",
      poster: "/ai/the_interview_poster.jpg",
      title: "The Interview",
    },
    {
      type: "image",
      src: "/ai/AI 01.jpg",
      alt: "AI 01"
    },
    {
      type: "image",
      src: "/ai/AI 02.jpg",
      alt: "AI 02"
    },
    {
      type: "image",
      src: "/ai/AI 03.jpg",
      alt: "AI 03"
    },
    {
      type: "image",
      src: "/ai/AI 04.jpg",
      alt: "AI 04"
    }
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">
          AI
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="relative w-full aspect-[3/2] bg-black">
              {item.type === "video" ? (
                <video
                  controls
                  poster={item.poster}
                  src={item.src}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
