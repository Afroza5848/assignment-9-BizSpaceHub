import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
    const { user, createUserUpdateProfile } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { name, photo } = data;
        createUserUpdateProfile(name, photo)

        toast.success("Update Profile Successfully");

    }

    return (
        <div className="flex flex-col justify-center w-1/2 mx-auto p-6 shadow-md rounded-xl sm:px-12 py-10 bg-base-200 dark:text-gray-800">
            <h2 className="text-4xl oswald py-3 text-center text-orange-600 font-medium mb-5">Update Your Profile</h2>

            <img src={user?.photoURL || "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square border-2 border-orange-600 " />


            <div className="space-y-4 text-center ">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>

                </div>

                <div className="flex items-center justify-center text-center  dark:text-gray-800">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="flex flex-col w-full  rounded dark:text-gray-800 mb-8">
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
    );
};

export default UpdateProfile;