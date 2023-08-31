
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const UseCart = () => {
    const { user, loading } = useAuth();
    console.log(user);
    
    const token = localStorage.getItem('access-token');
    console.log(token);

    const { refetch, data:cart= [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
            
        },
    })
    return[cart, refetch]

};

export default UseCart;