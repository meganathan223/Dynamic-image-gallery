import React, { useState } from 'react';
import './App.css'

import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';

const categories = ['dessert', 'fruit-drink', 'street-food']
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <>
      <header>
        <h1 onClick={() => setCurrentPage('home')}>Dynamic Image Gallery</h1>
      </header>

      <main>
        {currentPage === 'home' && <Home setPage={setCurrentPage} />}
        {currentPage === 'gallery' && <Gallery />}
      </main>
    </>
  )
}

export default App
