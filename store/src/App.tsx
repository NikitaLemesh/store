import React from 'react';
import { Header } from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import style from './App.module.css'
import { ManePage } from './pages/manePage/manePage';
import { DetailsPage } from './pages/detailsPage/detailsPage';

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<ManePage />}/>
          <Route path='/cart' />
          <Route path='/details' element={<DetailsPage />}/>
          <Route path='*' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
