import { reviews } from "../data/reviews";
import Customers from "./Customers";

export default function Testimonials() {
  return (
    <section className="max-w-6xl">
      <section className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-20 mt-20 lg:mt-40 text-white items-center text-xl">
        {reviews.map((review, index) => (
          <Customers
            key={index}
            image={review.image}
            className={"rounded-full w-14 h-14"}
            name={review.name}
            testimonial={review.testimonial}
            rating={review.rating}
          />
        ))}
      </section>
    </section>
  );
}
