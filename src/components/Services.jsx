import { notaryServices } from "../data/services";
import Card from "./Card";

export default function Services() {
  return (
    <section className="mt-20 flex flex-col lg:flex-row justify-center items-center gap-14 lg:gap-8">
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
  );
}
