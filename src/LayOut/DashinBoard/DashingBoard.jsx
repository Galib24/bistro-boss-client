import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";


const DashingBoard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();


    // TODO: load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;







    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">

                    {
                        isAdmin ? <>


                            <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> Add an Item </NavLink></li>
                            <li>
                                <NavLink to='/dashboard/manageitems'><FaWallet></FaWallet>Manage Items</NavLink>

                            </li>
                            <li>
                                <NavLink to='/dashboard/history'><FaBook></FaBook>Manage Bookings</NavLink>

                            </li>
                        
                            <li>
                                <NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All Users</NavLink>

                            </li>
            
                        </>

                            :

                            <>


                                <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservations </NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink>

                                </li>
                                <li>
                                    <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                                        <div className="badge badge-error">+{cart.length || 0}</div>
                                    </NavLink>
                                </li>


                            </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menu">Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashingBoard;