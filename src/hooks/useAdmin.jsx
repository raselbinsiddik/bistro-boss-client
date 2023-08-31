import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"

const useAdmin = () => {
    const { user, loading } = useAuth();

    const token = localStorage.getItem('access-token');
    console.log(token);   

    const {data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            const result = await res.json();
            return result.admin;
            
        }
       
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;