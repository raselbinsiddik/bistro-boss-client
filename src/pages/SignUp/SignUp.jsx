import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: {errors }
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user pro');
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate("/")
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }

   
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <p className="text-red-400">Please enter for name.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <p className="text-red-400">Photo url is requered.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <p className="text-red-400">Please enter for email.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register('password', {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /(?=.*[a-z])(?=.*[!@#$%&*])(?=.*[0-9])(?=.*[A-Z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p className="text-red-400">password must be 6 characters.</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-400">password maximum 20 characters.</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-400">password must be one uppercase and, one lowercase and special characters.</p>}
                                {errors.password?.type === 'requered' && <p className="text-red-400">password requered.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary mb-2" type="submit" value="Sign Up" />
                                
                            </div>
                        </form>
                        <p><small> Already hav an account? <Link to="/login"> Go to login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;