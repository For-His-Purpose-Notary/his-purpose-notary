import Image from "./Image";

export default function Customers({
  image,
  className,
  name,
  testimonial,
  starRating,
}) {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        className={`${
          index < starRating ? "text-yellow-500" : "text-gray-300"
        } text-lg`}
      >
        {index < starRating ? "★" : "☆"}
      </span>
    ));

  return (
    <section>
      <Image image={image} className={className} />
      <p className="font-bold">{name}</p>
      <p>{testimonial}</p>
      <div>{stars}</div>
    </section>
  );
}
