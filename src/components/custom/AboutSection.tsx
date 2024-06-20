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
      <div className="container relative mx-auto flex lg:justify-end">
        <Image
          src="https://via.placeholder.com/2500x500"
          alt="about me"
          height={500}
          width={2500}
          className="absolute -top-14 left-0 z-0 h-full rounded-xl"
        />

        <div className="z-10 max-w-prose rounded-lg bg-secondary bg-gradient-to-br from-secondary to-primary/10 p-10 text-secondary-foreground">
          <h2 className="mb-4 text-4xl font-bold text-primary">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
