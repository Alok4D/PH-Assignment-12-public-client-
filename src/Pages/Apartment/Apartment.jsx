import { useEffect, useState } from "react";
import ApartmentData from "./ApartmentData";
import { Helmet } from "react-helmet-async";

const Apartment = () => {
  const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apartmentsPerPage = 6;

  useEffect(() => {
    fetch("https://building-management-server-sigma.vercel.app/apartmentData")
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * apartmentsPerPage;
  const indexOfFirst = indexOfLast - apartmentsPerPage;
  const currentApartments = apartments.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(apartments.length / apartmentsPerPage);

  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  // Responsive page numbers
  const getVisiblePages = () => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (window.innerWidth < 640) {
      // mobile: show 1 current + prev/next
      return [currentPage];
    } else if (window.innerWidth < 1024) {
      // tablet: show 3 pages around current
      const start = Math.max(currentPage - 1, 1);
      const end = Math.min(start + 2, totalPages);
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    } else {
      // desktop: show all pages
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  };

  const visiblePages = getVisiblePages();

  return (
    <div>
      <Helmet>
        <title>Apartment Page</title>
      </Helmet>

      <div className="mt-10 mb-10 w-full  sm:h-auto lg:h-[310px] bg-cover bg-[url('https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?cs=srgb&dl=pexels-pixabay-258160.jpg&fm=jpg')]">
        <h2 className="flex justify-center items-center text-center sm:text-[15px] lg:text-[60px] leading-[60px] font-bold text-white sm:pt-0 lg:pt-28">
          Our apartments are available
        </h2>
      </div>

      {/* Apartment Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6">
        {currentApartments.map((data) => (
          <ApartmentData key={data._id} data={data} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-8 mb-8 flex-wrap gap-2 items-center">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg font-medium ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          Prev
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-lg font-medium ${
              currentPage === page
                ? "bg-indigo-600 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg font-medium ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Apartment;
