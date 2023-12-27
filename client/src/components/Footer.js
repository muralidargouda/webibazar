import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {Navbar,Form,Button,InputGroup,Row,Col } from 'react-bootstrap';





  


export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

       
      <section className='m-5 rounded bg-primary justify-content-center justify-content-lg-between p-4 border-bottom'>
      <Row >
      <Col >
      <a>fb</a> <a>tw</a> <a>in</a> <a>yt</a>
      </Col>

        <Col >
        <div className=' me-5 d-none d-lg-block'>
          <span className=' justify-content-center text-white  '>SIGN UP FOR NEWS LETTER</span>
        </div>
        </Col>
          <Col xs="auto" className='d-flex '>
            <Form.Control
              type="text"
              placeholder="please enter email..."
              className=" float-right pe-5 pt-2 pb-2 ms-5 mr-sm-2"
            />
         
            <Button className='  pt-3 pb-3 float-right bg-warning' type="submit">Subscribe</Button>
          </Col>
         
      </Row>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
           
            <h6 className='text-uppercase fw-bold mb-4'>CONTACT US</h6>
              <p>
                <MDBIcon color='primary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='primary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='primary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='primary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>MY ACCOUNT</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  My Account
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Checkout
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Downloads
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Account Details
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>CATEGORIES</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>INFORMATION</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Delivery Information
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>
           
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
      <hr/>
    </MDBFooter>
  );
}