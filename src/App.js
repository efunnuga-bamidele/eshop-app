import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';

//Pages
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup'

function App() {
  return (
    <div className="App">
  

        <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />} end></Route>
              <Route path='/checkout' element={<Checkout />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signin' element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
