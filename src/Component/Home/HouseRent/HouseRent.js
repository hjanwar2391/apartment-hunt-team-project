import React, { useContext, useState } from 'react';
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
import { Link } from 'react-router-dom';
import { userData } from '../../../App';

const houses = [
    {
        id: 0,
        about: "3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.",
        propertyDetails: `Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
            Flat Size : 3000 Sq Feet.
            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
            `,

        priceDetails: `Rent/Month: $550 (negotiable)
        Service Charge : 8,000/= Tk per month, subject to change
        Security Deposit : 3 month’s rent
        Flat Release Policy : 3 months earlier notice required`,
        title: "Washington Avenue",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House}`
    },
    {
        id: 1,
        about: "3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.",
        propertyDetails: `Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
            Flat Size : 3000 Sq Feet.
            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
            `,

        priceDetails: `Rent/Month: $550 (negotiable)
        Service Charge : 8,000/= Tk per month, subject to change
        Security Deposit : 3 month’s rent
        Flat Release Policy : 3 months earlier notice required`,
        title: "Familly Apartment",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House1}`
    },
    {
        id: 2,
        about: "3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.",
        propertyDetails: `Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
            Flat Size : 3000 Sq Feet.
            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
            `,

        priceDetails: `Rent/Month: $550 (negotiable)
        Service Charge : 8,000/= Tk per month, subject to change
        Security Deposit : 3 month’s rent
        Flat Release Policy : 3 months earlier notice required`,
        title: "Georges House",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House2}`
    },
    {
        id: 3,
        about: "3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.",
        propertyDetails: `Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
            Flat Size : 3000 Sq Feet.
            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
            `,

        priceDetails: `Rent/Month: $550 (negotiable)
        Service Charge : 8,000/= Tk per month, subject to change
        Security Deposit : 3 month’s rent
        Flat Release Policy : 3 months earlier notice required`,
        title: "luxury villa",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House3}`
    },
    {
        id: 4,
        about: "3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.",
        propertyDetails: `Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
            Flat Size : 3000 Sq Feet.
            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
            `,

        priceDetails: `Rent/Month: $550 (negotiable)
        Service Charge : 8,000/= Tk per month, subject to change
        Security Deposit : 3 month’s rent
        Flat Release Policy : 3 months earlier notice required`,
        title: "Epic Huda Palicio",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House4}`
    },
    {
        id: 5,
        about: "3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.",
        propertyDetails: `Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
            Flat Size : 3000 Sq Feet.
            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
            `,

        priceDetails: `Rent/Month: $550 (negotiable)
        Service Charge : 8,000/= Tk per month, subject to change
        Security Deposit : 3 month’s rent
        Flat Release Policy : 3 months earlier notice required`,
        title: "Washington Avenue",
        location: "NasirabadH/s, Chattagram",
        housetype: "3 Bedrooms",
        bathroom: "2 Bathrooms",
        price: "45$",
        img: `${House5}`
    }
]

const HouseRent = () => {
    const [apartmentDetails, setApartmentDetails] = useContext(userData);
    const handleInfo = (house) => {
        setApartmentDetails(house);
        console.log(house)
    }
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
                                    <Link to="/details" onClick={() => { handleInfo(house) }} key={house.id}><Button variant="success">View Details</Button></Link>
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