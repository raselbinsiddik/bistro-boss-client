import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                     fetch('http://localhost:5000/users', {
                         method: 'POST',
                         headers: {
                             'content-type': 'application/json'
                         },
                         body: JSON.stringify(savedUser)
                     })
                         .then(res => res.json())
                         .then( () => {
                             navigate(from, { replace: true });
                             
                         })


                 })
        
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-ful text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;