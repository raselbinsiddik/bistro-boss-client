import { FaTrashAlt } from "react-icons/fa";
import SectionsTitle from "../../../../copmonets/SectionTitle/SectionsTitle";
import useMenu from "../../../../hooks/UseMenu";
import Swal from "sweetalert2";


const ManageItem = () => {
    const token = localStorage.getItem('access-token');
    const [menu, ,refetch] = useMenu();

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
            fetch(`http://localhost:5000/menu/${item._id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${token}`
                },
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
            <SectionsTitle subHeading={'hurry up'}
                heading={'Manage All iems'}></SectionsTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>item</th>
                            <th>category</th>
                            <th>prce</th>
                            <th>Delate</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index+1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            {item.name}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.category}

                                </td>
                                <td>{item.price }</td>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                                <th>
                                    {/* <button onClick={() => handleDelete(item)} className="btn btn-ghost text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button> */}
                                </th>
                            </tr>)
                        }
                        
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItem;