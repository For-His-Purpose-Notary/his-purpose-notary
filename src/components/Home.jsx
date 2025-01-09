import Header from "./Header";
import Hero from "./Hero";

export default function Home() {
  return (
    <section
      className="bg-[url('images/sky.jpg')] bg-cover bg-blue-200 min-h-screen"
      aria-label="Sky background with clouds"
    >
      <Header />
      <Hero />
    </section>
  );
}
