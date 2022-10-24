import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
    return (
        <Container className='mt-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.pikbest.com/backgrounds/20210920/booking-luxury-hotel-banner-background-eps_6126596.jpg!bw700"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJ81iFMXlfsYtcjSqlmXwXnJBujCIsvgXUA&usqp=CAU"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngKhM7ouEdAdaPSKqMz3-W4N9xBHcIYqu3A&usqp=CAU"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Home;