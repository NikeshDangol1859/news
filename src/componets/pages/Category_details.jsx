import React from 'react'
import { useParams } from 'react-router-dom'
import News from '../../data/News'


function Category_details() {
    const { cat_news } = useParams()
    const newsCategory = News.filter(fi=>cat_news===fi.Category)
    // console.log(newsCategory);
  if(newsCategory.length>0){
    return (
        <div className="container">
            {newsCategory.map((caat) => (
          <div className="container">
          <h1 className='text-start fs-2 m-3'>{caat.title}</h1>
          <small className="text-body-secondary"> {caat.description} </small>
          <div className="container">
              <div className="row">
              <div className="col-8">
              <img className='card-img-top m-4' src={caat.image} alt="" />  
              <p>
              <b className='fs-6'>By {caat.author} </b>
  
              <div className='mt-5 fs-4 text-justify'>
              {caat.full_news}
              </div>
                  </p>  
              </div>
              </div>
              
          </div>
      </div>
        ))}
        </div>
    )
  }
  else {
    return (
        <>
      
      <p className='text-center text-warning fs-3'>No News found in this category</p>

        </>
      
    );
  }
}


export default Category_details
