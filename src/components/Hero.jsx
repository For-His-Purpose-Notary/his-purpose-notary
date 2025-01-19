import Button from "./Button";
import Image from "./Image";

export default function Hero() {
  const ginasWhy = "Our Mission Our Purpose";
  const ourPurpose = `We are abitur pulvinar rutrum rhoncus. Donec eget risus sollicitudin, porttitor mi et, laoreet ante.
     Morbi ut orci nibh. Curabitur blandit, massa ac dapibus pulvinar, sapien diam vestibulum justo, 
     sit amet tincidunt lacus nibh sed tellus. Nulla consectetur eros non enim vestibulum, ac interdum 
     eros`;

  // const quote1 =
  //   "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.";
  // const author = "Colossians 3:23-24";
  return (
    <section className="flex flex-col justify-center items-center">
      <section className="max-w-xs md:max-w-6xl h-screen text-center flex flex-col lg:flex-row justify-center items-center gap-8">
        <section className="flex flex-col max-w-3xl gap-4">
          <h2 className="text-3xl md:text-5xl p-4 md:p-0">{ginasWhy}</h2>
          <p className="text-xl">{ourPurpose}</p>

          <Button
            btnTxt={"Get Started"}
            className={
              "bg-slate-800 rounded-full p-2 w-full md:w-60 h-10 text-white mx-auto"
            }
          />
        </section>
        <Image
          image="/images/logo.png"
          alt="For His Purpose Notary Services, cross with dove and leaves"
          className={"max-w-xs md:max-w-lg"}
        />
        {/* <blockquote className="text-2xl md:text-3xl lg:text-3xl">
          <p>{quote1}</p>
          <cite>- {author}</cite>
        </blockquote> */}
      </section>
    </section>
  );
}
