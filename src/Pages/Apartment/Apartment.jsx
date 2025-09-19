import { useEffect, useState } from "react";
import ApartmentData from "./ApartmentData";
import { Helmet } from "react-helmet-async";

const Apartment = () => {
  const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apartmentsPerPage = 12;

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

  // Responsive page numbers (tailwind hidden/show)
  const getVisiblePages = () => {
    // Always show first & last
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="container mx-auto px-4">
      <Helmet>
        <title>Apartment Page</title>
      </Helmet>

      {/* Banner Section */}
      <div className="mt-10 mb-10 w-full rounded-xl overflow-hidden bg-cover bg-center h-[180px] sm:h-[150px] lg:h-[220px] bg-[url('https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?cs=srgb&dl=pexels-pixabay-258160.jpg&fm=jpg')]">
        <h2 className="flex justify-center items-center text-center h-full text-[20px] sm:text-[35px] lg:text-[60px] leading-tight font-bold text-white bg-black/40">
          Our apartments are available
        </h2>
      </div>

      {/* Apartment Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentApartments.map((data) => (
          <ApartmentData key={data._id} data={data} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 mb-8 flex-wrap gap-2 items-center">
        {/* Prev button */}
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          Prev
        </button>

        {/* Page numbers */}
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`hidden sm:inline-block px-4 py-2 rounded-lg font-medium transition ${
              currentPage === page
                ? "bg-indigo-600 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Mobile current page only */}
        <span className="sm:hidden font-medium">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next button */}
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg font-medium transition ${
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
