export default function About() {
  const aboutText = [
    `We are abitur pulvinar rutrum rhoncus. Donec eget risus sollicitudin, porttitor mi et, laoreet ante.
     Morbi ut orci nibh. Curabitur blandit, massa ac dapibus pulvinar, sapien diam vestibulum justo, 
     sit amet tincidunt lacus nibh sed tellus. Nulla consectetur eros non enim vestibulum, ac interdum 
     eros hendrerit. Nullam aliquet nibh vitae lacinia iaculis. Praesent aliquet enim lorem, sit amet
      varius quam lobortis eu. Sed ex mauris, dignissim id massa ac, congue blandit nunc
     Morbi id nulla dapibus, gravida ante id, volutpat urna. Nam et elementum orci, non viverra diam`,
  ];
  return (
    <section className="flex flex-col justify-center items-center mt-20">
      <h2 className="text-3xl lg:text-4xl p-4 flex mr-auto ml-16 lg:ml-52">
        My Story
      </h2>
      <section className="max-w-sm md:max-w-xl lg:max-w-5xl flex flex-col gap-8 lg:flex-row">
        <p className=" text-xl md:text-xl  lg:text-2xl">{aboutText}</p>
        <img
          src={" /images/placeholder.jpg"}
          className="max-w-sm md:max-w-lg lg:max-w-lg"
          alt="Image of Gina Vigil"
        />
      </section>
    </section>
  );
}
