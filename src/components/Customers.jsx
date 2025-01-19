import Image from "./Image";

export default function Customers({
  image,
  className,
  name,
  testimonial,
  imageRating,
}) {
  return (
    <section>
      <Image image={image} className={className} />
      <p className="font-bold">{name}</p>
      <p>{testimonial}</p>
      <p className="bg-gray-200">{imageRating}</p>
    </section>
  );
}
