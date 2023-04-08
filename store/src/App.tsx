import React from 'react';
import { Card } from './components/card/card';
import { Header } from './components/header/header';
import style from './App.module.css'

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Card />
    </div>
  );
}

export default App;
