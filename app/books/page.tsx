cat > app/books/page.tsx <<'EOF'
export default function BooksPage() {
  const books = [
    { src: "/images/book_01.jpg", title: "What Happens When Nothing Happens" },
    { src: "/images/book_02.jpg", title: "Circling the Mountain" },
    { src: "/images/book_03.jpg", title: "The Walk" }
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">
          BOOKS
        </h1>

        <div className="grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2">
          {books.map((b, i) => (
            <figure key={i}>
              <div className="w-full aspect-[3/2] bg-neutral-100 overflow-hidden">
                <img
                  src={b.src}
                  alt={b.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="text-center text-xs md:text-sm mt-3">
                {b.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF
