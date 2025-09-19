import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactFrom = () => {
  return (
    <section className="bg-white py-12 px-5 md:px-20">
      <div className="max-w-5xl mx-auto bg-white  rounded-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">
        {/* Left Info as Cards */}
        <div className="w-full md:w-1/3 space-y-4 p-6 shadow-md">
          {/* Card 1 - Address */}
          <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-3  items-center space-x-4">
            <FaMapMarkerAlt className="text-green-600 mt-1" />
            <p className="text-sm text-center text-gray-700">
              2716 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>

          {/* Card 2 - Email */}
          <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-3  items-center space-x-4">
            <FaEnvelope className="text-green-600 mt-1" />
            <div className="text-sm text-center text-gray-700">
              <p>Proxy@gmail.com</p>
              <p>help.proxy@gmail.com</p>
            </div>
          </div>

          {/* Card 3 - Phone */}
          <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-3  items-center space-x-4">
            <FaPhoneAlt className="text-green-600 mt-1" />
            <div className="text-sm text-center text-gray-700">
              <p>(210) 555-0114</p>
              <p>(414) 333-0487</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-2/3 space-y-4 shadow-md p-6">
          <h3 className="text-lg font-bold">Just Say Hello!</h3>
          <p className="text-sm text-gray-600 mb-4">
            Do you fancy reaching me to hire or you want to get started with
            your project and you need my help? Feel free to contact me.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Template Cookie"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-green-500"
            />
            <input
              type="email"
              placeholder="zakirsabbir@gmail.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-green-500"
            />
          </div>

          <textarea
            rows="3"
            placeholder="Hello!"
            className="w-full border border-green-500 rounded-md px-4 py-2 text-sm focus:outline-none"
          ></textarea>

          <input
            type="text"
            placeholder="Subjects"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-green-500"
          />

          <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700 transition">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactFrom;
