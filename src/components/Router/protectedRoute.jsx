import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
// Outlet is used to serve as a parent for multiple child routes.

const ProtectedRoute = () => {
  const token  = useSelector((state) => state.user.token)

  return token ? <Outlet /> : <Navigate to='/login' />
}
export default ProtectedRoute