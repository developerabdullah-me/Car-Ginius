import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SignUp.css'
const SingUp = () => {
    const naviGate=useNavigate()
    const naviGatelogin=event=>{
        naviGate('/register')
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [agree,setAgree]=useState([])
      if(user){
          naviGate('/home')
      }

      const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if(agree){
          createUserWithEmailAndPassword(email, password);
        }
      
    }
    return (
        <div className="from-container ">
            <h1>please register</h1>
            <div>
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
        </div>
    );
};

export default SingUp;