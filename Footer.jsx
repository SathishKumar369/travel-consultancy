import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () =>{
    return (
        <footer className="w-full bg-blue-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols gap-8">

             {/* Brand Info */}
             <div>
               <h2 className="text-2xl font-bold mb-4">TravelYoung</h2>
               <p className="text-gray-300">
                Your trusted partner for personalized travel experiences, unforgettable adventure, and stress-free journeys across the world.
                </p> 
                </div>  

             {/* Quick Links */}
             <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                    <li>
                        <a href="#home" className="hover:!text-orange-400 transition duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:!text-orange-400 transition duration-300">
                            Sevices
                        </a>
                    </li>
                     <li>
                        <a href="#packages" className="hover:!text-orange-400 transition duration-300">
                            Packages
                        </a>
                    </li>
                     <li>
                        <a href="#contact" className="hover:!text-orange-400 transition duration-300">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#Terms & Conditions" className="hover:!text-orange-400 transition duration-300">
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a href="#Privacy Policy" className="hover:!text-orange-400 transition duration-300">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
                </div>  

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                    <div className="flex space-x-5 text-2xl">
                        <a href="#" className="hover:!text-orange-400 transition duration-300">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:!text-orange-400 transition duration-300">
                           <FaInstagram />
                        </a>
                        <a href="#" className="hover:!text-orange-400 transition duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:!text-orange-400 transition duration-300">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>  
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-10 border-blue-700 pt-4 text-gray-400">
                        © {new Date().getFullYear()} TravelYoung. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;