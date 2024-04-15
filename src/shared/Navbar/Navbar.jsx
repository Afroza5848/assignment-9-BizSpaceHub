import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const Navlink = <>
        <NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-white bg-orange-600 font-medium px-3 py-2 rounded-lg"
                : isPending
                    ? "font-semibold"
                    : "px-3 py-2"
        } to="/"><a>Home</a></NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-white bg-orange-600 font-medium px-3 py-2 rounded-lg"
                : isPending
                    ? "font-semibold"
                    : "px-3 py-2"
        } to="/update-profile"><a>Update Profile</a></NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-white bg-orange-600 font-medium px-3 py-2 rounded-lg"
                : isPending
                    ? "font-semibold"
                    : "px-3 py-2"
        } to="/contact"><a>contact</a></NavLink>
    </>
    return (
        <div className="">
            <div className="navbar bg-base-100 container mx-auto py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl oswald p-0">Biz<span className="text-orange-600">Space</span>Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu menu-horizontal px-1 space-x-4 text-xl roboto">
                        {Navlink}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    {
                        user &&
                        <div className="tooltip" data-tip={user?.displayName || 'User Name Not Found'}>
                            <div className="avatar mr-3">
                                <div className="w-12 rounded-full ring ring-orange-600 ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL || "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} />
                                </div>
                            </div>
                        </div>

                    }
                    {
                        user ?
                            <button onClick={() => logOut()} className="btn bg-white border border-orange-600 text-orange-600 font-bold text-xl oswald hover:bg-orange-600 hover:text-white hover:transition-colors">Logout</button>
                            :
                            <Link to="/login"><button className="btn bg-white border border-orange-600 text-orange-600 font-bold text-xl oswald hover:bg-orange-600 hover:text-white hover:transition-colors">Login</button></Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;   