import { notaryServices } from "../data/services";
import Card from "./Card";
import Testimonials from "./Testimonial";

export default function Services() {
  return (
    <section
      className="bg-slate-800 mt-20 flex flex-col justify-center items-center min-h-screen"
      id="testimonials"
    >
      s
      <h3
        className="text-2xl md:text-4xl font-bold text-white mt-20"
        aria-labelledby="testimonial-heading"
      >
        What customers are saying...
      </h3>
      <Testimonials />
      <section className="flex flex-col justify-center min-h-screen items-center">
        <h4
          className="text-2xl md:text-4xl font-bold text-white mt-20"
          aria-labelledby="services-heading"
        >
          About Our Services...
        </h4>
        <section className="flex flex-col lg:flex-row gap-20 md:gap-12 mt-20 md:mt-40 mb-40">
          {notaryServices.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              price={service.price}
              description={service.description}
              features={service.features}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
