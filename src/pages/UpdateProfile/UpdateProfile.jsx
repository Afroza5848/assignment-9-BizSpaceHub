import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user, setUser, createUserUpdateProfile } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {

        const { name, photo, } = data;
        createUserUpdateProfile(name, photo)
        setUser()
        toast.success("Update Profile Successfully");

    }

    return (
        <div className="container mx-auto px-2 flex lg:flex-row flex-col gap-8 justify-between mb-20">
            <Helmet>
                <title>Hub | Update Profile</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center text-center lg:w-[48%] rounded-2xl bg-base-200  dark:text-gray-800">
                <h2 className="text-4xl oswald py-3 text-center text-orange-600 font-medium mb-5"> Your Profile</h2>

                <img src={user?.photoURL || "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square border-2 border-orange-600 " />

                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl"><span className="text-orange-600">Name:</span> {user?.displayName}</h2>
                    <h2 className="text-xl font-semibold sm:text-2xl"><span className="text-orange-600">Email:</span>  {user?.email || 'Email Not Found'}</h2>
                    <h2 className="text-xl font-semibold sm:text-2xl"><span className="text-orange-600">Photo URL:</span>  {user?.photoURL || 'URL Not Found'}</h2>

                </div>

            </div>

            <div className="flex flex-col justify-center lg:w-[48%] w-full mx-auto p-6 shadow-md rounded-xl  py-10 bg-base-200 dark:text-gray-800">


                <h2 className="text-4xl oswald py-3 text-center text-orange-600 font-medium mb-5">Update Your Profile</h2>

                <div className="space-y-4 text-center ">

                    <div className="flex items-center justify-center text-center  dark:text-gray-800">
                        <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="flex flex-col w-full  rounded dark:text-gray-800 mb-8 ">
                            <label htmlFor="username" className="self-start text-xl font-semibold">Username </label>
                            <input id="name" type="text" name="name" className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-orange-600 focus:dark:ring-orange-600" {...register("name", { required: true })} />
                            {errors.name && <span className='text-red-500 roboto'>This field is required</span>}

                            <label htmlFor="photo" className="self-start mt-3 text-xl font-semibold">Photo URL</label>
                            <input id="photo" type="text" name="photo" className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-orange-600 focus:dark:ring-orange-600" {...register("photo", { required: true })} />
                            {errors.photo && <span className='text-red-500 roboto'>This field is required</span>}

                            <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-orange-600 dark:text-gray-50">Update Profile</button>



                        </form>


                    </div>
                    <div>
                        <Link to="/"><button className="btn bg-orange-600 text-white btn-lg">Go Back</button></Link>
                    </div>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateProfile;