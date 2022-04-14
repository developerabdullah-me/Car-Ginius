import React from 'react';
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
      if(user){
          naviGate('/home')
      }
      const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
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
                <input type="submit" value="submit" />
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