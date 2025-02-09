import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/image/login.jpg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form"
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    
   
    const [showPassword, setShowPassword] = useState(false);
    const {createUserSignIn,googleLogin,githubLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    // use hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
     // handle social login
     const handleSocialLogin = socialProvider => {
        socialProvider()
        .then(result => {
            console.log(result.user);
            toast.success("User Login Successfully")
            navigate(location?.state ? location.state : "/")
        })
   }

    const onSubmit = (data) => {
        const { email, password } = data;
        // reset error
        createUserSignIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("User Login Successfully")
                // navigate
               navigate(location?.state ? location.state : "/")
               

            })
            .catch(error => {
                toast.error(error.message.split('(')[1].split(')')[0])
            })
      

    }
   
    
    return (
        <section className=" dark:text-gray-800  ">
            <Helmet>
                <title>Hub | Login</title>
            </Helmet>
            <div className="container px-2 flex flex-col justify-center lg:w-[60%] items-center mx-auto  lg:flex-row lg:justify-between">

                <div>
                    <div className="w-full max-w-lg p-10  space-y-3 rounded-xl dark:text-gray-800 bg-base-200">
                        <h1 className="text-3xl oswald font-bold text-center" data-aos="zoom-in"  data-aos-delay="1000" data-aos-duration="1000">Please Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                                <input type="email" name="email" id="email" placeholder="Write Your Email" className="w-full px-4 py-3 rounded-md border-gray-300 border dark:text-gray-800 focus:dark:border-orange-600" {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-500 roboto'>This field is required</span>}
                            </div>
                            <div className="space-y-1 text-sm relative">
                                <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-300  dark:text-gray-800 focus:dark:border-orange-600" {...register("password", { required: true })} />
                                {errors.password && <span className='text-red-500 roboto'>This field is required</span>}
                                <span onClick={() => setShowPassword(!showPassword)} className='absolute top-8 right-4 text-orange-600 text-xl'>
                                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                                </span>
                            </div>
                            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-orange-600 font-medium oswald">Login</button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                            <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={() => handleSocialLogin(googleLogin)} aria-label="Log in with Google" className="px-8 py-2  border border-orange-600 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="text-orange-600 w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                            
                            <button onClick={() => handleSocialLogin(githubLogin)} aria-label="Log in with GitHub" className="px-8 py-2  border border-orange-600 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="text-orange-600 w-5 h-5 fill-current">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="text-xl text-center sm:px-6 dark:text-gray-600">Do not have an account?<br />
                            <Link to="/register" rel="noopener noreferrer" href="#" className="underline dark:text-orange-600">Sign up</Link>
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-end  lg:mt-0 lg:w-[70%]">
                    <img src={login} alt="" className="object-contain lg:w-[90%] " />
                </div>
                <ToastContainer />
            </div>
           
        </section>
    );
};

export default Login;

