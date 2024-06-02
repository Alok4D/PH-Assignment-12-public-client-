
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../../assets/logo/logo.png";


const Navbar = () => {
  

  const links = (
    <>
      <li className=" rounded-xl "><NavLink to="/">Home</NavLink></li>
      <li className=" rounded-xl "><NavLink to="/apartment">Apartment</NavLink></li>
    
    </>
  );

  return (
    <div className="navbar bg-base-100 mt-12 mb-8"> 
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
          <img src={navLogo} alt="industrial-logo-image" />
        </div>
      </div>

      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>
      <div className="lg:navbar-end lg:gap-4 gap-2 ">
        <>
          <div
            className="dropdown dropdown-end tooltip"
            data-tip=""
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className="w-10 rounded-full ">
                <img
                  className="border rounded-full h-[45px]"
                  src=""
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/myListFoods">My added food items</NavLink>
              </li>
              <li>
                <NavLink to="/foodAddItem">Add a food item</NavLink>
              </li>
              <li>
                <NavLink to="/orderedFood">My ordered food items</NavLink>
              </li>
            </ul>
            <div></div>
          </div>
           {/* <button onClick={() => logOut()} className="btn bg-[#F60] text-[16px]">Log Out</button> */}
           </>
       
          <Link to="/login">
            <a className="btn bg-[#F60] text-[16px]">Login</a>
          </Link>
     
      </div>
    </div>
  );
};

export default Navbar;
