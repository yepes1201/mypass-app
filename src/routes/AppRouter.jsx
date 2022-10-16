import { Auth } from "@pages/Auth/Auth";
import { Home } from "@pages/Home/Home";
import { Navigate, Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  const user = {};
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/auth" element={<Auth user={user} />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
};
