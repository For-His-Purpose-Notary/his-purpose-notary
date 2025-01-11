import Header from "./Header";
import Hero from "./Hero";

export default function Home() {
  return (
    <section
      className=" bg-[url('images/silhouette-man-praying-with-cross-hand-sunrise.jpg')] bg-cover min-h-screen text-white"
      aria-label="Sky background with clouds"
    >
      <Header />
      <Hero />
    </section>
  );
}
