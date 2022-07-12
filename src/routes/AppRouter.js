import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "routes";

export const AppRouter = () => {
  //   const user = { uid: 123 };
  const user = { uid: null };
  return (
    <Routes>
      {/* PrivateRoute */}
      <Route path="/" element={<PrivateRoute user={user} />}>
        <Route index element={<div>Home</div>} />
      </Route>

      {/* PublicRoute */}
      <Route path="/auth" element={<PublicRoute user={user} />}>
        <Route index element={<div>Auth</div>} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
