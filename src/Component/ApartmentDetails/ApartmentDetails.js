import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Nevbar from '../Home/Nevbar/Nevbar';
import headerImg from '../../images/Rectangle 13.png';
import img1 from '../../images/Rectangle 396.png';
import img2 from '../../images/Rectangle 398.png';
import img3 from '../../images/Rectangle 403.png';
import img4 from '../../images/Rectangle 404.png';
import img5 from '../../images/Rectangle 405.png';
import './ApartmentDetails.css';
import { userData } from '../../App';
import { Link } from 'react-router-dom';

const ApartmentDetails = () => {
    const [apartmentDetails, setApartmentDetails] = useContext(userData);
    console.log(apartmentDetails)

    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        
    }
    
    const handleSubmit = () => {
        console.log(info);
    }
    
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
                <Col xs={8} className="p-5 mt-3">
                    <div className="imgView mt-3" >
                        <img src={img1} alt="" />
                    </div>
                    <div className="row mt-4 smallImg">
                        <div className="col-3">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="col-3">
                            <img src={img3} alt=""/>
                        </div>
                        <div className="col-3">
                            <img src={img4} alt=""/>
                        </div>
                        <div className="col-3">
                            <img src={img5} alt=""/>
                        </div>
                        
                    </div>
                </Col>
                <Col xs={4}>
                    <div className="formBox p-3 ">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group ">
                                <input onBlur={handleBlur}  name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                            </div>
                            <div class="form-group">
                                <input onBlur={handleBlur} name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone"/>
                            </div>
                            <div class="form-group">
                                <input onBlur={handleBlur} name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword1" placeholder="Your Message"/>
                            </div>
                            <Link to="/AddRentHouse"><button class="btn btn-success w-100">Request Booking</button></Link>
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