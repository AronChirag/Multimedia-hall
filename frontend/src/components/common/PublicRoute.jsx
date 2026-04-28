import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { isRunningInstalledApp } from '../../utils/pushNotifications';

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const isAdminLikeRole = ['admin', 'supervisor'].includes(user?.role);
  const isInstalledApp = isRunningInstalledApp();

  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  // If already logged in → redirect
  if (user && isInstalledApp) {
    return (
      <Navigate
        to={isAdminLikeRole ? '/admin/dashboard' : '/user/dashboard'}
        replace
      />
    );
  }

  return children;
};

export default PublicRoute;
