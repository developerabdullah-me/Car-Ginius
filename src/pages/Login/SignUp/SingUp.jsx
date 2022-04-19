import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SignUp.css'
import Social from '../Social/Social';
const SingUp = () => {
    const navigate=useNavigate()
    const naviGatelogin=event=>{
      navigate('/register')
    }
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [agree,setAgree]=useState([])
      if(user){
        // navigate(from, { replace: true });
        console.log(user);
      }
     

      const handleRegister =async ( event )=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
       
        // if(agree){
        //  createUserWithEmailAndPassword(email, password);
        // }
       
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile')
        navigate('/home')
      
    }
    return (
        <div className="from-container d-fl">
            <h1>please register</h1>
            <div className=''>
                <form onSubmit={handleRegister}>
                <input type="name" name="name" placeholder="type your name" required/><br />
                <input type="email" name="email" placeholder="type your email" required/><br />
                <input type="password" name="password" placeholder="type your password" required/><br />
                <input type="password" name="name" placeholder="type your confirm password" required/><br />
                <input type="number" name="number" placeholder="type your number" required/><br />
                <div className="">
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="" />
                {/* <label className={agree? "ps-2 text-danger": "ps-2 text-primary"}>Accept car Genius  terms and conditions</label> */}
                <label className={`ps-2 ${agree ?'':'text-primary'}`}>Accept car Genius  terms and conditions</label>
                </div>
               

               <div className="d-flex align-items-center">
               <input disabled={agree} type="submit" value="Register" />

              
               </div>
                </form>
                <p>
           all ready register
          <Link
            to="/login "
            className="text-danger"
            onClick={naviGatelogin}
          >
            please login
          </Link>
        </p>
            </div>
            <Social></Social>
        </div>
    );
};

export default SingUp;