import Swal from "sweetalert2";
import SectionsTitle from "../../../copmonets/SectionTitle/SectionsTitle";

import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_image_upload_token;


const AddItem = () => {
    const token = localStorage.getItem('access-token');
    console.log(token);
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body:formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                   
                    const { name, price, category, recipe } = data;
                    const newItem = {name, price:parseFloat(price), category, recipe, image:imgUrl}
                    
                    fetch('http://localhost:5000/menu', {
                        method: 'POST',
                        headers: {
                            authorization: `bearer ${token}`
                        },
                        body: JSON.stringify(newItem)
                       
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log("aaaa",data);
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your menu item is successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                    })
            }
        })
    }
    return (
        <div className="w-full px-10 mt-10">
            <SectionsTitle subHeading={'whats new'} heading={'Add an item'}></SectionsTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold ">Recipe Name</span>
                    </label>
                    <input type="text" placeholder="recipe name"  {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full " />
                    
                </div>
                <div className="flex">
                    <div className="form-control w-full mr-4">
                        <label className="label">
                            <span className="label-text">Category</span>

                        </label>
                        <select defaultValue={"pick one"}  {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessart</option>
                            <option>Drinks</option>
                            <option>Desi</option>
                        </select>

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold ">Price*</span>
                        </label>
                        <input type="number"  {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />

                    </div>
               </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Recipe details</span>
                       
                    </label>
                    <textarea {...register("recipe", { required: true })}  className="textarea textarea-bordered h-24" placeholder="details"></textarea>
                    
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item image*</span>
                    </label>
                    <input type="file"  {...register("image", { required: true, maxLength: 120 })} className="file-input file-input-bordered w-full " />
                    
                </div>
                <input className="btn btn-sm mt-10" type="submit" value="Add Item" />
            </form>
           
        </div>
    );
};

export default AddItem;