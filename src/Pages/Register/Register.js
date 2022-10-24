import React, { useContext, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const Register = () => {
    const [errorP, setError] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const { createUser, verifiedEmail, googleSingIn, githubSignIn } = useContext(AuthContext);

    const userCreateHandler = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('password should be at least 6 characters');
        }
        else {
            setError('')
        }

        console.log(name)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset('')
                verifiedHandler()
                toast(' Successfully!! please verify your email address before login');
                console.log(user);
            })
            .catch(error => console.error(error))


    }

    const handleGoogleSignIn = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))

    }
    const verifiedHandler = () => {
        verifiedEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const btnHandler = e => {
        setAccepted(e.target.checked);

    }

    const handFacebookSignIn = () => {

    }

    const handGitHubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <Card className='container text-center mt-5 p-3 box shadow ' style={{ width: '18rem' }}>
            <Form onSubmit={userCreateHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={btnHandler} type="checkbox" label="Check me out" />
                </Form.Group>
                <p className='text-danger'>{errorP}</p>
                <p>Already have an account? <Link className='text-warning' to={'/login'}>login</Link></p>
                <Button variant="warning" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
            <ToastContainer />
            <Button onClick={handleGoogleSignIn} className='mt-3' variant="success"><FaGoogle className='me-3'></FaGoogle>Google</Button>
            <Button onClick={handFacebookSignIn} className='mt-2' variant="primary"><FaFacebook className='me-3'></FaFacebook>Facebook</Button>
            <Button onClick={handGitHubSignIn} className='mt-2' variant="dark"><FaGithub className='me-3'></FaGithub>Github</Button>
        </Card>
    );
};

export default Register;