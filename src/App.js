import React from 'react';
import CryptoList from './CryptoList'; // Adjust the path as necessary
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Header />
      <main>
        <CryptoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
