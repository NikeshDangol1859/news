import React from 'react'
import { useParams } from 'react-router-dom'
import Mid_News from '../../data/Mid_news'

function Mid_detail() {
    let {mid_id}=useParams()
    let find_mid=Mid_News.find((fii)=>mid_id==fii.id)
  return (
    <>
    <div className="container">
        <h1 className='text-start fs-2 m-3'>{find_mid.title}</h1>
        <small className="text-body-secondary"> {find_mid.description} </small>
        <div className="container">
            <div className="row">
            <div className="col-8">
            <img className='card-img-top m-4' src={find_mid.image} alt="" />  
            <p>
            <b className='fs-6'>By {find_mid.author} </b>

            <div className='mt-5 fs-4 text-justify'>
            {find_mid.full_news}
            </div>

                
                </p>              
            
                
           
                
            </div>
            </div>
            
        </div>
    </div>
      
    </>
  )
}

export default Mid_detail
