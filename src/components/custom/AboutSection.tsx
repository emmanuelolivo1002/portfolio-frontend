import Image from "next/image";

const AboutSection = ({
  data,
}: {
  readonly data: {
    readonly title: string;
    readonly description: string;
    // TODO: Add image maybe
  };
}) => {
  const { title, description } = data;

  return (
    <section id="about" className="">
      <div className="mx-auto flex flex-col items-center md:container lg:relative lg:items-end">
        <Image
          src="https://via.placeholder.com/2500x500"
          alt="about me"
          height={500}
          width={2500}
          className="w-full rounded-t-xl lg:absolute lg:-top-14 lg:left-0 lg:z-0 lg:w-full lg:rounded-b-xl"
        />

        <div className="rounded-xl bg-secondary bg-gradient-to-br from-secondary to-primary/10 p-6 text-secondary-foreground md:max-w-prose lg:z-10 lg:rounded-xl lg:p-10">
          <h2 className="mb-4 text-center text-5xl text-primary lg:text-left">
            {title}
          </h2>
          <p className="lg:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
