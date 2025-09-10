import React from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card';


function RecipePage() {
  return (
    <>
        <div className="container-fluid">

            <div className="row mt-5">
                
                {/* Left Sidebar */}
                <div className="col-md-3">
                <h3 className='text-center'>filter</h3>
                <div className='d-flex flex-column mt-4' style={{marginLeft:'150px'}}>
                    <button className='border-0 bg-transparent text-start mt-2'>All</button>
                    <button className='border-0 bg-transparent text-start mt-2'>Cuisine Type <span><FontAwesomeIcon icon={faCaretDown} /></span></button>
                    <button className='border-0 bg-transparent text-start mt-2'>Meals Type <span><FontAwesomeIcon icon={faCaretDown} /></span></button>
                </div>
                </div>

                {/* Right Section */}
                <div className="col-md-9">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="fw-bolder" style={{marginLeft:'150px'}}>All Recipes</h1>
                    <input type="text" className="form-control w-50 me-5 mt-4" placeholder="Search your Recipes Name Here!!!"/>
                </div>

                {/* cards */}

                    <div className="d-flex mt-5" style={{marginLeft:'150px'}} >
                        <div className="">
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
                        <div className="ms-4">
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
                        <div className="ms-4">
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

      </div>


        </div>
    
    </>
  )
}

export default RecipePage