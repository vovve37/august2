import Link from "next/link";

export default function KlarnaPage() {
  const images = [
    "/images/klarna/Klarna 01.jpg",
    "/images/klarna/Klarna 02.jpg",
    "/images/klarna2/Klarna 03.jpg",
    "/images/klarna2/Klarna 04.jpg",
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="container max-w-6xl">
        <div className="mb-12 text-center">
          <Link href="/ai" className="text-sm opacity-60 hover:opacity-100">
            ← Back to AI
          </Link>

          <h1 className="mt-8 text-3xl md:text-4xl font-semibold tracking-[0.2em]">
            KLARNA
          </h1>
        </div>

        <div className="space-y-12 md:space-y-16">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Klarna ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
