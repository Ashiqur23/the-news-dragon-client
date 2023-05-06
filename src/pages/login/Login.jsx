import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import useTitle from "../../hook/useTitle";

// import { Helmet, HelmetProvider } from "react-helmet-async";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  useTitle("login")
  const from = location?.state?.from?.pathname || "/category/0";

  console.log("login page location", location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        setSuccess("login successfully");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setSuccess("");
        setError(err.message);
      });
  };
  return (
    <>
      {/* <HelmetProvider>
        <Helmet>
          <title>Our login page</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <h1>Hello World</h1>
      </HelmetProvider> */}
      <Container className="w-25 mx-auto">
        <h3>Please login</h3>
        {success}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            login
          </Button>
          <br />
          <Form.Text className="text-danger"></Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-secondary">
            Don't Have an Account? <Link to="/register">Register</Link>
          </Form.Text>
        </Form>
      </Container>
    </>
  );
};

export default Login;
