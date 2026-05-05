import Link from "next/link";

export default function HMPage() {
  const images = [
    "/images/hm/hm_01.jpg",
    "/images/hm/hm_02.jpg",
    "/images/hm/hm_03.jpg",
    "/images/hm/hm_04.jpg",
    "/images/hm/hm_05.jpg",
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="container max-w-6xl">
        <div className="mb-12 text-center">
          <Link href="/ai" className="text-sm opacity-60 hover:opacity-100">
            ← Back to AI
          </Link>

          <h1 className="mt-8 text-3xl md:text-4xl font-semibold tracking-[0.2em]">
            H&amp;M
          </h1>
        </div>

        <div className="space-y-12 md:space-y-16">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`H&M ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
