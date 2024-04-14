import { useNavigate } from "react-router-dom";
import AdminView from "~/components/Admin/AdminView";
import { useUserRole } from "~/hooks";

const AdminRoute = () => {
 const navigate = useNavigate();
 const role = useUserRole();
 if (role !== 'ADMIN') {
   navigate('/c/new');
 }

 return <AdminView />;
 
};

export default AdminRoute;