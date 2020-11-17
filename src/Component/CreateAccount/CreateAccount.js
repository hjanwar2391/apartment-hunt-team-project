import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nevbar from '../Home/Nevbar/Nevbar';
import './CreateAccount.css';
import firebase from "firebase/app";

import "firebase/auth";
import firebaseConfig from './firebaseConfig';

const CreateAccount = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        error: ''
    });

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    name: displayName,
                    isSignedIn: true,
                    email: email,
                    photo: photoURL
                };
                setUser(signedInUser);
            }).catch(error => {
                console.log(error);
            });
    }
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then((result) => {
                console.log(result)
                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, isSignedIn: true, email: email, photo: photoURL };
                setUser(signedInUser);
            }).catch((error) => {
                console.log(error);
            });
    }

    const handleChange = (e) => {
        let isFormValid = true;
        if (e.target.name === 'name') {
            isFormValid = e.target.value.length > 2;
        } if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        } if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordNumber;
        } if (e.target.name === 'confirmPassword') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordNumber;
        } if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        const { password, confirmPassword } = { ...user };
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        }
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.isSignedIn = true;
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }
    return (
        <div>
            <Nevbar></Nevbar>
            <div className="col md-12 loginStyle2" >
                <h5>Create an account </h5>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">First name</label>
                        <input onBlur={handleChange} name="name" type="text" class="form-control" aria-describedby="emailHelp" placeholder="First Name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Last name</label>
                        <input onBlur={handleChange} name="lastName" type="text" class="form-control" placeholder="Last Name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input onBlur={handleChange} name="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onBlur={handleChange} name="password" type="password" class="form-control" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input onBlur={handleChange} name="confirmPassword" type="password" class="form-control" placeholder="Confirm Password"/>
                    </div>
                    <button type="submit" class="btn btn-success w-100 my-2">Create an account</button>
                </form>
                <p style={{ color: 'red' }}>{user.error}</p>

                <div className="text-center">
                    <Link to="/login" >Already have an account? <a href="./Login.js"><span style={{ color: '#67A7FD' }}>Login</span></a></Link>
                </div>

            </div>
            <button className='LoginBtnStyle2' onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Continue with Google</button>
            <button className='LoginBtnStyle2' onClick={handleFbSignIn}><FontAwesomeIcon icon={faFacebook} />  Continue with facebook</button>
        </div>
    );
};

export default CreateAccount;