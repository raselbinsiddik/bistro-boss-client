import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import UseCart from "../../../hooks/UseCart";
import useAdmin from "../../../hooks/useAdmin";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = UseCart();

    const handleLogout = () => {
        logOut()
            .then(()=>{})
            .catch(error => console.log(error));

    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link></li>
        {/* <li><Link to="/dashboard/mycart">My Cart</Link></li> */}

        <Link to="/dashboard/mycart"><button className="btn gap-2">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length || 0 }</div>
        </button></Link>

        {
            user ? <>
                <li><span>{user?.displayName}</span></li>
                <li><span className="w-10 rounded-full">{user?.photoURL}</span></li>
                <li><button onClick={handleLogout} className="btn btn-ghost">Logout</button></li>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 max-w-screen-xl mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                       {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                  {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;