import { Helmet } from "react-helmet-async";
import { FaBookmark, FaCalendarAlt, FaHome, FaShoppingCart,  FaUsers, FaUtensilSpoon, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../hooks/UseCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
    const [cart] = UseCart();
    console.log(cart);

    //TODO;

    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
        
        <div>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#d1a054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">

                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>ADMIN HOME</NavLink></li>
                                <li><NavLink to="/dashboard/additem"><FaUtensilSpoon></FaUtensilSpoon>ADD An ITEMS</NavLink></li>
                                <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet>Manage items</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaBookmark></FaBookmark>Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            </> :
                                <>
                                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payent History</NavLink></li>
                                    <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My cart<div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink>
                                    </li>
                                    <div className="divider"></div>
                                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                                    <li><NavLink to="/menu">Our Menu</NavLink></li>
                                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                                </>
                        }
                        
                    </ul>

                </div>
            </div>
            </div>
    );
};

export default DashBoard;