function Topcategory() {
  
    const imgs = [
        {src:'./images/t1.jpg'},
        {src:'./images/t2.jpg'},
        {src:'./images/t3.jpg'},
        {src:'./images/t1.jpg'}
    ]
    return (

        <div className='container md-3'>
            <div className='mb-3 hr'>
                <h3>  TOP CATEGORY</h3>
            </div>
            <div className='row'>

                {imgs ? (
                    imgs.map((item, index) => (
                        <div key={index} className='col  my-3 fs-6'>
                            <div className='card '>
                                <img src={item.src} className="img-fluid position-relative" alt="images" height={150} />
                            </div>
                        </div>
                    ))
                ) : (  <h1>Loading...</h1> )}
            </div>
        </div>
    );
}

export default Topcategory