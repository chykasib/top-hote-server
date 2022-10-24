import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { AuthContext } from '../../../Context/AuthProvider';
import { Button } from 'react-bootstrap';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const singOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Image
                    roundedCircle
                    style={{ height: '60px' }}
                    src='https://cdn4.vectorstock.com/i/1000x1000/36/68/online-hotel-booking-laptop-with-holiday-icons-vector-18373668.jpg'>

                </Image>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none fs-4 ps-4' to={'/news'}>News</Link>
                        <Link className='text-decoration-none fs-4 ps-2' to={'/'}>Home</Link>
                    </Nav>
                    <Nav>
                        <Link className='text-decoration-none text-center my-3 fs-4 ps-4' to={'/login'}>Login</Link>
                        <Link className='text-decoration-none text-center my-3 fs-4 ps-4' to={'/register'}>Register</Link>



                        {
                            user?.uid ?
                                <>
                                    <>
                                        <p className='text-light fs-5 px-4 text-center'>{user?.displayName}</p>
                                    </>
                                    <Button className='text-primary my-3 ' onClick={singOut} variant="light">Sign Out</Button>
                                </>
                                : <Link to={'/login'}> <Button className=' ms-3 my-3' variant="warning">Sing In</Button></Link>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;