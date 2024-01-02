import React from 'react'
import { MDBInputGroup } from 'mdb-react-ui-kit';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";

export default function Search() {


    return (
        <div className='container-fluid mb-2 bg-light'>
            <div className='container mb-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='nav d-flex justify-content-around align-items-center'>
                            <div className='nav-link'>
                                <img src='/images/shop.png' alt='shoplogo' />
                            </div>
                            <div className='nav-link  '>
                                <div className='d-flex ' >                                    <MDBInputGroup tag="form" className='d-flex border'>
                                        <input className='border-0  text-muted' style={{ width: "400px" }} placeholder="search products" aria-label="Search" type='Search' />
                                        <button className='btn btn-warning'>search</button>
                                    </MDBInputGroup>
                                </div>
                            </div>
                            <div className=' '>
                                <div className='btn btn-light '><FaRegUser className='icon' /></div>
                                My Account   <span>Sign in</span>

                            </div>
                            <div className=' '>
                               
                                    <div className='btn btn-light'><TiShoppingCart className='icon'/>  </div>
                                    My Cart
                                    <span>Sign in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            )}

            