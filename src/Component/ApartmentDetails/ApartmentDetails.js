import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Nevbar from '../Home/Nevbar/Nevbar';
import headerImg from '../../images/Rectangle 13.png';
import './ApartmentDetails.css'
import { userData } from '../../App';

const ApartmentDetails = () => {
    const [apartmentDetails, setApartmentDetails] = useContext(userData);
    console.log(apartmentDetails)
    return (
        <div>
            <Nevbar></Nevbar>
            <div className="back-img" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${headerImg}')` }}>
                <Container fluid="md">
                    <div className="text-center text-white text" >
                        <h1>Apartment</h1>
                    </div>
                </Container>
            </div>
            <Row>
                <Col xs={8}>
                </Col>
                <Col xs={4}>
                    <div className="p-3">
                        <form>
                            <div class="form-group">
                                <input name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                            </div>
                            <div class="form-group">
                                <input name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone"/>
                            </div>
                            <div class="form-group">
                                <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your Message"/>
                            </div>
                            <button type="submit" class="btn btn-success w-100">Request Booking</button>
                        </form>
                    </div>
                </Col>
            </Row>
            <Col xs={8}>
                <div className="p-3">
                    <div className="d-flex">
                        <h2 className="mr-3 pb-2">{apartmentDetails.title}</h2>
                        <h2>{apartmentDetails.price}</h2>
                    </div>
                    <h5>{apartmentDetails.about}</h5>
                </div>
                <div className="p-3">
                    <h2 className="pb-2">Price Details</h2>
                    <h5>{apartmentDetails.priceDetails}</h5>
                </div>
                <div className="p-3">
                    <h2 className="pb-2">Property Details</h2>
                    <h5>{apartmentDetails.propertyDetails}</h5>
                </div>
            </Col>
        </div>
    );
};

export default ApartmentDetails;