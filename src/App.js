import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layouts/footer';
import Header from './components/layouts/header';
import Search from './components/sections/search';
import Cart from './components/sections/panier';
import Login from './components/sections/login';
import Register from './components/sections/register';
import Home from './components/sections/home';
import { NotifProvider } from './components/myHook/notif';
import { useEffect, useState } from "react";
import JsonData from './data/data.json';

function App() {
  const [data, setData] = useState([]);
    useEffect(() => {
        setData(JsonData);
        // console.log(data);
    }, [data]);
  return (
    <Router>
      <div className="App">
        <Header />
        <NotifProvider>
          <Routes>
            <Route path='/' element={<Home data={data} />} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart panier={data.panier} />} />
          </Routes>
        </NotifProvider>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
