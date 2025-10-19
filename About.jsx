import aboutImg from "../assets/about.png";

const About = () => {
    return (
       <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-col-1 md:grid-cols-2 gap-10 items-center">

            <div>
                <img
                  src={aboutImg}
                  alt="About TravelYoung"
                  className="rounded-2xl shadow-lg"
                />
            </div>

            <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    About <span className="text-blue-600">TravelYoung</span>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                   TravelYoung is your trusted travel consultancy dedicated to making
                   your journeys smooth, memorable, and inspiring. We bring decades
                   of experience in crafting personalized tours, from romantic getaways
                   to adventurous expeditions across the globe.
                </p>
               <p className="text-gray-600 mb-4 leading-relaxed">
              Our mission is simple to help travelers explore the world without
              stress. From booking to boarding, we take care of every detail so
              you can focus on creating beautiful memories.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're traveling solo, with family, or for business, we tailor
              every trip to fit your dreams. With TravelYoung, every journey feels
              like home no matter where you go.
            </p>
            </div>
        </div>
       </section>

    );
};


export default About;