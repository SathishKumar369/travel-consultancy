import { packagesData } from "../data/packagesData";
const Packages = () =>{
    return(
        <section id="packages" className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
               <h2 className="text-4xl font-bold text-gray-800 mb-10">
                 Popular <span className="text-blue-600">Packages</span>
               </h2>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                 {packagesData.map((pkg) => (
                   <div 
                     key={pkg.id}
                     className="bg-gray-50 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
                   >      
                 <img 
                   src={pkg.image}
                   alt={pkg.title}
                   className="w-full h-48 object-cover"
                  />
                <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{pkg.days}</p>
                    <p className="text-blue-600 font-bold mb-4">{pkg.price}</p>
                    <a
                     href="#contact"
                     className="bg-orange-500 hover:bg-orange-600 !text-white px-4 py-2 rounded-full text-sm transition"
                     >
                        Book Now
                     </a>
                    </div>
                   </div>
                 ))}
               </div>
            </div>
        </section>
  );
};

export default Packages;