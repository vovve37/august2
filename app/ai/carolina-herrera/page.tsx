import Link from "next/link";

export default function CarolinaHerreraPage() {
  const images = [
    "/images/carolina-herrera/ch_01.jpg",
    "/images/carolina-herrera/ch_02.jpg",
    "/images/carolina-herrera/ch_03.jpg",
    "/images/carolina-herrera/ch_04.jpg",
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="container max-w-6xl">
        <div className="mb-12 text-center">
          <Link href="/ai" className="text-sm opacity-60 hover:opacity-100">
            ← Back to AI
          </Link>

          <h1 className="mt-8 text-3xl md:text-4xl font-semibold tracking-[0.2em]">
            CAROLINA HERRERA
          </h1>
        </div>

        <div className="space-y-12 md:space-y-16">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Carolina Herrera ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
