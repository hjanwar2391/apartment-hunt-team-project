import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import House from '../../../images/Rectangle 394.png'
import House1 from '../../../images/Rectangle 396.png'
import House2 from '../../../images/Rectangle 398.png'
import House3 from '../../../images/Rectangle 403.png'
import House4 from '../../../images/Rectangle 404.png'
import House5 from '../../../images/Rectangle 405.png'
import location from '../../../logos/map-marker-alt-solid 1.png'
import bed from '../../../logos/bed 1.png'
import bath from '../../../logos/bath 1.png'

const houses = [
    {
        id: 0,
        title: "Washington Avenue",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House}`
    },
    {
        id: 1,
        title: "Familly Apartment",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House1}`
    },
    {
        id: 2,
        title: "Georges House",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House2}`
    },
    {
        id: 3,
        title: "luxury villa",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House3}`
    },
    {
        id: 4,
        title: "Epic Huda Palicio",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House4}`
    },
    {
        id: 5,
        title: "Washington Avenue",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House5}`
    }
]

const HouseRent = () => {

    return (
        <div className="container ">
            <h4 className="text-center mt-4">House Rent</h4>
            <h2 className="text-center mt-2 mb-5">Discover the latest Rent <br /> available today</h2>
            <Row>
                {
                    houses.map(house => <Col className="p-2">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={house.img} />
                            <Card.Body>
                                <Card.Title>{house.title}</Card.Title>
                                <Card.Text>
                                    <div className="d-flex justify-content-start align-items-center">
                                        <img
                                            src={location}
                                            height="20"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                        />
                                        {house.location}
                                    </div>
                                </Card.Text>
                                <Card.Text className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-center align-items-center">
                                        <img
                                            src={bed}
                                            height="20"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                        />
                                        {house.housetype}
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img
                                            src={bath}
                                            height="20"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                        />
                                        {house.bathroom}
                                    </div>
                            </Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2>{house.price}</h2>
                                    <Button variant="success">View Details</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default HouseRent;