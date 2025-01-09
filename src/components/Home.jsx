import Header from "./Header";
import Hero from "./Hero";

export default function Home() {
  return (
    <section className="bg-[url('images/sky.jpg')] bg-cover min-h-screen">
      <Header />
      <Hero />
    </section>
  );
}
