import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark  ">
  <div className="container text-light ">    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        {/* side bar */}
        
  <button className="btn btn-light" type="button" ><i className="fa-solid fa-list" />
</button>


        {/* side bar */}
        <li className="nav-item">
          <Link className="nav-link  btn btn-outline-success d-inline-flex focus-ring  px-2 text-decoration-none rounded-2 text-light"  aria-current="page" to="/national">National</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  btn btn-outline-success d-inline-flex focus-ring  px-2 text-decoration-none rounded-2 text-light" aria-current="page" to="/politics">Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  btn btn-outline-success d-inline-flex focus-ring  px-2 text-decoration-none rounded-2 text-light" aria-current="page" to="/valley">Valley</Link>          
        </li>
        <li className="nav-item">
          <Link className="nav-link  btn btn-outline-success d-inline-flex focus-ring  px-2 text-decoration-none rounded-2 text-light" aria-current="page" to="/sports">Sports</Link>          
        </li>
        <li className="nav-item">
          <Link className="nav-link  btn btn-outline-success d-inline-flex focus-ring  px-2 text-decoration-none rounded-2 text-light" aria-current="page" to="/cl_style">Culture & Life style</Link>          
        </li>

      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Nav
