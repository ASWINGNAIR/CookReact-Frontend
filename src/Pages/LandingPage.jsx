import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Card from 'react-bootstrap/Card';

function LandingPage() {
  return (
    <>
      <Header />


      <div className='container-fluid '>

        {/* Image with the text in the home */}

        <div className='row px-5 align-items-center'>
          <div className='w-100 bg-success'>
            <div className="d-flex justify-content-between p-2 my-4">
              <div className="col-md-6 ps-5 ms-5">
                <h1 className="fw-bolder text-light display-3">
                  The Easiest <br />
                  Way To Make Your <br />
                  Favorite Meal <span className="fs-1">.</span>
                </h1>
                <p className="text-light fs-5 mt-4">
                  Discover 100+ recipes in your hand with the best recipe. <br />
                  Help you to find the easiest way to cook.
                </p>
                <button className="btn btn-warning mt-3 fw-bold px-4 py-2 shadow-sm rounded">
                  Explore our Recipes
                </button>
              </div>
              <div className="col-md-6 d-flex justify-content-center p-5 ">
                <img className='w-50' src="https://www.pngall.com/wp-content/uploads/2/Healthy-Meal.png" alt="Food Image" />
              </div>
            </div>
          </div>
        </div>

        {/* Popular recipe of the week  */}

        <div className="row p-5">
          <h1 className='fw-bold fs-1 mx-5'>Popular Recipe of the Week</h1>
          <div className='d-flex justify-content-between m-5'>
            <p className='fs-6'>Our popular recipes of the week</p>
            <a href="" className='me-5 fs-5'>View All</a>
          </div>
        </div>


        {/* Cards */}
        <div className='container'>
          <div className="row ms-5 pb-5">
            <div className="col-md-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>


        {/* Just a small ad section*/}
        <div className="row align-items-center my-5 mx-5" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/07/58/26/62/360_F_758266271_yksdY7RLYIIY6jofjJorjylEDOvgcuze.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px' }}>
          <div className="col-lg-6 p-5 mt-5 ms-5">
            <div className="bg-warning rounded p-5 w-75">
              <h3 className="text-light">50+ Recipes That Are Very Quick And Fast</h3>
              <p className="mt-3">Find the perfect food ideas to start your day with the quick and easiest way.</p>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>


        {/* Download App */}
        {/* <div className='row px-5 align-items-center'>
          <div className='w-100 bg-success'>
            <div className="d-flex justify-content-between p-2 my-4">
              <div className="col-md-6 ps-5 ms-5">
                <div>
                  <img src="https://toppng.com/uploads/thumbnail/android-app-on-google-play-11568829115kt4gig8l67.png" alt="No Image" />
                </div>
              </div>
              <div className="col-md-6 p-4 ">
                <h2 className='justify-content-center'>Download App</h2>
                <h3 className='mt-3'>Download the App from App Store or <br /> Google Play for a better experience</h3>
              </div>
            </div>
          </div>
        </div> */}

        <div className='row px-5 align-items-center'>
          <div className='w-100 bg-success'>
            <div className="d-flex justify-content-between p-2 my-5">
              <div className="col-md-6 text-center mt-3">
                <img
                  src="https://toppng.com/uploads/thumbnail/android-app-on-google-play-11568829115kt4gig8l67.png"
                  alt="App Devices"
                  className="img-fluid"
                  style={{ width: "65%" }}
                />
              </div>

              <div className="col-md-6 text-white text-center mt-5">
                <h1 className="display-4 fw-bold">Download App</h1>
                <p className="lead mb-4">
                  Download the App from App Store or <br /> Google Play for a better experience
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                      alt="Google Play"
                      style={{ width: '180px', height: 'auto' }}
                    />
                  </div>
                  <div>
                    <img
                      src="https://benic360.com/wp-content/uploads/2020/06/apple-store-icon-png-8.png"
                      alt="App Store"
                      style={{ width: '180px', height: 'auto',marginTop:"-19px" }}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

          {/* Client Testimonial */}
          




      </div>


      <Footer />
    </>
  )
}

export default LandingPage