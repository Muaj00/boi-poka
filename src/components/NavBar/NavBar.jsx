import { NavLink } from "react-router-dom";


const NavBar = () => {

    const link = <>

        <li ><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/BookList">Book List</NavLink></li>
        <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-outline btn-success lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className=" text-3xl font-bold"><span className="text-sky-800">Boi</span><span className="text-green-600">Poka</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-success">Buy Now</a>
            </div>
        </div>
    );
};

export default NavBar;