import React from 'react';
import { Header } from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import style from './App.module.css'
import { ManePage } from './pages/manePage/manePage';

function App() {
  return (
    <>
      <div className={style.App}>

      </div>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<ManePage />}/>
          <Route path='/cart'/>
          <Route path='/details'/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
