import React from 'react'
import { Link } from 'react-router-dom';
import Category from '../../data/Category'
import News from '../../data/News'
import Mid_News from '../../data/Mid_news';
import Opinion_data from '../../data/Opinion_data';



function Home() {
  return (
    <>
    <div className="d-flex flex-wrap text-center">
    <div className="flex-fill p-2 col-6 col-md-4">
  {News.map((news) => (
    <Link to={`/news_detail/${news.id}`} className="col-md-12 d-flex my-3" key={news.id}>
      <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">    
    <div className="col-md-8">
      <div className="card-body text-start">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text"><small className="text-body-secondary">By {news.author} </small></p>
        <p className="card-text">{news.description}</p>
        
      </div>
    </div>
    <div className="col-md-4 d-flex align-items-center justify-content-center p-1">
      <img src={news.image} className="img-fluid rounded" alt="news" />
    </div>
  </div>
</div>

    </Link>
  ))}
</div>

  <div className="flex-fill p-2 col-6 col-md-4">
  {Mid_News.map((mid) => (
    <Link to={`/mid_news/${mid.id}`} className="col-md-12 d-flex my-3" key={mid.id}>
      <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">  
  <div className="col-md-12 d-flex align-items-center justify-content-center p-1">
      <img src={mid.image} className="img-fluid rounded" alt="news" />
    </div>  
    <div className="col-md-8">
      <div className="card-body text-start">
        <h5 className="card-title">{mid.title}</h5>
        <p className="card-text"><small className="text-body-secondary">By {mid.author} </small></p>
        <p className="card-text">{mid.description}</p>
        
      </div>
    </div>
    
  </div>
</div>

    </Link>
  ))}

    
  </div>
  <div className="flex-fill p-2 col-6 col-md-4">
    <h1 className='text-start text-danger'>Opinion</h1>
    {Opinion_data.map((opi) => (
    <Link to={`/opinion_detail/${opi.id}`} className="col-md-12 d-flex my-3" key={opi.id}>
      <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">    
    <div className="col-md-12">
      <div className="card-body text-start">
        <h5 className="card-title">{opi.title}</h5>
        {/* <p className="card-text"><small className="text-body-secondary">By {opi.author} </small></p> */}
        <p className="card-text">{opi.description}</p>
        
      </div>
    </div>    
  </div>
</div>

    </Link>
  ))}
  </div>
</div>



    

      
    </>
  )
}

export default Home
