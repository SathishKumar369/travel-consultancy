import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="w-full py-20 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Get in <span className="text-blue-600">Touch</span>
            </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shaddow-md hover:shadow-xl transition duration-300">
             <h3 className="text-2xl font-semibold mb-6 text-blue-700">Contact Info</h3>
             <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-4">
                    <FaMapMarkedAlt className="text-blue-600 text-xl" />
                    <p>123 Travel Street, Chennai, India</p>
                </div>
                <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-blue-600 text-xl" />
                    <p>+91 99399 43521</p>
                </div>
                <div className="flex items-center gap-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                    <p>info@travelYoung.com</p>
                </div>
             </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
             <h3 className="text-2xl font-semibold mb-6 text-blue-700">Send Message</h3>
             <form className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                       type="text"
                       placeholder="Enter your name"
                       className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                       />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                     type="email"
                     placeholder="Enter your email"
                     className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
               </div>

               <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                     placeholder="Write your message..."
                     rows="4"
                     className="w-full border border-gray-300 rounded-lg p-3 focu:ring-blue-400 otuline-none"
                     ></textarea>
               </div>
               
               <button type="submit"
                  className="!bg-blue-600 hover:!bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 w-full">
                    Submit
                </button>  

             </form>
            </div>
          </div>
          </div>
        </section>
    );
};

export default Contact;