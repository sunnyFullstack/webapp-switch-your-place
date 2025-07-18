import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useAppSelector } from 'src/redux-toolkit/hooks';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  //   const store = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();
  let store = {
    isAuthenticated: false,
  };

  useEffect(() => {
    if (!store.isAuthenticated) {
      navigate("/signin");
    }
  }, [store.isAuthenticated]);

  return store.isAuthenticated && element;
};

export default ProtectedRoute;
