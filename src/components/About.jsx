import AboutMePics from "./AboutMePics";

export default function About() {
  const aboutText = [
    `We are abitur pulvinar rutrum rhoncus. Donec eget risus sollicitudin, porttitor mi et, laoreet ante.
     Morbi ut orci nibh. Curabitur blandit, massa ac dapibus pulvinar, sapien diam vestibulum justo, 
     sit amet tincidunt lacus nibh sed tellus. Nulla consectetur eros non enim vestibulum, ac interdum 
     eros hendrerit. Nullam aliquet nibh vitae lacinia iaculis. Praesent aliquet enim lorem, sit amet
      varius quam lobortis eu. Sed ex mauris, dignissim id massa ac, congue blandit nunc
     Morbi id nulla dapibus, gravida ante id, volutpat urna. Nam et elementum orci, non viverra diam`,
  ];

  const whyNotary = [
    `Morbi ut orci nibh. Curabitur blandit, massa ac dapibus pulvinar, sapien diam vestibulum justo, 
     sit amet tincidunt lacus nibh sed tellus. Nulla consectetur eros non enim vestibulum, ac interdum 
     eros hendrerit. Nullam aliquet nibh vitae. Amet tincidunt lacus nibh sed tellus. Nulla consectetur eros non enim vestibulum, ac interdum 
     eros hendrerit. Nullam aliquet nibh vitae lacinia iaculis. Praesent aliquet enim lorem, sit amet
      varius quam lobortis eu. Sed ex mauris, dignissim id massa ac, congue. `,
  ];
  return (
    <section className="flex flex-col justify-center items-center mt-10 lg:mt-20">
      <section className="max-w-xs md:max-w-xl lg:max-w-5xl flex flex-col gap-8 ">
        <h2 className="text-3xl lg:text-4xl">My Story</h2>
        <p className=" text-xl md:text-xl  lg:text-2xl">{aboutText}</p>

        <h3 className="text-3xl lg:text-4xl">Why Notary?</h3>
        <p className=" text-xl md:text-xl  lg:text-2xl">{whyNotary}</p>
        <AboutMePics />
      </section>
    </section>
  );
}
