import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoList from './CryptoList';
import CryptoDetailPage from './CryptoDetailPage'; // Adjust the path as necessary

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Your header content */}
        </header>
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/crypto/:id" element={<CryptoDetailPage />} />
        </Routes>
        <footer className="App-footer">
          {/* Your footer content */}
        </footer>
      </div>
    </Router>
  );
};

export default App;
