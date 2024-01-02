import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Latest() {
    return (
        <div className='container-fluid mt-5'>
            <div className="row  mx-5">
            <div className='mb-3 ms-5 hr'>
                <h3>  LATEST CATEGORY</h3>
            </div>
              <div className="col-3">

                    <MDBRipple className='bg-image card' rippleTag='div' rippleColor='light'>
                        <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/27-282x280.jpg' alt="shuyw" className='w-100' />
                        <a href='#!'>
                          
                            <div className='hover-overlay'>
                                <div className='mask' style={{ backgroundColor: 'rgba(291, 201, 281, 0.2)' }}></div>
                            </div>
                        </a>
                        <div className='col-6' style={{ marginLeft: "62px" }}>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <p class="card-text fw-bold">TV</p>
                            <p class="card-text mb-3 fw-bold">$7889</p>
                        </div>
                    </MDBRipple>
                </div>

                <div className="col-3">
                    <MDBRipple className='bg-image card' rippleTag='div' rippleColor='light'>
                        <img src='	https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/25-282x280.jpg' alt="dhudhe" className='w-100' />
                        <a href='#!'>
                          
                            <div className='hover-overlay'>
                                <div className='mask' style={{ backgroundColor: 'rgba(291, 201, 281, 0.2)' }}></div>
                            </div>
                        </a>

                        <div className='col-6' style={{ marginLeft: "62px" }}>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <p class="card-text fw-bold">Refrigerator</p>
                            <p class="card-text mb-3 fw-bold">$7889</p>
                        </div>
                    </MDBRipple>

                </div>


                <div className="col-3">
                    <MDBRipple className='bg-image card' rippleTag='div' rippleColor='light'>
                        <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/22-282x280.jpg' alt="sue" className='w-100' />
                        <a href='#!'>
                           
                            <div className='hover-overlay'>
                                <div className='mask' style={{ backgroundColor: 'rgba(291, 201, 281, 0.2)' }}></div>
                            </div>
                        </a>

                        <div className='col-6' style={{ marginLeft: "62px" }}>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <p class="card-text fw-bold">Filter</p>
                            <p class="card-text mb-3 fw-bold">$7889</p>
                        </div>
                    </MDBRipple>
                </div>
              
                <div className="col-3">
                    <MDBRipple className='bg-image card' rippleTag='div' >
                        <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/19-282x280.jpg' alt="sue" className='w-100' />
                        <a href='#!'>
                          
                            <div className='hover-overlay'>
                                <div className='mask' style={{ backgroundColor: 'rgba(291, 201, 281, 0.2)' }}></div>
                            </div>
                        </a>

                        <div className='col-6' style={{ marginLeft: "62px" }}>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <i class="fa-regular fa fa-star"></i>
                            <p class="card-text fw-bold">Speaker</p>
                            <p class="card-text mb-3 fw-bold">$7889</p>
                        </div>
                    </MDBRipple>
                </div>
               
            </div>


        </div>
    )
};

