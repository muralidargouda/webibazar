import React from "react";

export default function TopNav(){

    return(
        <>
        <div className="container-fixed">
            <div className="row">
                <div className="d-flex flex-row  justify-content-between align-items-center" style={{height:"50px",backgroundColor:"#E6E6FA"}}>
                     <div className="mx-3 d-flex flex-row justify-content-between align-items-center">
                        <h4><img src="./images/logo.png" alt="logo" height="30px" width="30px" className="mx-2"/><span className="text-danger">Webi</span>Bazaar</h4>
                        <div className="mx-5">
                        <h6>Shopper   Electronics   WooCommerce   Theme</h6>
                        </div>
                     </div>
                     <div>
                        <ul className="list-group" style={{listStyleType:"none",fontWeight:"bold"}}>
                            <div className="d-flex flex-row justify-content-between">
                                <div><li className="mx-4 ">Desktop</li></div>
                                <div><li className="mx-4">Tablet</li></div>
                                 <div><li className="mx-4">Mobile</li></div>
                            </div>
                        </ul>
                     </div>
                     <div>
                        <button className="btn mx-3 text-white" style={{backgroundColor:"darkblue"}}>Buy Now</button>
                     </div>
                </div>
            </div>
        </div>
        </>
    )
}

