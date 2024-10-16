import React from 'react'
import { Link } from 'react-router-dom'
import Category from './../data/Category'
import Current from './Current'

function Post() {
  return (
    <>
    <div className="container">
  <div className="row justify-content-center">
    <div className="col-auto">
    <Link className='mx-auto' to='/'>
    <img src="https://jcss-cdn.kathmandupost.com/assets/images/logos/thekathmandupost-logo.png" alt="KTM News" />
    </Link>
    </div>
    <div className="container text-center">
  <div className="row">
    <div className="col">
      <Current/>
    </div>
    <div className="col fw-bolder">
      Without Fear or Favour
    </div>
    <div className="col font">
      Weather: 29<sup>o</sup>C Sunny day
    </div>
  </div>
</div>


<hr className="border border-danger border-2 opacity-50" />

  </div>
</div>
<section>
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className='categories'>
                <div className='d-flex align-items-center'>
                    <p className='text-danger fs-5 mb-0 me-3'>What's News:</p>
                    {Category.map((cat, index) => (
                        <div key={index} className='px-2'>
                            <ul className='list-unstyled m-0'>
                                <li>
                                    <Link to={`/category_details/${cat}`}>{cat}</Link>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</div>

<hr />

</section>

    
      
    </>
  )
}

export default Post
