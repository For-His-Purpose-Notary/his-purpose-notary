import Button from "./Button";

export default function Card({ title, description, price, features }) {
  return (
    <>
      <section className="max-w-xs md:max-w-sm h-max bg-neutral-100 text-center p-8 rounded-xl flex flex-col gap-4">
        <h2 className="font-bold text-2xl lg:text-3xl">{title}</h2>
        <p className="text-lg">{description}</p>
        <p className="font-bold text-4xl mt-2">{price}</p>

        <ul className="flex flex-col gap-4 text-left ml-10 mt-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <Button
          btnTxt={"Start Today"}
          className="bg-slate-800 rounded-full text-white p-2 "
        />
      </section>
    </>
  );
}
