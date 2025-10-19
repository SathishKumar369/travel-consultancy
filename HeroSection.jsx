import hero from '../assets/hero1.png';
const HeroSection = () => {
    return(
        <section
          id="home"
          className="relative h-[90vh] w-full flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})`,}}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative text-center !text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your trusted travel consultancy to explore the world's most beautiful destinations with comfort and care.
        </p>
        <a
         href="#packages"
         className="bg-orange-500 hover:bg-orange-600 !text-white px-6 py-3 rounded-full font-semibold transition duration-300" 
        >
            Explore Packages
        </a>
        </div>
      </section>
    );
};

export default HeroSection;