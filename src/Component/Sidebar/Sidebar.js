import React from 'react';
import './Sidebar.css';
import logo from '../../logos/Logo.png';
import { Link } from 'react-router-dom';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLock, faPlus} from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div>
            <div className="container mt-5 mb-2">
                <div className=" row">
                    <div className="col-3">
                    <img
                                src={logo}
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                    </div>
                    <div className="col-7">
                        <h3>Add Rent House</h3>
                    </div>
                    <div className="col-2">
                        <h3>name</h3>
                    </div>
                </div>
                
            </div>
            
            <div className="">
                <div className='row'>
                    <div className="sidebar flex-column pl-5  col-lg-3 col-sm-12  py-5 px-4" style={{ height: "100%" }}>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/bookingList" className="text-dark">
                                    <FontAwesomeIcon icon={faLock} /> <span>Booking List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/AddRentHouse" className="text-dark">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Rent House</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/myRent" className="text-dark">
                                    <FontAwesomeIcon icon={faHome} /> <span>My Rent</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 col-md-4 col-sm-12 colorHere" >
                        <div className=" p-4 bgColor m-5 ">
                            <Form>
                                <Form.Group className="text-dark" controlId="formBasicEmail">
                                    <Form.Label> <h6>Service Title</h6> </Form.Label>
                                    <Form.Control type="title" placeholder="Enter Title" />
                                    <Form.Label> <h6>Location</h6> </Form.Label>
                                    <Form.Control type="Enter Title" placeholder="Enter Title" />
                                    <Form.Label> <h6>No of Bathroom</h6> </Form.Label>
                                    <Form.Control type="email" placeholder="Enter Title" />
                                    <Form.Label> <h6>Price</h6> </Form.Label>
                                    <Form.Control type="email" placeholder="Enter Title" />
                                    <Form.Label><h6>No of Bathroom</h6></Form.Label>
                                    <Form.Control type="email" placeholder="Enter Title" />
                                    <Form.Label> <h6>Images</h6> </Form.Label>
                                    <Form.Control type="file" placeholder="file" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Sidebar;