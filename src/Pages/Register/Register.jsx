import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
                 <div  className="w-80 md:w-96 lg:w-[500px] mx-auto mt-8 border rounded-xl bg-white flex items-center relative overflow-hidden shadow-xl mb-8"  >
        <Helmet><title>Create a an Account</title></Helmet>
            {/* register form  */}
            <div className={`p-8 w-full duration-500` }>
                <h1 className="font-extrabold lg:text-4xl pb-4 flex justify-center items-center">Register Now!</h1>

            <form onSubmit={handleRegister} className="space-y-3">

           <div>
           <p>Name</p>
            <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full " required/>
           </div>
           <div>
           <p>Photo URL</p>
            <input name='photo' type="text" placeholder="Type here" className="input input-bordered w-full " required/>
           </div>
           <div>
           <p>Email</p>
            <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full " required/>
           </div>
           <div>
           <p>Password</p>
          <div className="relative">
          <input name='password' type={ showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full " required/>
            <span className="absolute top-4 right-3" onClick={ () => setShowPassword(!showPassword)}>
                {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </span>
          </div>
            
           </div>
           <div>
           <p>Confirm Password</p>
           <div className="relative">
          <input name='confirmPassword' type={ showPasswordConfirm ? "text" : "password"} placeholder="Confirm your password" className="input input-bordered w-full " required/>
            <span className="absolute top-4 right-3" onClick={ () => setShowPasswordConfirm(!showPassword)}>
                {
                    showPasswordConfirm ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </span>
          </div>
           </div>

            {
                error && <small className="text-red-600">{error}</small>
            }

           <button type="submit" className="btn bg-[#F60] w-full">Register</button>
           <ToastContainer></ToastContainer>
            </form>



                <p className="mb-2 mt-3 text-center">Already have an account?<Link to="/login" className="underline font-semibold">Login</Link></p>

                
             </div>
    </div>
        </div>
    );
};

export default Register;