import { useRef, useEffect, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// import JennyWilson from "../../../../../assets/sabbirassets/about/Jenny Wilson.png";
// import JaneCooper from "../../../../../assets/sabbirassets/about/Jane Cooper.png";
// import CodyFisher from "../../../../../assets/sabbirassets/about/Cody Fisher.png";

const testimonials = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg/250px-BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg",
    name: "Jenny Wilson",
    role: "Marketing Manager",
    text: "This platform has transformed the way we handle customer feedback. The UI is intuitive, and our response time has improved significantly.",
  },
  {
    img:"https://upload.wikimedia.org/wikipedia/commons/8/88/Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg",
    name: "Jane Cooper",
    role: "E-commerce Seller",
    text: "This platform revolutionized our feedback process with its intuitive design, allowing us to reply to customers faster and with more accuracy.",
  },
  {
    img: "https://static01.nyt.com/images/2025/01/21/multimedia/GATES-1-fqhp/GATES-1-fqhp-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    name: "Cody Fisher",
    role: "Product Designer",
    text: "The system has simplified our workflow by offering a smooth interface, helping our team respond to clients faster and more effectively.",
  },
  {
    img: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    name: "Amelia Hart",
    role: "Freelance Developer",
    text: "Using this platform, we now manage customer feedback with greater ease, and our overall service response time has improved drastically.",
  },
  {
    img: "https://i.scdn.co/image/ab67616d0000b273db57a48b60815f3a03a7414b",
    name: "Liam Johnson",
    role: "Startup Founder",
    text: "This tool provided us with the structure we needed to organize feedback better, ensuring customer issues are resolved much more quickly.",
  },
  {
    img: "https://i.scdn.co/image/ab67616d0000b273db57a48b60815f3a03a7414b",
    name: "Sophia Lee",
    role: "UI/UX Expert",
    text: "We’ve experienced a noticeable improvement in client communication since adopting this solution, which has made our support team efficient.",
  },
  {
    img: "https://i.scdn.co/image/ab67616d0000b273db57a48b60815f3a03a7414b",
    name: "Noah Martinez",
    role: "Content Creator",
    text: "The platform’s interface feels simple yet powerful, allowing our staff to work faster, manage issues, and deliver great customer service.",
  },
];


const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false); // Ensure refs are set

  useEffect(() => {
    setIsReady(true); // When refs are set, re-render to apply Swiper navigation
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-[#20B5261A] py-12 lg:px-0 px-2">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-left">
            <p className="text-green-500 text-xs uppercase italic tracking-widest mb-1">Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Customer Says</h2>
          </div>
          <div className="flex gap-3">
            <button
              ref={prevRef}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
            >
              ←
            </button>
            <button
              ref={nextRef}
             className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 hover:text-white transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Swiper Section */}
        {isReady && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
                  <FaQuoteLeft className="text-green-400 text-3xl mb-4" />
                  <p className="text-gray-600 mb-10 leading-relaxed text-sm">{item.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-500 text-xs">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Testimonial;

