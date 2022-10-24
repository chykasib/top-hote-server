import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Booking = () => {

    const AggreeHandler = () => {
        toast("welcome to our hotel");
    }

    return (
        <div>
            <Card className='container text-center mt-5 p-3 box shadow ' style={{ width: '18rem' }}>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" name='Destination' placeholder="Enter Destination" />
                    </Form.Group>

                    <Form className='d-flex justify-content-between mx-3'>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Form</Form.Label>
                            <Link to={'/calender'}><FaCalendar className='ms-3'></FaCalendar></Link>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>To</Form.Label>
                            <Link to={'/calender'}><FaCalendar className='ms-3'></FaCalendar></Link>
                        </Form.Group>
                    </Form>
                    <Button onClick={AggreeHandler} variant="info">Buy</Button>
                    <ToastContainer />
                </Form>
            </Card>
        </div >
    );
};

export default Booking;