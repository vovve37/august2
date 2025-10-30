export default function Books(){
  const books = [
    { src: "/images/photography_01.jpg", title: "Book One — 2014", link: "#" },
    { src: "/images/photography_08.jpg", title: "Book Two — 2018", link: "#" },
    { src: "/images/photography_14.jpg", title: "Book Three — 2023", link: "#" },
  ];
  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.2em] mb-10">BOOKS</h1>
        <div className="grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2">
          {books.map((b,i)=>(
            <figure key={i} className="text-center">
              <a href={b.link}><img src={b.src} alt={b.title} className="w-full h-auto" /></a>
              <figcaption className="mt-3 text-xs md:text-sm text-center">{b.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
