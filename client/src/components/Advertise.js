import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Advertise (){
  return (
    <div container>
     

      <Container className="mt-3">
      <Row className="mb-5 mt-3">
        <Col>
          <Card style={{ width: "50" }}>
            <Image src="/images/1st.jpeg" fluid />
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "50" }}>
            <Image src="/images/2nd.jpeg" fluid />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ width: "50" }}>
            <Card.Body className="">
              <div className="d-flex justify-content-between">
                <div>
                  <h4>24/7 Support</h4>
                  <p>Online Support 24/7</p>
                </div>
                <div className="vr">
                  <div className=""></div>
                </div>
                <div>
                  <h4>Money back guarantee</h4>
                  <p>100% Secure Payment</p>
                </div>
                <div className="vr">
                  <div className=""></div>
                </div>
                <div>
                  <h4>Special Gift  Cards</h4>
                  <p>Give Perfect Gift</p>
                </div>
                <div className="vr">
                  <div className=""></div>
                </div>
                <div>
                  <h4>Free Shopping</h4>
                  <p>Order Over $99</p>
                </div>
              </div>
            
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    
  );
};