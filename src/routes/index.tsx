import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/useAuth';

const Routes = () => {
  const { signed } = useAuth();
  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;