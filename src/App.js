import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pagesize = 9;
  const [progress, setProgress] = useState(0)
  
  const apiKey = process.env.REACT_APP_NEWS_API
    return (
      <div>
        <Router>
          <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        {/* <NewsComponent apiKey={apiKey} setProgress = {setProgress} pageSize={pagesize} country={"in"} category={"sports"} /> */}
          <Routes>
            <Route path='/'  element={<NewsComponent key="general" apiKey={apiKey} setProgress = {setProgress} pageSize={pagesize} country={"in"} category={""} />}></Route>
            <Route path='/general'  element={<NewsComponent key="general1" apiKey={apiKey} setProgress = {setProgress} pageSize={pagesize} country={"in"} category={"general"} />}></Route>
            <Route path='/business'  element={<NewsComponent key="business" apiKey={apiKey} setProgress = {setProgress} pageSize={pagesize} country={"in"} category={"business"} />}></Route>
            <Route path='/entertainment'  element={<NewsComponent key="entertainment" apiKey={apiKey} setProgress = {setProgress} pageSize={pagesize} country={"in"} category={"entertainment"} />}></Route>
            <Route path='/health'  element={<NewsComponent key="health" apiKey={apiKey} setProgress = {setProgress} pageSize={pagesize} country={"in"} category={"health"} />}></Route>
            <Route path='/science'  element={<NewsComponent key="science" apiKey={apiKey} setProgress = {setProgress} pageSize={pagesize} country={"in"} category={"science"} />}></Route>
            <Route path='/sports' element={<NewsComponent  key="sports" apiKey={apiKey} setProgress = {setProgress} pageSize={pagesize} country={"in"} category={"sports"} />}></Route>
            <Route path='/technology'  element={<NewsComponent key="technology" apiKey={apiKey} setProgress = {setProgress} pageSize={pagesize} country={"in"} category={"technology"} />}></Route>
          </Routes>
        </Router>
      </div>
    )
  
}

export default  App;