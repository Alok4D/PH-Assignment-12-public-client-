// import { useContext, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { Helmet } from "react-helmet-async";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import registerPhoto from "../../../src/assets/Login-page-photo/authentication2 1.jpg";
// import UseAxiosPublic from "../../hooks/UseAxiosPublic";

// const Register = () => {

//     const axiosPublic = UseAxiosPublic();

//     const {registerUser, setUser, updateUserProfile} = useContext(AuthContext);
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

//     const navigate = useNavigate();

//     const handleRegister = (e) => {
//         e.preventDefault();
//         const name = e.target.name.value;
//         const photo = e.target.photo.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         const confirmPassword = e.target.confirmPassword.value;

//         if(password.length < 6){
//             setError("Password should be at least must be 6 characters")
//             return;
//         }
//         else if(!/[A-Z]/.test(password)){
//             setError('password must contain at least 1 upper case character!')
//             return;
//         }
//         else if(!/[a-z]/.test(password)){
//             setError('password must contain at least 1 lower character!')
//             return;
//         }
//         else if(password !== confirmPassword){
//             setError("Password didn't match")
//             return
//         }

//         setError('');
//         // console.log(name, photo, email, password, confirmPassword);

//         registerUser(email, password, name, photo)
//         .then(result => {
//             updateUserProfile(name, photo)
//             .then( () => {
//                 // console.log('User Profile info updated');
//                 // create user entry in the database
//                 const userInfo = {
//                     name : name,
//                     email: email,
//                     role : 'user',
//                     status: 'verified'
//                 }
//                 axiosPublic.post('/users', userInfo)
//                 .then(res => {
//                     if(res.data.insertedId){
//                         // console.log('user added to the database!');
//                         Swal.fire({
//                             position: "top-end",
//                             icon: "success",
//                             title: "User Create Successfully!",
//                             showConfirmButton: false,
//                             timer: 1500
//                           });
//                           setUser(result.user);
//                           navigate('/');
//                           // e.target.reset();
//                     }
//                 })

//             })

//         })
//         .catch(error => {
//             console.error(error);
//             Swal.fire({
//                 position: "top-end",
//                 icon: "error",
//                 title: "Already account created!",
//                 showConfirmButton: false,
//                 timer: 1500
//               });
//         })
//         // form.reset();
//     }

//     return (
//         <div className="w-full flex justify-center items-center z-0 p-4 gap-10 flex-col lg:flex-row  shadow rounded-xl mt-24 border-2 border-orange-400">
//         <Helmet><title>Create a an Account</title></Helmet>
//             {/* register form  */}
//             <div className="w-full max-w-lg p-4 rounded-md sm:p-8 shadow border dark:bg-gray-50">
//                 <h1 className="font-extrabold lg:text-4xl pb-4 flex justify-center items-center">Register Now!</h1>

//             <form onSubmit={handleRegister} className="space-y-3 my-6">

//            <div>
//            <p>Name</p>
//             <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full " required/>
//            </div>
//            <div>
//            <p>Photo URL</p>
//             <input name='photo' type="text" placeholder="Type here" className="input input-bordered w-full " required/>
//            </div>
//            <div>
//            <p>Email</p>
//             <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full " required/>
//            </div>
//            <div>
//            <p>Password</p>
//           <div className="relative">
//           <input name='password' type={ showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full " required/>
//             <span className="absolute top-4 right-3" onClick={ () => setShowPassword(!showPassword)}>
//                 {
//                     showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
//                 }
//             </span>
//           </div>

//            </div>
//            <div>
//            <p>Confirm Password</p>
//            <div className="relative">
//           <input name='confirmPassword' type={ showPasswordConfirm ? "text" : "password"} placeholder="Confirm your password" className="input input-bordered w-full " required/>
//             <span className="absolute top-4 right-3" onClick={ () => setShowPasswordConfirm(!showPassword)}>
//                 {
//                     showPasswordConfirm ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
//                 }
//             </span>
//           </div>
//            </div>

//             {
//                 error && <small className="text-red-600">{error}</small>
//             }

//            <button type="submit" className="btn bg-[#F60] w-full">Register</button>

//             </form>

//                 <p className="mb-2 mt-3 text-center">Already have an account?<Link to="/login" className="underline font-semibold">Login</Link></p>

//              </div>
//              <div className="">
//           <img
//             src={registerPhoto}
//             className=" "
//             alt=""
//           />
//         </div>
//     </div>
//     );
// };

// export default Register;

import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import registerPhoto from "../../../src/assets/Login-page-photo/authentication2 1.jpg";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";

const Register = () => {
  const axiosPublic = UseAxiosPublic();
  const { registerUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least 1 uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least 1 lowercase letter");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    registerUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo).then(() => {
          const userInfo = {
            name,
            email,
            role: "user",
            status: "verified",
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account created successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              setUser(result.user);
              navigate("/");
            }
          });
        });
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "This email is already registered!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-10 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl shadow-lg">
      <Helmet>
        <title>Register Page</title>
      </Helmet>

      {/* Image Section */}
      <div className="hidden lg:flex w-1/2 justify-center">
        <img
          src={registerPhoto}
          alt="Register Illustration"
          className="w-4/5 rounded-xl shadow-md"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-md">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-4">
          Create an Account
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Join <span className="font-semibold text-orange-500"></span> and
          explore fresh delights
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Profile photo link"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                required
              />
              <span
                className="absolute top-3 right-4 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                name="confirmPassword"
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                required
              />
              <span
                className="absolute top-3 right-4 cursor-pointer text-gray-500"
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
              >
                {showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
