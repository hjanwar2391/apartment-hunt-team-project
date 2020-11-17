import React, { useContext, useEffect, useState } from 'react';
import logo from '../../logos/Logo.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLock, faPlus } from '@fortawesome/free-solid-svg-icons';
import firebase from "firebase/app";
import { userContext } from '../../App';
import { Table } from 'react-bootstrap';
import Dropdown from 'react-dropdown';

// Options for project status
const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Ongoing', label: 'Ongoing' },
    { value: 'Done', label: 'Done' }
];

const BookingList = () => {
    const [allBookings, setAllBookings] = useState([]);
    console.log(allBookings)
    // Display all Services
    useEffect(() => {
        fetch('http://localhost:5000/getBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [])
    // Change status
    const changeOption = (event, id) => {
        const status = { project: event.value };

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

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
                        <h3>Booking List</h3>
                    </div>
                    <div className="col-2">
                        <Button className="px-3 mr-5" variant="danger" onClick={handleSignOut} >Log Out</Button>
                    </div>
                </div>

            </div>

            <div className="">
                <div className='row'>
                    <div className="sidebar d-flex flex-column pl-5  col-lg-3 col-sm-12  py-5 px-4" style={{ height: "100vh" }}>
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
                            <div className="card p-2 mr-2">
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th className="text-secondary text-left" scope="col">Name</th>
                                            <th className="text-secondary" scope="col">Email ID</th>
                                            <th className="text-secondary" scope="col">Service</th>
                                            <th className="text-secondary" scope="col">Project Details</th>
                                            <th className="text-secondary" scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    {/* <tbody>
                                        {
                                            allBookings.length === 0 && <div className="d-flex justify-content-center"> <h3>Loading...</h3> </div>
                                        }
                                        {
                                            allBookings.map(data =>

                                                <tr>
                                                    <td><strong>{data.name}</strong></td>
                                                    <td>{data.email}</td>
                                                    <td><strong>{data.title}</strong></td>
                                                    <td>{data.description}</td>
                                                    <td><Dropdown options={options} onChange={(event) => changeOption(event, `${data._id}`)} value={data.project} placeholder="Select an option" /></td>
                                                </tr>
                                            )
                                        }
                                    </tbody> */}
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BookingList;