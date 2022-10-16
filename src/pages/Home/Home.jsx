import { Navigate } from "react-router-dom";

export const Home = ({ user }) => {
  if (!user.uid) return <Navigate to="/auth" replace />;
  return <div>Home</div>;
};
