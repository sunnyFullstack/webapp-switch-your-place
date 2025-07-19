import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStatus from "../../hooks/useAuthStatus";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAuthStatus();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin");
    }
  }, [isLoggedIn]);

  return isLoggedIn && element;
};

export default ProtectedRoute;
