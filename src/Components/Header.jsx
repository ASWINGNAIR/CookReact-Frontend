import React from 'react'
import { faGraduationCap , faUser , faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'react-bootstrap/Dropdown'


function Header() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row px-5'>
          <div className='w-100 bg-success mt-5'>
            <div className="d-flex justify-content-between  p-2">

              {/* Logo */}

              <a href="/" className="d-flex align-items-center text-decoration-none">
                <FontAwesomeIcon icon={faGraduationCap} className="text-white fa-lg" />
                <h4 className="text-white mb-0 ms-2">Cookpedia</h4>
              </a>

              {/* Navigation Links */}
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link text-white " href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/recipe">Recipes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/contact">Contact</a>
                </li>
              </ul>

              {/* User Icon with Dropdown Arrow */}
              
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="d-flex align-items-center border-0"
                    >
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/login">Login</Dropdown.Item>
                      <Dropdown.Item href="/register">Register</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header


