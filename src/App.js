import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
  HashRouter,
} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Directory from './Pages/Directory/Directory';
import About from './Pages/About/About';
import Header from './components/Header';
import NotFound from './Pages/404/NotFound';

import data from './yu-xiulan';
//import data from './bao-hailan';
import Profile from './Pages/Profile/Profile';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Homepage data={data}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/directory' element={<Directory data={data}/>}/>
          <Route path="/directory/:id" element={<Profile data={data} />} />
        </Routes>
      </HashRouter>
    </RecoilRoot>
  ); 
}

export default App;
