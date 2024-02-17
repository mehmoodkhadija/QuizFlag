import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterestP } from 'react-icons/fa';

function FooterQuiz() {
    return (
        <div className='footer-main mt-5'>
            <div className='container footer-bg'>
                <h5>History at your fingertips – Sign up here to see what happened On This Day, every day in your inbox!</h5>
                <div>
                    <form action="">
                        <Form.Group className="mb-3 footer-email" controlId="formBasicEmail">
                            <Row>
                                <Col>
                                    <Form.Control type="email" placeholder="Enter email" className="p-3 mt-4" />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="py-3 mt-4" style={{ backgroundColor: 'transparent', border: '1px solid white' }}>
                                        Subscribe
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                        <p className="mt-3 by-sing mt-4" style={{ color: 'white', maxWidth: '65%', margin: 'auto' }}> By signing up for this email, you are agreeing to news, offers, and information from Encyclopaedia Britannica. Click here to view our Privacy Notice. Easy unsubscribe links are provided in every email.</p>
                    </form>
                </div>
                <hr style={{ color: 'black', marginTop: '40px' }} />
                <div className='text-center mt-5'
                    style={{ maxWidth: '50%', margin: 'auto' }}>
                    <Row>
                        <Col xs={6}>
                            <h5>STAY CONNECTED</h5>
                        </Col>
                        <Col xs={6} className='social-icon'>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaPinterestP /></a>
                        </Col>
                    </Row>
                </div>
                <p className='mt-5'>©2024 Encyclopædia Britannica, Inc.</p>
            </div>
        </div>
    );
}

export default FooterQuiz;
