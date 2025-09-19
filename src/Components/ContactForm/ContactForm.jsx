import ApartmentsMaps from "../../Pages/Home/Apartments-location/ApartmentsMaps";

const ContactForm = () => {
  return (
    <div>
        <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between bg-[#0A0D17] rounded-2xl shadow-lg overflow-hidden mt-8 mb-8">
      
      {/* Form Area */}
      <form className="w-full lg:w-1/2 p-8 md:p-12">
        <div className="text-white mb-8">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Let’s Connect Constellations ✨
          </h1>
          <p className="text-gray-400 mt-2">
            Reach out and let the magic of collaboration illuminate our skies.
          </p>
        </div>

        {/* Name + Email */}
        <div className="flex flex-col sm:flex-row gap-5 mb-5">
          <input
            type="text"
            placeholder="Your name"
            className="flex-1 border border-[#383844] rounded-md outline-none px-4 py-3 bg-[#22222f] text-gray-300 focus:border-[#763AF5] focus:ring-1 focus:ring-[#763AF5] transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 border border-[#383844] rounded-md outline-none px-4 py-3 bg-[#22222f] text-gray-300 focus:border-[#763AF5] focus:ring-1 focus:ring-[#763AF5] transition-all duration-300"
          />
        </div>

        {/* Message */}
        <div className="mb-5">
          <textarea
            placeholder="Write your message..."
            className="min-h-[150px] w-full border border-[#383844] rounded-md outline-none px-4 py-3 bg-[#22222f] text-gray-300 focus:border-[#763AF5] focus:ring-1 focus:ring-[#763AF5] transition-all duration-300 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-[#763AF5] to-[#A604F2] text-white font-medium rounded-md text-lg shadow-md hover:opacity-90 transition duration-300"
        >
          Send it to the moon 🚀
        </button>
      </form>

      {/* Image Area */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://i.ibb.co/h7rjVJS/Image.png"
          alt="contact"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
    <ApartmentsMaps/>
    </div>
  
  );
};

export default ContactForm;
