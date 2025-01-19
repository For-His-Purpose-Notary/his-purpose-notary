export default function SecondHeader() {
  const quote1 = "This is a quote";
  const author = "Colossians 3:23-24";
  return (
    <blockquote className="text-md text-center bg-slate-800 text-white w-full">
      <section className="max-w-5xl mx-auto">
        <p>{quote1}</p>
        <cite>- {author}</cite>
      </section>
    </blockquote>
  );
}
