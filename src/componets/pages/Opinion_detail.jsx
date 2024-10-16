import React from 'react'
import { useParams } from 'react-router-dom'
import Opinion_data from '../../data/Opinion_data'

function Opinion_detail() {
    let {opi_id}=useParams()
    let find_opp=Opinion_data.find((fii)=>opi_id==fii.id)
    console.log(find_opp);
  return (
    <>
    <div className="container">
        <h1 className='text-start fs-2 m-3'>{find_opp.title}</h1>
        <small className="text-body-secondary"> {find_opp.description} </small>
        <div className="container">
            <div className="row">
            <div className="col-8">
            <img className='card-img-top m-4' src={find_opp.image} alt="" />  
            <p>
            <b className='fs-6'>By {find_opp.author} </b>

            <div className='mt-5 fs-4 text-justify'>
            {find_opp.full_news}
            </div>

                
                </p>              
            
                
           
                
            </div>
            </div>
            
        </div>
    </div>
      
    </>
  )
}

export default Opinion_detail
