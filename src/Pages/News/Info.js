import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
const Info = () => {
    const news = useLoaderData();
    const { img, view, details, name } = news;
    return (
        <Container className='my-4 '>
            <Card className="text-center" style={{ width: 'auto' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <h4><small className='text-warning'>{view}</small> <FaEye className='ms-2'></FaEye></h4>
                    <Link to={'/'}>
                        <Button className='me-3' variant="primary">Go Back</Button>
                    </Link>
                    <Link to={'/booking'}>
                        <Button variant="success">Booking Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Info;