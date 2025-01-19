import { notaryServices } from "../data/services";
import Card from "./Card";
import Testimonials from "./Testimonial";

export default function Services() {
  return (
    <section className="bg-slate-800 mt-20 flex flex-col justify-center items-center min-h-screen">
      <h3 className="text-4xl text-white mt-20">What People Are Saying...</h3>

      <Testimonials />
      <section className="mt-20 flex flex-col lg:flex-row justify-center min-h-screen items-center gap-14 lg:gap-8">
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
  );
}
