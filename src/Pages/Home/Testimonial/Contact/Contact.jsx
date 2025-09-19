import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import contact1 from "../../../../assets/contact/Vector (1).png";
import contact2 from "../../../../assets/contact/mango-1.png";
import contact3 from "../../../../assets/contact/Group.png";
import contact4 from "../../../../assets/contact/food.png";
import contact5 from "../../../../assets/contact/bookoff-corporation-logo.png";
import contact6 from "../../../../assets/contact/Group (1).png";


const Contact = () => {
  return (
    <div className="w-full py-12 bg-[#FFFFFF]">
      {/* Logo Section */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12 opacity-80 text-gray-400">
        {[contact1, contact2, contact3, contact4, contact5, contact6].map(
          (logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 p-2 rounded "
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className=" cursor-pointer transition duration-300  hover:scale-105"
              />
              {index !== 5 && (
                <span className="text-2xl font-light text-gray-300">|</span>
              )}
            </div>
          )
        )}
      </div>
      {/* Contact Info Section */}
      <div className="container mx-auto lg:px-0 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Location Card */}
        <div className="border border-green-100 rounded-lg p-6 shadow-sm flex flex-col items-center bg-gray-50 transition duration-300 hover:shadow-lg hover:border-green-500 hover:scale-105">
          <FaMapMarkerAlt className="text-3xl text-green-500 mb-3" />
          <p className="text-xs uppercase font-bold text-gray-700 mb-2">
            Our Location
          </p>
          <address className="text-sm text-gray-600 not-italic leading-relaxed">
            1901 Thornridge Cir.
            <br />
            Shiloh, Washington DC 20200,
            <br />
            United States
          </address>
        </div>

        {/* Phone Card */}
        <div className="border border-green-100 rounded-lg p-6 shadow-sm flex flex-col items-center bg-gray-50 transition duration-300 hover:shadow-lg hover:border-green-500 hover:scale-105">
          <FaPhone className="text-3xl text-green-500 mb-3" />
          <p className="text-xs uppercase font-bold text-gray-700 mb-2">
            Call us 24/7
          </p>
          <p className="text-lg font-semibold text-green-600">(303) 555-0105</p>
        </div>

        {/* Newsletter Card */}
        <div className="border border-green-100 rounded-lg p-6 shadow-sm bg-gray-50 transition duration-300 hover:shadow-lg hover:border-green-500 hover:scale-105">
          <div className="flex flex-col items-center mb-4">
            <FaEnvelope className="text-3xl text-green-500 mb-3" />
            <p className="text-xs uppercase font-bold text-gray-700">
              Subscribe Newsletter
            </p>
          </div>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-grow px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
            <button
              type="submit"
              className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
