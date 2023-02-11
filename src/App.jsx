import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Header } from './components';
import  { Home, Cart }  from './pages'
// import { setPizzas } from './redux/actions/pizzas';
import { fetchPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    // axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    //   dispatch(setPizzas(data))
    // })
    dispatch(fetchPizzas());
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route 
            path='/' 
            element={<Home />} 
            />
            <Route 
            path='/cart' 
            element={<Cart />} 
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
