import React from 'react';
import './Footer.css';
import map from '../../../../logos/map-marker-alt-solid 1.png';
const Footer = () => {
    return (
        <div className=' footer-Area'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6 mt-4 p-3">
                        <img className='map mb-2 text-white' src={map} alt=""/>
                        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti temporibus dolores earum a exercitationem culpa ratione quaerat atque odit soluta obcaecati recusandae commodi architecto ipsam cum, qui delectus nulla numquam?</p>
                    </div>
                    <div className='col-lg-2 mt-4 p-3'>
                        <h3 className='text-white'>Company</h3>
                        
                            <h6 className='text-white'>about</h6>
                            <h6 className='text-white'>about</h6>
                            <h6 className='text-white'>about</h6>
                            <h6 className='text-white'>about</h6>
                            <h6 className='text-white'>about</h6>
                            <h6 className='text-white'>about</h6>
                            
                    </div>
                    <div className="col-lg-2 mt-4 p-3">
                        <h3 className='text-white'>Quick Links</h3>
                        <h6 className='text-white'>about</h6>
                            <h6 className='text-white'>about</h6>
                            <h6 className='text-white'>about</h6>
                            <h6 className='text-white'>about</h6>
                            <h6 className='text-white'>about</h6>
                            <h6 className='text-white'>about</h6>
                    </div>
                    <div className="col-lg-2 mt-4 p-3">
                        <h3 className='text-white'>Contact us</h3>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam itaque quasi molestiae.</p>

                            
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
