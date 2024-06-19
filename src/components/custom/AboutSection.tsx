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
      <div className="container relative mx-auto flex">
        <Image
          src="https://via.placeholder.com/2000x2000"
          alt="about me"
          height={500}
          width={2500}
          className="h-full w-[85%] rounded-xl"
        />

        <div className="absolute right-0 top-1/3 max-w-prose rounded-lg bg-secondary bg-gradient-to-br from-secondary to-primary/10 p-10 text-secondary-foreground">
          <h2 className="mb-4 text-4xl font-bold text-primary">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
