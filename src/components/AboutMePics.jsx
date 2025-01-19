import Image from "./Image";

export default function AboutMePics() {
  return (
    <section className="flex flex-col lg:flex-row gap-6">
      <Image
        image={" /images/placeholder.jpg"}
        className="max-w-sm md:max-w-lg lg:max-w-lg"
        alt="Image of Gina Vigil, by Grok"
      />

      <Image
        image={" /images/placeholder2.jpg"}
        className="max-w-sm md:max-w-lg lg:max-w-lg"
        alt="Image of Gina Vigil and Daughters, by Grok"
      />
    </section>
  );
}
