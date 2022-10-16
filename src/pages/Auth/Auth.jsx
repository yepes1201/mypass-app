import { Navigate } from "react-router-dom";

export const Auth = ({ user }) => {
  if (user.uid) return <Navigate to="/" replace />;

  return <div>Auth</div>;
};
