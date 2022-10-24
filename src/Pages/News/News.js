import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelInformation from './HotelInformation';
import Row from 'react-bootstrap/Row';
const News = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <>
                        {
                            news.map(hotelInfo => <HotelInformation key={hotelInfo.id} hotelInfo={hotelInfo}></HotelInformation>)
                        }
                    </>
                ))}
            </Row>
        </div>
    );
};

export default News;