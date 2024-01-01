import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Carousel from 'react-bootstrap/Carousel';


export default function Accordions () {
  return (
    <div className="container shadow-0">
      <div className="row mt-5 me-5">
        <div className="col-3 ">
        <div className='bg-warning d-flex justify-content-around align-items-center'>
                    <i className='fa fa-bars  ms-0'></i>
                    <p className='fw-bolder mt-3 me-5 '>ALL CATEGORY</p>
          </div>
          <Accordion>
            <Accordion.Item >
              <Accordion.Header>Accessories</Accordion.Header>
              <Accordion.Body>Content for Accessories</Accordion.Body>

              </Accordion.Item>
              <Accordion.Header>Hydraulic</Accordion.Header>
           
            <Accordion.Item >
              <Accordion.Header>Lamp</Accordion.Header>
              </Accordion.Item>
              <Accordion.Header>Cryotronics</Accordion.Header>
              <Accordion.Header>Induction</Accordion.Header>
           
            <Accordion.Item >
              <Accordion.Header>Avionics</Accordion.Header>
              </Accordion.Item>
              <Accordion.Header>Circuits</Accordion.Header>
              <Accordion.Header>Electronics</Accordion.Header>
              <Accordion.Header>Handwatch</Accordion.Header>
     
          </Accordion>
        </div>
        <div className='col-md-9'>
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/open.jpeg"
                                    alt="First slide"
                                />
                               
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/open.jpeg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/open.jpeg"
                                    alt="Third slide"
                                />
                              
                            </Carousel.Item>
                        </Carousel>


                    </div>

      </div>
    </div>
  );
};
