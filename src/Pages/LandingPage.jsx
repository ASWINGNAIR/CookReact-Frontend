import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

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


        {/* To be continued */}



      </div>


      <Footer />
    </>
  )
}

export default LandingPage