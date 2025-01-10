export default function Hero() {
  const quote1 =
    "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.";
  const author = "Colossians 3:23-24";
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <section className="max-w-xs lg:max-w-3xl text-center flex flex-col gap-4">
        <img src="" alt="Logo" />
        <blockquote className="text-xl md:text-2xl lg:text-3xl">
          <p>{quote1}</p>
          <cite>- {author}</cite>
        </blockquote>
      </section>
    </section>
  );
}
