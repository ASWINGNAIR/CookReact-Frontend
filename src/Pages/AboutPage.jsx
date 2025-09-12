import React from 'react'
import VegImg from '../assets/vegetable_Img.png'
import ChefImg from '../assets/Chef_Img.png'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function AboutPage() {
  return (
    <>
        <Header/>
        <div className='container-fluid'>
    
            {/* Welcome Note  */}
    
            <div className="row">
                <div className="col-md-6 px-5">
                    <div className='my-5 bg-success d-flex justify-content-center align-items-center' style={{width:"650px",height:"350px"}}>
                        <img style={{width:"350px",height:"250px"}} src={VegImg} alt="No Image" />
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
    
            {/* About Us */}
    
            <div className="row">
                <div className="col-md-6 px-5">
                    <div className="my-5 d-flex flex-column justify-content-center align-items-center text-center" style={{ width: "650px" }}>
                        <h1 className="fs-2 fw-bolder mb-4">About Us</h1>                   
                        <p style={{ maxWidth: "600px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit 
                        laboriosam, deleniti itaque dolorem ipsum beatae voluptate delectus obcaecati.
                        </p>
    
                        <ul className="text-start" style={{ maxWidth: "600px" }}>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Reprehenderit laboriosam, deleniti itaque dolorem ipsum beatae voluptate delectus.</li>
                        <li>Sit amet consectetur adipisicing elit.</li>
                        <li>Aliquid expedita dolorem at cum impedit asperiores ratione quas veniam distinctio.</li>
                        </ul>
    
                        <button className="btn btn-warning mt-3 px-4 py-2 fw-bold">Know More About Us</button>
                    </div>
                </div>
    
                <div className="col-md-6 px-5">
                    <div className='my-5 d-flex justify-content-center align-items-center' style={{width:"650px",height:"350px"}}>
                        <img style={{width:"350px",height:"250px"}} src={ChefImg} alt="No Image" />
                    </div>
                </div>
            </div>
    
        </div>
        <Footer/>
    </>
  )
}

export default AboutPage