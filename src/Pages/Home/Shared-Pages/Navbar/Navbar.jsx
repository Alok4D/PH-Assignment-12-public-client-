import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import headerLogo from '../../../../assets/logo/logo-1.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li className=" rounded-xl ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className=" rounded-xl ">
        <NavLink to="/apartment">Apartment</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar w-[100%] m-auto lg:mt-[2.5rem] sm:mt-2 mb-1 z-10  border rounded-lg border-none ">
      <div className="navbar-start max-sm:w-[74%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] lg:p-2 shadow bg-base-100 rounded-box lg:w-52"
          >
            {links}
          </ul>
        </div>

        <div className="flex gap-4 justify-center items-center cursor-pointer">
          <img
            src={headerLogo}
            alt="industrial-logo-image"
            className="h-[3.125rem]"
          />
        </div>
      </div>

      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 justify-center items-center">
          {links}
        </ul>
      </div>
      <div className="lg:navbar-end lg:gap-4 gap-2 ">
        {user ? (
          <>
            <div
              className="dropdown dropdown-end tooltip"
              data-tip={user?.displayName}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w-10 rounded-full ">
                  <img
                    className="border rounded-full h-[2.8125rem]"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-300 rounded-box w-52"
              >
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              </ul>
              <div></div>
            </div>
            <button
              onClick={() => logOut()}
              className="btn bg-[#F60] text-[1rem]"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <a className="btn bg-[#F60] text-[1rem]">Login</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;













// import { Link, NavLink } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../../../Provider/AuthProvider";
// import headerLogo from "../../../../assets/logo/logo-1.png";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const links = (
//     <>
//       <li className="rounded-xl">
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li className="rounded-xl">
//         <NavLink to="/apartment">Apartment</NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar w-[100%] m-auto lg:mt-[2.5rem] sm:mt-2 mb-1 z-10 border rounded-lg border-none">
//       {/* Left side logo */}
//       <div className="navbar-start max-sm:w-[74%]">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>

//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] lg:p-2 shadow bg-base-100 rounded-box lg:w-52"
//           >
//             {links}
//           </ul>
//         </div>

//         <div className="flex gap-4 justify-center items-center cursor-pointer">
//           <img
//             src={headerLogo}
//             alt="industrial-logo-image"
//             className="h-[3.125rem]"
//           />
//         </div>
//       </div>

//       {/* Center menu */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-3 justify-center items-center">
//           {links}
//         </ul>
//       </div>

//       {/* Right side (Login / User profile) */}
//       <div className="lg:navbar-end lg:gap-4 gap-2">
//         {user ? (
//           <div className="dropdown dropdown-end">
//             {/* Profile picture */}
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle avatar"
//             >
//               <div className="w-10 rounded-full">
//                 <img
//                   className="border rounded-full h-[2.8125rem]"
//                   src={user?.photoURL}
//                   alt="user-profile"
//                 />
//               </div>
//             </div>

//             {/* Dropdown content */}
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-300 rounded-box w-52"
//             >
//               {/* User name শুধু টেক্সট আকারে দেখাবে */}
//               <li className="px-4 py-2 text-gray-800 font-semibold">
//                 {user?.displayName || "User"}
//               </li>

//               {/* Dashboard link */}
//               <li>
//                 <NavLink to="/dashboard">Dashboard</NavLink>
//               </li>

//               {/* Logout button */}
//               <li>
//                 <button
//                   onClick={logOut}
//                   className="btn btn-sm bg-[#F60] text-white"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         ) : (
//           <Link to="/login">
//             <button className="btn bg-[#F60] text-[1rem]">Login</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

