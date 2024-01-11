import React from 'react';
import './App.css';
// Header component
const Header = () => {
  return (
    <header>
      <h1>CryptoTracker</h1>
      {/* Add navigation and other header elements here */}
    </header>
  );
};

// Cryptocurrency list item component
const CryptoListItem = ({ crypto }) => {
  return (
    <div>
      <h3>{crypto.name}</h3>
      <p>Price: {crypto.price}</p>
      {/* Add more cryptocurrency details here */}
    </div>
  );
};

// Main cryptocurrency list component
const CryptoList = () => {
  const cryptocurrencies = [
    { name: 'Dogecoin', price: '50000' }, // Dummy data, replace with API data
    { name: 'Shiba Inu', price: '4000' },
    // Add more cryptocurrencies or fetch from an API
  ];

  return (
    <div>
      {cryptocurrencies.map((crypto, index) => (
        <CryptoListItem key={index} crypto={crypto} />
      ))}
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer>
      <p>MemeView © 2024</p>
    </footer>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <CryptoList />
      </main>
      <Footer />
    </div>
  );
};

export default App;