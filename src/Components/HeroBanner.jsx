import { assets } from "../assets/assets";

const HeroBanner = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-center bg-cover"
       style={{ backgroundImage: `url(${assets.hero_banner})` }}
    >
      {/* Warm spotlight overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 backdrop-blur-sm" />

      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight tracking-wide">
          <span className="text-[#e0c188]">MovieMania</span>
          <span className="block text-gray-100 font-light text-2xl mt-4">
            Your curated cinematic escape.
          </span>
        </h1>
        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
          Discover masterpieces. Revisit classics. And find the stories that stay with you.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
