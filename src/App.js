import React from 'react';
import './css/App.css';
import Head from './components/Header';
import Footer from './components/Footer';
// import Counter from './components/Counter';
import List from './components/List';


function App() {
  return (
    <div> 
      <Head/>
      {/* <Counter/> */}
      <List />
      <Footer/>
    </div>
  )
}

export default App;
