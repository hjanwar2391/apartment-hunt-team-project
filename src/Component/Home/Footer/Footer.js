import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import map from '../../../logos/map-marker-alt-solid 1.png';
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className=' footer-Area'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-5 mt-4 p-3 d-flex justify-content-center">
                        <img className='map mr-2 pt-1 text-white' src={map} alt="" />
                        <p className='text-white'>H#340(4th Floor). Road#40 <br /> New DOSH, Mohakhali, dhaka, Bangladesh
                        <br /> Phone: 018xxxxxxxxx <br /> Email: urgent@email.com</p>
                    </div>
                    <div className='col-lg-2 mt-4 p-3'>
                        <h3 className='text-white'>Company</h3>

                        <h6 className='text-white'>about</h6>
                        <h6 className='text-white'>Site map</h6>
                        <h6 className='text-white'>support center</h6>
                        <h6 className='text-white'>terms and condition</h6>
                        <h6 className='text-white'>submit listing</h6>

                    </div>
                    <div className="col-lg-2 mt-4 p-3">
                        <h3 className='text-white'>Quick Links</h3>
                        <h6 className='text-white'>Quick Links</h6>
                        <h6 className='text-white'>rental</h6>
                        <h6 className='text-white'>sales</h6>
                        <h6 className='text-white'>contact</h6>
                        <h6 className='text-white'>terms and condition</h6>
                        <h6 className='text-white'>Our blog</h6>
                    </div>
                    <div className="col-lg-3 mt-4 p-3">
                        <h3 className='text-white'>About us</h3>
                        <p className='text-white'>We are the top real-state agency in sydney. With agents available to answer any queations 24/7</p>
                        <div className="d-flex align-items-center">
                            <a href="https://github.com/piaspro" className="p-3 text-white"><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a>
                                <a href="https://github.com/piaspro" className="p-3 text-white"><FontAwesomeIcon icon={faInstagramSquare} size="2x" /></a>
                                    <a href="https://github.com/piaspro" className="p-3 text-white"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
                                        <a href="https://github.com/piaspro" className="p-3 text-white"><FontAwesomeIcon icon={faYoutubeSquare} size="2x" /></a>
                        </div>

                    </div>
                </div>
            </div>
                        </div>
    );
};
export default Footer;
