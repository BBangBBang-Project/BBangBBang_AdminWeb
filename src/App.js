import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import CCTV from './pages/CCTV';
import Control from './pages/Control';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Recording from "./pages/Recording";

function App() {
  return (
  <BrowserRouter>
   <div className="App">
     <Header/>
     <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/Control" element={<Control />}/>
      <Route path="/CCTV" element={<CCTV />}/>
      <Route path="/MyPage" element={<MyPage />}/>
      <Route path="/Recording" element={<Recording/>}/>
      </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;