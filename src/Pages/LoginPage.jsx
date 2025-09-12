import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function LoginPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <h1 className="text-center mt-5">Login</h1>
            <p className="text-center mt-3">More than 100 plus Recipes from around the world</p>

            <div className="bg-white shadow p-5 rounded-4 mt-4">
              {/* Logo */}
              <div className="d-flex justify-content-center align-items-center mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-success" size="2x" />
                <h2 className="text-success mb-0 ms-2 fw-bold">Cookpedia</h2>
              </div>

              {/* Form */}
              <form>
                <div className="mb-4">
                  <input type="email" className="form-control rounded-3 py-2" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <input type="password" className="form-control rounded-3 py-2" placeholder="Password"/>
                </div>
                <div>
                  <button type="submit" className="btn btn-success w-100 rounded-3 py-2">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage