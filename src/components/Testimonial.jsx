import { reviews } from "../data/reviews";
import Customers from "./Customers";

export default function Testimonials() {
  return (
    <section className="grid grid-cols-3 gap-10 mt-40 mb-10 text-white items-center">
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
  );
}
