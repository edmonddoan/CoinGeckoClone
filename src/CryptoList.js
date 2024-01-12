import React, { useState, useEffect } from 'react';
import CryptoListItem from './CryptoListItem'; // Adjust the import path as needed

const CryptoList = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/cryptocurrencies');
        const data = await response.json();
        setCryptocurrencies(data.data); // Adjust according to the actual structure of your response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Check if the cryptocurrencies array is available before trying to map over it
  return (
    <div>
      {cryptocurrencies && cryptocurrencies.map(crypto => (
        <CryptoListItem key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
};

export default CryptoList;
