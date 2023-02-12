interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className=" mb-8 text-center text-5xl font-bold text-white">
          {title}
        </h1>
        <p className="mb-12 text-center text-xl text-white md:text-2xl">
          {subtitle}
        </p>
        <button className="rounded-full bg-red-500 py-3 px-6 text-lg text-white hover:bg-red-600">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Hero;
