import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";


export default function AccorContact () {
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
        <div className='col-3'>
                       
contact us 
                    </div>
                    <div className='col-3'>
                       
phone number
                       </div>
                       <div className='col-3'>
                       ema

                       </div>

      </div>
    </div>
  );
};
