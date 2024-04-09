import { NavLink } from "react-router-dom";


const Navbar = () => {
    const Navlink = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-white bg-orange-600 font-medium"
                : isPending
                    ? "font-semibold"
                    : "bg-white"
        } to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-white bg-orange-600 font-medium"
                : isPending
                    ? "font-semibold"
                    : "bg-white"
        } to="/update-profile">Update Profile</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-white bg-orange-600 font-medium"
                : isPending
                    ? "font-semibold"
                    : ""
        } to="/contact">contact</NavLink></li>
    </>
    return (
        <div className="shadow-xl">
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
                    <a className="btn btn-ghost text-4xl oswald p-0">Biz<span className="text-orange-600 p-0">Space</span>Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu menu-horizontal px-1 space-x-4 text-xl roboto">
                        {Navlink}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <div className="avatar mr-3">
                        <div className="w-12 rounded-full ring ring-orange-600 ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <button className="btn bg-white border border-orange-600 text-orange-600 font-bold text-xl oswald hover:bg-orange-600 hover:text-white hover:transition-colors">Login</button>
                    <button className="btn bg-white border border-orange-600 text-orange-600 font-bold text-xl oswald hover:bg-orange-600 hover:text-white hover:transition-colors">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;   