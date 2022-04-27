import axios from "axios";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Social from "./Social/Social";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // 
  
  const handelSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const {data}=await axios.post('http://localhost:5000/login',{email});
    localStorage.setItem('accessToken',data.accessToken);
    navigate(from, { replace: true });
  };
  if (user) {
    navigate("/home");
  }
  const naviGateRegister = (event) => {
    navigate("/register");
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
