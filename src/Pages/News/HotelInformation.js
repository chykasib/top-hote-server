import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const HotelInformation = ({ hotelInfo }) => {
    const { _id, name, img } = hotelInfo;
    console.log(_id)
    return (
        <Container className='mt-5'>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Link to={`/news/${_id}`}>
                            <Button className='my-2' variant="primary">More Detail</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Container >
    );
};

export default HotelInformation;