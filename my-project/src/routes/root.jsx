import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function Root() {
    return (
        <div className="w-full h-2">
            <nav className="bg-black">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between px-10 py-8 text-3xl">
                        <NavLink
                            to={`/HomePage`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Airbnb
                        </NavLink>
                        <button
                            className="text-white focus:outline-none focus:text-white lg:hidden"
                            type="button"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="heroicon-ui"
                                    d="M20 12H4M20 6H4M20 18H4"
                                ></path>
                            </svg>
                        </button>
                        <div className=" flex items-center">
                            <div className="mr-10">
                                <Link to={"/Posts"} className="text-white text-2xl mr-10">
                                    Posts
                                </Link>
                                <Link to={"/Profile"} className="text-white text-2xl mr-10">
                                    Profile
                                </Link>
                                <Link to={"/Logout"} className="text-white text-2xl">
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}