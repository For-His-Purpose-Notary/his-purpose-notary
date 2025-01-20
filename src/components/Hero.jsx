import Button from "./Button";
import Image from "./Image";

export default function Hero() {
  const ginasWhy = "Our Mission Our Purpose";
  const ourPurpose = `We are abitur pulvinar rutrum rhoncus. Donec eget risus sollicitudin, porttitor mi et, laoreet ante.
     Morbi ut orci nibh. Massa ac dapibus pulvinar, sapien diam, ac dapibus pulvina.  `;

  const ourPurpose2 = `Curabitur blandit, massa ac dapibus pulvinar, sapien diam vestibulum justo, 
     sit amet tincidunt lacus nibh sed tellus. Nulla consectetur eros non enim nulla vestido. ac dapibus pulvina`;

  return (
    <section className="flex flex-col justify-center items-center -mt-10">
      <section className="max-w-xs md:max-w-6xl min-h-screen text-center flex flex-col lg:flex-row justify-center items-center gap-8">
        <section className="flex flex-col gap-4 mt-20 md:mt-40 lg:-mt-10">
          <h2 className="text-3xl md:text-5xl p-4 md:p-0">{ginasWhy}</h2>
          <p className="text-xl">{ourPurpose}</p>
          <p className="text-xl">{ourPurpose2}</p>

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
          className={"max-w-xs md:max-w-lg rounded-3xl"}
        />
      </section>
    </section>
  );
}
