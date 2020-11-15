import React from 'react';
import './HeaderImg.css';
import headerImg from '../../../../images/Rectangle 13.png';

const HeaderImg = () => {
    return (
        <div class="headerImg banner-container d-flex justify-content-center align-items-center">
            <div className="">
                <h2 className="text-dark">FIND YOUR HOUSE RENT</h2>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default HeaderImg;