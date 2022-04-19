import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loding from "../Loding/Loding";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    <Loding></Loding>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div className="  text-center">
        <h1 className="text-danger ">your email is not verified</h1>
        <h1 className="text-primary">please verified your email</h1>
        <button className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            alert("Sent email");
          }}
        >
          Verify email
        </button>
      </div>
    );
  }
  return children;
};
export default RequireAuth;
