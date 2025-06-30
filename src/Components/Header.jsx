import { faGraduationCap , faUser , faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
   

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
            <a className="nav-link text-white " href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Recipes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
        </ul>

        {/* User Icon with Dropdown Arrow */}
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faUser} className="text-white me-2" />
          <FontAwesomeIcon icon={faCaretDown} className="text-white" />
        </div>
      </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header


