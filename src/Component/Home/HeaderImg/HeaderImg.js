import React from 'react';
import './HeaderImg.css';
import headerImg from '../../../images/Rectangle 13.png';
import Form from 'react-bootstrap/Form'
import { Col, Row, InputGroup, Container, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const HeaderImg = () => {
    return (
        <div className="back-img" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${headerImg}')` }}>
            <Container className="center" fluid="md">
                <div className="d-flex justify-content-center text-white" >
                    <h1>FIND YOUR HOUSE RENT</h1>
                </div>
                <InputGroup  className="mt-3 mb-5 justify-content-center">
                    <FormControl  placeholder="Search" />
                    <InputGroup.Append>
                        <Button variant="success">Find Now</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
        </div >
    );
};

export default HeaderImg;