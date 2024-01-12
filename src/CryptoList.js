import React, { useState, useEffect } from 'react';
import CryptoListItem from './CryptoListItem'; // Adjust the path as necessary

const CryptoList = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/cryptocurrencies'); // Adjust this URL to your backend endpoint
        const data = await response.json();
        console.log(data); // Add this line to debug

        setCryptocurrencies(data.data.slice(0, 10)); // Ensure this matches the structure of your API response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
       {cryptocurrencies && cryptocurrencies.map(crypto => (<CryptoListItem key={crypto.id} crypto={crypto} />))}
    </div>
  );
};

export default CryptoList;
