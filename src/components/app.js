import React from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>MONOMART</h3>
        <div>
          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
        </div>
      </header>
      <FilterBar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
