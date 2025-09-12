import React from 'react'

function PnfPage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className='d-flex justify-content-center'>
                            <img src="https://cdnl.iconscout.com/lottie/premium/thumb/error-404-animation-gif-download-4699353.gif" alt="Page Not Found" />
                        </div>   
                        <div>
                            <h1 className='text-center fw-bolder'>Look like you're lost</h1>    
                            <h3 className='text-center mt-3 fw-lighter'>The page you are looking is unavailable </h3>
                            <div className='d-flex justify-content-center'><a href='/'><button class="btn btn-success rounded mt-3">Go Home</button></a></div>
                        </div>             
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default PnfPage