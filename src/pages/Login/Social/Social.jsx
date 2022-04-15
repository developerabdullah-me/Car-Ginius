import React from "react";
import googl from "../Social/Images/google-logo.png";
import facebook from "../Social/Images/Facebook-logo.png";
import github from "../Social/Images/github-logo.png";
import twitter from "../Social/Images/twitter-logo.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    if (user){
        navigate('/home')
    }
let elementErrors ;
    if (error) {
        elementErrors= <div>
            <p>Error: {error.message}</p>
            </div>
    }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center ">
        <div className=" bg-primary w-25" style={{ height: "1px" }}></div>

        <p style={{ padding: "3px", marginTop: "1px" }}>or</p>

        <div className=" bg-primary w-25" style={{ height: "1px" }}></div>
      </div>
      {elementErrors}
<div className=" ml-5">

    
<div className="mx-auto  text-center " style={{}}>
        <button onClick={() =>signInWithGoogle()} className="btn-primary text-center p-2">
          {" "}
          <img style={{ width: "30px" }} src={googl} alt="" />
          Google sign in
        </button>

        <button className="btn-primary text-center p-2">
          {" "}
          <img style={{ width: "30px" }} src={twitter} alt=""/>
          Google sign in
        </button>
        <button className="btn-primary text-center p-2">
          {" "}
          <img style={{ width: "30px" }} src={github} alt="" />
          Google sign in
        </button>

        <button className="btn-primary text-center p-2">
          {" "}
          <img style={{ width: "30px" }} src={facebook} alt="" />
          facebook sign in
        </button>
      </div>
</div>
    </div>
  );
};

export default Social;
