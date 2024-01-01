import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Cate() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card'>
                            <div className='bg-warning d-flex justify-content-around align-items-center'>

                                <i className='fa fa-bars  ms-0'></i>
                                <p className='fw-bolder mt-3 me-5 '>ALL CATEGORY</p>


                            </div>
                            <div className='d-flex justify-content-between '>
                                <p className='h6'> Accessories</p>
                                <i className='fa fa-angle-right'></i>
                            </div>
                            <div className=''>
                                <p className='h6'> Hydraulic</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='h6'> Lamp</p>
                                <i className='fa fa-angle-right'></i>
                            </div>
                            <div className=''>
                                <div className='h6'><span>Cryotronics</span></div>
                            </div>
                            <div className=''>
                                <div className='h6'><span> Induction</span></div>

                            </div>
                            <div className='d-flex justify-content-between '>
                                <p className='h6'>Avionic</p>
                                <i className='fa fa-angle-right'></i>
                            </div>
                            <div className=''>
                                <p className='h6'> Circuits</p>
                            </div>
                            <div className=''>
                                <p className='h6'>ElectronicsY</p>
                            </div>
                            <div className=''>
                                <p className='h6 '>Handwatch</p>
                            </div>

                        </div>
                    </div>
                 




                </div>



            </div>
        </div>
    )
}

export default Cate