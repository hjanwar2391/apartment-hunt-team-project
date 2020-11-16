import React from 'react';
import './Service.css'
import img1 from '../../../logos/apartment 1.png';
import img2 from '../../../logos/affordable 1.png';
import img3 from '../../../logos/lessee 1.png';

const Service = () => {
    return (
        <div className='container'>
            <h4 className='text-center mt-3 mb-2'>Service</h4>
            <h2 className='text-center mb-4'>We're an agency tailored to all <br/> clients' needs that always delivers </h2>
            <div className="row ">
                <div class="  service text-center col-lg-4 col-md-6 col-sm-12 p-5" >
                    <img className='mb-3' src={img1} alt="logo"/>
                    <div className=''>
                        <h3>Wide range Properties</h3>
                        <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis ea dolores repellendus vel quo.</p>
                    </div>
                </div>
                <div class="  service text-center col-lg-4 col-md-6 col-sm-12 p-5" >
                    <img className='mb-3' src={img2} alt="logo"/>
                    <div className=''>
                        <h3>Financing made easy</h3>
                        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis ea dolores repellendus vel quo.</p>
                    </div>
                </div>
                <div class="  service text-center col-lg-4 col-md-6 col-sm-12 p-5" >
                    <img className='mb-3' src={img3} alt="logo"/>
                    <div className=''>
                        <h3>Trusted By thousands</h3>
                        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consecteturadipisicing elit. Alias debitis ea dolores repellendus vel quo.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Service;