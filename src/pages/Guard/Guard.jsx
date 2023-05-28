import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const SiteGuard = ({ children }) => {
  const [cookies] = useCookies(["token", "id"]);
  const { token, id } = cookies;
  if (!token || !id) return <Navigate to="/" />;
  else return <>{children}</>;
};

export const LoginGuard = ({ children }) => {
  const [cookies] = useCookies(["token", "id"]);
  const { token, id } = cookies;
  if (token && id) return <Navigate to={`/profile/${id}`} />;
  return <>{children}</>;
};
