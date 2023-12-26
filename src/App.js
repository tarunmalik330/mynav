
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Product from './components/Product';
// import About from './components/About'
import Services from './pages/Services';
import Contact from './pages/Contact';
import BtnPage from './pages/BtnPage';
import ImgPage from './pages/ImgPage';
import Mapcards from './components/Mapcards';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Services />}></Route>
        <Route path='/Contact' exact element={<Contact />}></Route>
        <Route path='/BtnPage' exact element={<BtnPage />}></Route>
        <Route path='ImgPage' exact element={<ImgPage />}></Route>
        {/* <Route path='/' exact element={<Header />}></Route> */}
        {/* <Route path='/Product' exact element={<Product />}></Route>
        <Route path='/About' exact element={<About />}></Route> */}
      </Routes>
      <Mapcards />
    </div>
  );
}

export default App;
