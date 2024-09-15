import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { FcAbout, FcNews, FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import useGetRoles from "../../../hooks/UseGetRoles";
import { BsPaypal, BsPersonFillAdd } from "react-icons/bs";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { RiCoupon3Fill } from "react-icons/ri";
import UseAgreementCarts from "../../../hooks/UseAgreementCarts";

const Sidebar = () => {
  const [cart] = UseAgreementCarts();
  const {role} = useGetRoles();
  console.log(role);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block'
                src="https://i.ibb.co/4ZXzmq5/logo.png"
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <Link to="/">
                <img
                  // className='hidden md:block'
                  src="https://template-kit2.evonicmedia.com/layout76/wp-content/uploads/2024/05/logo-1.png"
                  alt="logo"
                  width="100"
                  height="100"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Dashboard */}
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaHome className="w-5 h-5" />

                <span className="mx-4 font-medium">Dashboard</span>
              </NavLink>

                {
                  role === "user" ? 
                  <>
                  
              {/* My Profile */}
              <NavLink
                to="myProfile"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
             
                <CgProfile className="w-5 h-5" />

                <span className="mx-4 font-medium">Profile</span>
              </NavLink>
              {/* My announcement */}
              <NavLink
                to="announcement"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
              
                <TfiAnnouncement className="w-5 h-5" />

                <span className="mx-4 font-medium">Announcement</span>
              </NavLink>
                  </>
                  : role === "Member" ? 
                  <>
                  {/* routes for member */}
                  <NavLink
                to="memberProfile"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <CgProfile className="w-5 h-5" />
                <span className="mx-4 font-medium">Profile</span>
                  </NavLink>

                  <NavLink
                to="payment"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
             <BsPaypal className="w-5 h-5" />
                <span className="mx-4 font-medium">Make payment</span>
                  </NavLink>
                  
                  <NavLink
                to="paymentHistory"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FcAbout className="w-5 h-5" />
                <span className="mx-4 font-medium">Payment History</span>
                  </NavLink>
                  <NavLink
                to="announcement"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
              
                <TfiAnnouncement className="w-5 h-5" />

                <span className="mx-4 font-medium">Announcement</span>
                 </NavLink>
                  {/* routes for member End */}
                  </>
                  : role === "Admin" ? 
                  <>
                  {/* routes for admin */}
                  <NavLink
                to="adminProfile"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
             
                <CgProfile className="w-5 h-5" />

                <span className="mx-4 font-medium">Profile</span>
                  </NavLink>
                  <NavLink
                to="manageMembers"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
             <BsPersonFillAdd className="w-5 h-5" />
              

                <span className="mx-4 font-medium">Manage Member</span>
                  </NavLink>
                  <NavLink
                to="makeAnnouncement"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
             
                <FcNews className="w-5 h-5" />

                <span className="mx-4 font-medium">Make Announcement</span>
                  </NavLink>
                  <NavLink
                to="agreementReq"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
             <VscGitPullRequestCreate className="w-5 h-5" />
               

                <span className="mx-4 font-medium">Agreement Request ({cart.length})</span>
                  </NavLink>
                  <NavLink
                to="manageCoupons"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
             <RiCoupon3Fill  className="w-5 h-5" />
               

                <span className="mx-4 font-medium">Manage Coupons</span>
                  </NavLink>
                  
                  </>
                  : null
                }
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
