export default function Books(){
  const books = [
    { src: "/images/book_01.jpg", title: "What Happens When Nothing Happens", link: "#" },
    { src: "/images/book_02.jpg", title: "Circling The Mountain", link: "#" },
    { src: "/images/book_03.jpg", title: "The Walk", link: "#" },
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
