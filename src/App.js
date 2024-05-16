import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import CCTV from './pages/CCTV';
import Control from './pages/Control';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Recording from "./pages/Recording";
import OrderPage from "./pages/Order/OrderPage";

function App() {
  return (
  <BrowserRouter>
   <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Navigate to="/Main" />} />
      <Route path="/Main" element={<Main />}/>
      <Route path="/Control" element={<Control />}/>
      <Route path="/CCTV" element={<CCTV />}/>
      <Route path="/MyPage" element={<MyPage />}/>
      <Route path="/Recording" element={<Recording/>}/>
      <Route path="/OrderPage" element={<OrderPage/>}/>
      </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;