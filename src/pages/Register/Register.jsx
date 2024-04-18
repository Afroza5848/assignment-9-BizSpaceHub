import { Link } from 'react-router-dom';
import registerImg from '../../assets/image/registerImg.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    //const [userError,setUserError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    //const navigate = useNavigate()

    //   useContext
    const { createUser,createUserUpdateProfile,setLoading } = useContext(AuthContext);
    // use hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const { email, password, name,photo } = data;
        console.log(email,password,);
        // reset error
        // console.log(userError);
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters or longer.')
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            toast.error("Your password should have at least one upperCase and one lowerCase characters")
            return;
        }
        

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                createUserUpdateProfile(name,photo) 
                    .then(()=> {
                        updateProfile(result.user, {
                            displayName: name, photoURL: photo
                        })
                        setLoading(true)
                })
                
                      
                

            })
            .catch(error => {

                toast.error(error.message.split('(')[1].split(')')[0])
            })
    }



    return (
        <div className='flex lg:flex-row flex-col container mx-auto rounded-xl'>
            <Helmet>
                <title>Hub | Register</title>
            </Helmet>
            <div className='bg-orange-600 lg:w-[50%] '>
                <img className='rounded-xl' src={registerImg} alt="" />
            </div>

            <div className="lg:w-[50%] w-full mx-auto p-10  space-y-3  dark:text-gray-800 border border-orange-600">
                <h1 className="text-3xl oswald font-bold text-center" data-aos="zoom-in"  data-aos-delay="1000" data-aos-duration="1000">Please Register Now!</h1>
                <p className='text-center text-xl roboto'>Nice to meet you! Enter your details to register.</p>
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                        <input type="text" name="name" id="name" placeholder="Write Your Name" className="w-full px-4 py-3 rounded-md border-gray-300 border dark:text-gray-800 focus:border-orange-600 " {...register("name", { required: true })} />
                        {errors.name && <span className='text-red-500 roboto'>This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input type="email" name="email" id="email" placeholder="Write Your Email" className="w-full px-4 py-3 rounded-md border-gray-300 border dark:text-gray-800 focus:dark:border-orange-600" {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-500 roboto'>This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photo" className="block dark:text-gray-600">Photo URL</label>
                        <input type="text" name="photo" id="photo" placeholder="Write Your Photo URL" className="w-full px-4 py-3 rounded-md border-gray-300 border dark:text-gray-800 focus:dark:border-orange-600" {...register("photo", { required: true })} />
                        {errors.photo && <span className='text-red-500 roboto'>This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm relative">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-300  dark:text-gray-800 focus:dark:border-orange-600 " {...register("password", { required: true })} />
                        {errors.password && <span className='text-red-500 roboto'>This field is required</span>}
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute top-8 right-4 text-orange-600 text-xl'>
                            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                        </span>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-orange-600 font-medium oswald">Register</button>
                </form>


                <p className="text-xl text-center sm:px-6 dark:text-gray-600">Already have an account?<br />
                    <Link to="/login" rel="noopener noreferrer" href="#" className="underline dark:text-orange-600">Login</Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;