import Header from "./Header";
import Hero from "./Hero";

export default function Home() {
  return (
    <section
      className=" bg-[url('images/pen.jpg')] bg-cover min-h-screen text-white"
      aria-label="Sky background with clouds"
    >
      <Header />
      <Hero />
    </section>
  );
}

// Photo by Mohammad Danish: https://www.pexels.com/photo/black-twist-pen-on-notebook-891059/
