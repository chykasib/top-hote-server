import React from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
const Calender = () => {
    const [date, setDate] = useState(new Date())
    return (
        <Container>

            <h1 className="header">Booking Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
            </div>
            <Link to={'/booking'}>
                <Button variant="link">Back</Button>
            </Link>


        </Container>
    )
};

export default Calender;