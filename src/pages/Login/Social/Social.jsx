import React from "react";
import googl from "../Social/Images/google-logo.png";
import facebook from "../Social/Images/Facebook-logo.png";
import github from "../Social/Images/github-logo.png";
import twitter from "../Social/Images/twitter-logo.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";

    if(user){
      navigate(from, { replace: true });
        console.log(user);
      }
  
  let elementErrors ;
    if (error || error1) {
        elementErrors= <div>
            <p>Error: {error?.message} {error1?.message}</p>
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
<div className="mx-auto">
<div className="  d-block mx-auto mt-2 " style={{}}>
        <button onClick={() =>signInWithGoogle()} className="btn-primary d-block mx-auto mt-2 p-2">
          {" "}
          <img style={{ width: "30px" }} src={googl} alt="" />
          Google sign in
        </button>

        <button  className="btn-primary d-block mx-auto mt-2 p-2">
          {" "}
          <img style={{ width: "30px" }} src={twitter} alt=""/>
          Google twitter
        </button>
        <button onClick={() =>signInWithGithub()}  className="btn-primary d-block mx-auto mt-2 p-2">
          {" "}
          <img style={{ width: "30px" }} src={github} alt="" />
          Google github
        </button>

        <button className="btn-primary d-block mx-auto mt-2 p-2">
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
