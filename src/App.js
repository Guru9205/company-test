import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
// import ProductDetails from './Pages/ProductDetails';
import NavBar from './components/Navbar';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/details' element={<ProductDetails />} /> */}
      </Routes>


    </>
  );
}

export default App;
