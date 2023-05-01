import React from 'react';
import { Page } from './pages/page';
import { Routes, Route } from 'react-router-dom';
import style from './App.module.css'
import { MainePage } from './pages/mainePage/MainePage';
import { DetailsPage } from './pages/detailsPage/DetailsPage';
import { CartPage } from './pages/cartPage/CartPage';

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<MainePage />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/details' element={<DetailsPage />}/>
          <Route path='*' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
