import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout.tsx';
import HomePage from './pages/homePage/homePage.tsx';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="/blogPage" element={<div>BlogPage</div>}/>
        </Route>
    </Routes>
  );
}

export default App;
