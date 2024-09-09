import { useContext } from "react";
import loginPhoto from "../../../src/assets/Login-page-photo/authentication2 1.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import UseAxiosPublic from "../../hooks/UseAxiosPublic";

const Login = () => {

  const axiosPublic = UseAxiosPublic();


  const {loginUser, googleLogin, setUser} = useContext(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Login Fail!!!!!",
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  const handleGoogleLogin = () => {
    console.log('this is googleLogin btn', handleGoogleLogin);
    googleLogin()
    .then(result =>{
      setUser(result.user);

      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data);
        Navigate('/');
      })

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Google Login Successfully!",
        showConfirmButton: false,
        timer: 1500
      });
      Navigate(from, { replace: true });
    })
    .catch(error => {
     console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Google Login Fail!",
        showConfirmButton: false,
        timer: 1500
      });
    })
  };

  return (
    <div className="border-2 border-orange-300 rounded-xl mt-36">
      <div className="w-full flex justify-center items-center z-0 p-4 gap-10 flex-col lg:flex-row  shadow  mx-auto  dark:bg-gray-50 dark:text-gray-800">
        <div className="">
          <img
            src={loginPhoto}
            className=""
            alt=""
          />
        </div>

        <div className="w-full max-w-md p-4 rounded-md sm:p-8 shadow border dark:bg-gray-50 dark:text-gray-800">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Login to your account
          </h2>
          <p className="text-sm text-center dark:text-gray-600">
            Dont have account?
            <Link to="/register">
              <a
                href="#"
                rel="noopener noreferrer"
                className="focus:underline hover:underline text-orange-500"
              >
                Sign up here
              </a>
            </Link>
          </p>
          <div className="my-6 space-y-4">
            <button
              onClick={handleGoogleLogin}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="please enter your password"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 "
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
