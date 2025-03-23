import './App.css';
import {
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';
//import Homepage from './Pages/Homepage/Homepage';
import Directory from './Pages/Directory/Directory';
import About from './Pages/About/About';
import Header from './components/Header';
import NotFound from './Pages/404/NotFound';
import data from './data/data';
import Profile from './Pages/Profile/Profile';
import { RecoilRoot } from 'recoil';
import React from 'react';
import Process from './Pages/Handbook/Process'; 

function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='*' element={<NotFound />} />
          {/*<Route path='/' element={<Homepage data={data}/>}/> */}
          <Route path='/about' element={<About/>}/>
          <Route path='/directory' element={<Directory data={data}/>}/>
          <Route path="/directory/:id" element={<Profile data={data} />} />
          <Route path='/handbook' element={<Process />} />
        </Routes>
      </HashRouter>
    </RecoilRoot>
  ); 
}

export default App;
