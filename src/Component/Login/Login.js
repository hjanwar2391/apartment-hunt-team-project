import React, { useState } from 'react';
import Nevbar from '../Home/Nevbar/Nevbar';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";

import "firebase/auth";
import firebaseConfig from '../CreateAccount/firebaseConfig';

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        error: '',
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
                const signedInUser = {
                    name: displayName,
                    isSignedIn: true,
                    email: email,
                    photo: photoURL
                };
                setUser(signedInUser);
            }).catch((error) => {
                console.log(error);
            });
    }

    const handleChange = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        } if (e.target.name === 'password') {
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
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    // The signed-in user info.
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
            <div className='mainDivStyle'>
                <div className="col md-12 loginStyle" >
                    <h5>Login </h5>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onBlur={handleChange} name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onBlur={handleChange} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            <a class="text-right ml-5"> Forgot Password </a>
                        </div>
                        <button type="submit" class="btn btn-success w-100">Login</button>
                    </form>
                    <p style={{ color: 'red' }}>{user.error}</p>

                    <div className="text-center">
                        <Link to="/createAccount" >Don't have an account? <span style={{ color: '#67A7FD' }}>Create an account</span></Link><hr />
                    </div>
                    <button className='LoginBtnStyle' onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} />   Continue with Google</button>
                    <button className='LoginBtnStyle' onClick={handleFbSignIn}><FontAwesomeIcon icon={faFacebook} />  Continue with facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;