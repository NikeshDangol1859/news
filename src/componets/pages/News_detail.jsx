import React from 'react'
import { useParams } from 'react-router-dom'
import News from '../../data/News'

function News_detail() {
    let {news_id}=useParams()
    let find_news=News.find((fi)=>news_id==fi.id)
    

    // console.log(find_news)
  return (
    <>
      <div className="container">
        <h1 className='text-start fs-2 m-3'>{find_news.title}</h1>
        <small className="text-body-secondary"> {find_news.description} </small>
        <div className="container">
            <div className="row">
            <div className="col-8">
            <img className='card-img-top m-4' src={find_news.image} alt="" />  
            <p>
            <b className='fs-6'>By {find_news.author} </b>

            <div className='mt-5 fs-4 text-justify'>
            {find_news.full_news}
            </div>

                
                </p>              
            
                
           
                
            </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default News_detail
