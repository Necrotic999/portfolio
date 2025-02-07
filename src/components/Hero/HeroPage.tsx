import ImageHeroPage from "./ImageHeroPage";

const Hero = () => {
  return (
    <section className="w-full flex gap-10 justify-center items-center relative mb-3">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white from-[-100px] to-red-700 w-[500px]">
        Creating a creative and modern web-sites
      </h1>
      <ImageHeroPage />
    </section>
  );
};

export default Hero;
