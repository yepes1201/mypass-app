import { Navigate } from "react-router-dom";
import { AuthForm } from "@components/AuthForm/AuthForm";

import appLocker from "@assets/applocker.png";

export const Auth = ({ user }) => {
  if (user.uid) return <Navigate to="/" replace />;

  return (
    <div className="auth__container">
      <div className="auth__left">
        <img src={appLocker} alt="applocker" />
        <h3>Keep your passwords secured all in one place</h3>
        <p>
          Use a master password and keep all of your random generated high
          secure passwords in one place.
        </p>
      </div>
      <div className="auth__right">
        <div className="auth__form">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};
