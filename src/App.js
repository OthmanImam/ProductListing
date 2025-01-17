import React from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MONOMART</h1>
      </header>
      <FilterBar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
