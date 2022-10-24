import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [accepted, setAccepted] = useState(false);
    const [userEmail, setUserEmail] = useState(false);
    const { logIn, setLoading, resetPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const acceptedHandler = e => {
        setAccepted(e.target.checked);
    }
    const signHandler = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name)
        logIn(email, password)
            .then(result => {
                const user = result.user;
                // if (user.emailVerified) {

                // }
                // else {
                //     toast('your email is not verified. please verify email')
                // }

                navigate(from, { replace: true })
                form.reset('')
                console.log(user);
            })
            .catch(error => console.error(error))
            .finally(setLoading(true))

    }
    const handleEmailBlur = e => {
        const email = e.target.value;
        setUserEmail(email)
        console.log(email)
    }
    const resetHandler = () => {
        if (!userEmail) {
            return toast('Please enter your correct email address!');
        }
        resetPassword(userEmail)
            .then(() => {
                toast('password reset email sent. please check your email');
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <Card className='container text-center mt-5 p-3 box shadow' style={{ width: '18rem' }}>
            <Form onSubmit={signHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Link className='text-primary' onClick={resetHandler}>Reset Password</Link>
                <Form.Group className="my-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={acceptedHandler} type="checkbox" label="Check me out" />
                </Form.Group>
                <ToastContainer />
                <p>Don't have an account? <Link className='text-warning' to={'/register'}>Create an account</Link></p>
                <Button variant="warning" type="submit" disabled={!accepted}>
                    Login
                </Button>
            </Form>
        </Card>
    );
};

export default Login;