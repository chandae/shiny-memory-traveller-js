import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navbar /> }>
            <Route index element={ <Home /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
