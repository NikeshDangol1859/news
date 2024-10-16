import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pagenotfound from './pages/Pagenotfound'
import News_detail from './pages/News_detail'
import Mid_detail from './pages/Mid_detail'
import Opinion_detail from './pages/Opinion_detail'
import Category_details from './pages/Category_details'
import National from './pages/National'


function Section() {
  return (
    <>
    <Routes>
           
            <Route path="/" element={<Home/>}/>
            <Route path="/news_detail/:news_id" element={<News_detail/>}/>
            <Route path="/mid_news/:mid_id" element={<Mid_detail/>}/>
            <Route path="/opinion_detail/:opi_id" element={<Opinion_detail/>}/>
            <Route path="/category_details/:cat_news" element={<Category_details/>}/>
            <Route path="/national" element={<National/>}/>
            <Route path="/*" element={<Pagenotfound/>}/>
        </Routes>
      
    </>
  )
}

export default Section
