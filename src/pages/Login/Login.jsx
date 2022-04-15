import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Social from "./Social/Social";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const naviGate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const handelSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
  };
  if(user){
      naviGate('/home')
  }
  const naviGateRegister = (event) => {
    naviGate("/register");
  };
  return (
    <div>
      <h1 className="text-center text-primary">please login</h1>
      <div className="mx-auto w-50">
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
           login
          </Button>
        </Form>
        <p>
          New Car Genius?
          <Link
            to="/register  "
            className="text-danger"
            onClick={naviGateRegister}
          >
            please register
          </Link>
          
        </p>
        <Social></Social>
      </div>
    </div>
  );
};

export default Login;
