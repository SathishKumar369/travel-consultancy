import { FaPlane, FaHotel, FaPassport, FaGlobe } from "react-icons/fa";

const Services = () =>{
    const services =[
        {
            id: 1,
            icon: <FaPlane className="mx-auto my-auto text-4xl text-blue-600 mb-4" />,
            title: "Flight Bookings",
            desc: "Get the best deals on international and domestic flights with personalized assistance.",   
        },
        {
            id: 2,
            icon: <FaHotel className="mx-auto my-auto text-4xl text-orange-500 mb-4" />,
            title: "Hotel Reservations",
            desc: "Stay in comfort with our curated list of top-rated hotels worldwide.",
        },
        {
            id: 3,
            icon: <FaPassport className="mx-auto my-auto text-4xl text-green-600 mb-4" />,
            title: "Visa Assistance",
            desc: "Hassle-free visa processing with expert guidance and document support.", 
        },
        {
            id: 4,
            icon: <FaGlobe className="mx-auto my-auto text-4xl text-purple-600 mb-4" />,
            title: "Customized Tours",
            desc: "Design your dream trip with flexible itineraries tailored to your preference.",
        },
    ];

    return(
        <section id="services" className="w-full py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
               <h2 className="text-4xl font-bold text-gray-800 mb-10">
                Our <span className="text-blue-600">Services</span>
               </h2>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {services.map((service) => ( 
                    <div
                    key={service.id}
                    className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
                    >
                      {service.icon}
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
             </div>
            </div>
        </section>
    );
};

export default Services;