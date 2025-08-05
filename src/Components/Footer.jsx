import { faArrowRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row px-5'>
          <div className='w-100 bg-success mt-5'>
            <div className="d-flex justify-content-between  p-2">
              <div className='col-md-6 mt-3 ms-3'>
                <a href="/" className="d-flex align-items-center text-decoration-none  ">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-white fa-lg fa-2xl" />
                  <h3 className="text-white mb-0 ms-2 fw-bolder">Cookpedia</h3>
                </a>
                <p className='mt-3 text-light '>Discover 100+ recipes in your hand with the best recipe. <br /> Help you to find the easiest way to cook.</p>
              </div>
              <div className='col-md-6 mt-3'>
                <h2 className='fw-bolder text-light ms-5  '>Sign up for our news letter</h2>

                {/* Input field */}

                <div>
                  <div className='d-flex'>
                    <input type="text" className='form-control bg-white ms-5 mt-2 ' placeholder='Enter your Mail ID.... '   />
                    <div className='bg-white rounded d-flex align-items-center justify-content-center mx-2' style={{width:"40px"}}><FontAwesomeIcon icon={faArrowRight} /></div>
                  </div>

                  {/* Links , Helps , social media */}

                  <div className="row mx-5 mt-3 text-light">
                    <div className="col-md-4">
                      <h4 className='fw-bold'>Links</h4>
                        <div>
                          <a className='text-light d-block' href=""  style={{textDecoration:'none'}}>Home</a>
                          <a className='text-light d-block' href=""  style={{textDecoration:'none'}}>Recipes</a>
                          <a className='text-light d-block' href=""  style={{textDecoration:'none'}}>About</a>
                          <a className='text-light d-block' href=""  style={{textDecoration:'none'}}>Contact</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                      <h4 className='fw-bold'>Help</h4>
                    </div>
                    <div className="col-md-4">
                      <h4 className='fw-bold'>Social Media</h4>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer