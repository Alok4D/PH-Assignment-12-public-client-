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
    
    const {registerUser, setUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
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

        if(password.length < 6){
            setError("Password should be at least must be 6 characters")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setError('password must contain at least 1 upper case character!')
            return;
        }
        else if(!/[a-z]/.test(password)){
            setError('password must contain at least 1 lower character!')
            return;
        }
        else if(password !== confirmPassword){
            setError("Password didn't match")
            return
        }
     
        setError('');
        // console.log(name, photo, email, password, confirmPassword);

        registerUser(email, password, name, photo)
        .then(result => {
            updateUserProfile(name, photo)
            .then( () => {
                // console.log('User Profile info updated');
                // create user entry in the database 
                const userInfo = {
                    name : name,
                    email: email,
                    role : 'user',
                    status: 'verified'
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        // console.log('user added to the database!');
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Create Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          setUser(result.user);
                          navigate('/');
                          // e.target.reset();
                    }
                })

            })

         
          
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Already account created!",
                showConfirmButton: false,
                timer: 1500
              });
        })
        // form.reset();
    }
    
    return (
        <div className="w-full flex justify-center items-center z-0 p-4 gap-10 flex-col lg:flex-row  shadow rounded-xl mt-24 border-2 border-orange-400">
        <Helmet><title>Create a an Account</title></Helmet>
            {/* register form  */}
            <div className="w-full max-w-lg p-4 rounded-md sm:p-8 shadow border dark:bg-gray-50">
                <h1 className="font-extrabold lg:text-4xl pb-4 flex justify-center items-center">Register Now!</h1>

            <form onSubmit={handleRegister} className="space-y-3 my-6">

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
         
            </form>



                <p className="mb-2 mt-3 text-center">Already have an account?<Link to="/login" className="underline font-semibold">Login</Link></p>

                
             </div>
             <div className="">
          <img
            src={registerPhoto}
            className=" "
            alt=""
          />
        </div>
    </div>
    );
};

export default Register;