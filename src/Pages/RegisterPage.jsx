import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function RegisterPage() {
  return (
    <>
      
      <div className="container-fluid">
        <div className="row mt-5 align-items-center">
          
          {/* Left Area */}
          <div className="col-md-6 d-flex justify-content-center mt-5">
            <div className="bg-white shadow p-5 rounded-4 mt-5" style={{ maxWidth: "400px", width: "100%" }}>
              
              <div className="d-flex justify-content-center align-items-center mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-success" size="2x" />
                <h2 className="text-success mb-0 ms-2 fw-bold">Cookpedia</h2>
              </div>

              {/* Form */}
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control rounded-3 py-2"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control rounded-3 py-2"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control rounded-3 py-2"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-success w-100 rounded-3 py-2">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Area */}
          <div className="col-md-6 mt-5">
            <div>
              <h1 className="fw-bolder">Create New Account</h1>
              <p className="mt-3">What you will get?</p>
              <ul className="mt-3">
                <li>Different Recipes</li>
                <li>Easy way to make Recipes</li>
                <li>Save your Favourite Recipes</li>
                <li>Download your Recipes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage