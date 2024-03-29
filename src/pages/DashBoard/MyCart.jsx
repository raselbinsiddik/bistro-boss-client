import { Helmet } from "react-helmet-async";
import UseCart from "../../hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = UseCart();
    console.log(cart);

    const total = cart?.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2));

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Mycart</title>
            </Helmet>
            <div className="uppercase font-semibold flex justify-evenly h-[60px]">
                <h2 className="text-3xl">Total Items:{cart.length}</h2>
                <h2 className="text-3xl">Total Price:{price}</h2>
                <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm">pay</button></Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                   {index+1}
                                </td>
                                <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                </td>
                                <td>
                                  {item.name}
                                </td>
                                <td className="text-end">${item.price }</td>
                                <td>
                                    <button onClick={()=>handleDelete(item)} className="btn btn-ghost text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                       
                       </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;