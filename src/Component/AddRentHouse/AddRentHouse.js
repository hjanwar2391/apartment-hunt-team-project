import React, { useContext } from 'react';
import logo from '../../logos/Logo.png';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLock, faPlus } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../App';


const AddRentHouse = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(userContext);
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: ''
                };
                SetLoggedInUser(signedOutUser);

            }).catch((error) => {
            });
    }
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
                        <h3>My Rent House</h3>
                    </div>
                    <div className="col-2">
                        <Button className="px-3 mr-5" variant="danger" onClick={handleSignOut} >Log Out</Button>
                    </div>
                </div>

            </div>

            <div className="">
                <div className='row'>
                    <div className="sidebar d-flex flex-column pl-5  col-lg-3 col-sm-12 py-5 px-4" style={{ height: "100vh" }}>
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
                    <div className="col-lg-9 col-sm-12 colorHere" >
                        <div className=" p-4 bgColor m-5 ">
                            <h4>my rent</h4>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddRentHouse;