import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const token = localStorage.getItem('access-token');
    console.log(token);   

    const { data: users = [], refetch } = useQuery(['users'],
        async () => {
            const res = await fetch('http://localhost:5000/users', {
                headers: {
                    authorization: `bearer ${token}`
                }
            });

            const result = await res.json();
            console.log(result);
            return result;
            
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is name an Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
            }
        })
    }

    const handleDelete = () => {
        
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
            <h2 className="text-3xl font-semibold my-4">Total Items:{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1 }</th>
                                <td>{user.name }</td>
                                <td>{user.email }</td>
                                <td>{
                                    user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-white bg-orange-500"><FaUserShield></FaUserShield></button>
                                       
                                }</td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                      
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;