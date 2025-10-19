import { FaStar } from "react-icons/fa";
import { testimonialsData } from "../data/testimonialsData";

const Testimonials = () => {

    return (
    <section id="testimonials" className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto pa-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonialsData.map((r) =>(
                <div
                  key={r.id}
                  className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
                >

                <img 
                   src={r.image}
                   alt={r.name}
                   className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                   />

                <h3 className="text-lg font-semibold mb-2">{r.name}</h3>
                <p className="text-gray-600 text-sm mb-4 italic">"{r.review}"</p>
                 <div className="flex justify-center text-yellow-400">
                    {[...Array(r.rating)].map((_, i) =>(
                        <FaStar key={i}/>
                    ))}
                    </div>       
                </div>    
                ))}
         </div>
        </div>
    </section>
    );
};

export default Testimonials;