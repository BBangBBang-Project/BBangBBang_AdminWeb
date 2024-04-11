import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CCTV from './components/CCTV';
import Control from './components/Control';
import Main from './components/Main';
import MyPage from './components/MyPage';
import Nav from './components/Nav';

function App() {
  return (
  <BrowserRouter>
   <div className="App">
     <Nav/>
     <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/Control" element={<Control />}/>
      <Route path="/CCTV" element={<CCTV />}/>
      <Route path="/MyPage" element={<MyPage />}/>
      </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;