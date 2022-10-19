import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const  from = location.state?.from?.pathname || "/";

    const {signIn, error, setError} = useContext(AuthContext)

    const handleSubmit =(e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        signIn(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            setError('')
            form.reset()
            navigate(from, { replace: true })
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          });
        
    }

  return (
    <div className="w-50 mx-auto my-4 border shadow p-5">
      <Form onSubmit={handleSubmit}>
        <p className="text-danger"><small>{error}</small></p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <p><small><Link to='/signup'> Create New Account</Link></small></p>
        <Button className="px-3 " variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <small >
            <Button className="mt-4" variant="outline-primary" >
                <FaGoogle />
                <span className="ms-1 mt-2"> Google</span>
            </Button>
          </small>
    </div>
  );
};

export default Login;
