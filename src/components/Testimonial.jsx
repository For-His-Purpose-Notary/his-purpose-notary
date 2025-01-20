import { reviews } from "../data/reviews";
import Customers from "./Customers";

export default function Testimonials() {
  return (
    <section className="max-w-6xl" aria-labelledby="testimonials-header">
      <article
        className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-20 mt-20 lg:mt-40 text-white items-center text-xl"
        role="list"
      >
        {reviews.map((review, index) => (
          <Customers
            key={index}
            image={review.image}
            className={"max-w-xs rounded-3xl p-2"}
            alt={review.alt}
            name={review.name}
            testimonial={review.testimonial}
            starRating={review.starRating}
          />
        ))}
      </article>
    </section>
  );
}
