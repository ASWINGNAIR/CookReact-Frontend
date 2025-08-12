import React from 'react'

function AboutPage() {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-6 px-5">
                <div className='my-5 bg-success d-flex justify-content-center align-items-center' style={{width:"650px",height:"350px"}}>
                    <img style={{width:"350px",height:"250px"}} src="https://www.pngall.com/wp-content/uploads/2016/06/Healthy-Food-PNG-Image.png" alt="No Image" />
                </div>
            </div>
            <div className="col-md-6 px-5">
                <div className="my-5 d-flex flex-column justify-content-center align-items-center text-center" style={{ width: "650px", height: "350px" }}>
                    <h1 className="fs-1 fw-bolder">Welcome To <br /> CookPedia</h1>
                    <p style={{ maxWidth: "500px" }}>Discover 100+ recipes in your hand with the best recipe. Helping you find the easiest way to cook.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutPage