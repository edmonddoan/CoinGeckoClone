import React from 'react';

const CryptoListItem = ({ crypto }) => {
  return (
    <div className='crypto-item'>
      <h3>{crypto.name}</h3>
      <p>Price: ${crypto.quote.USD.price.toFixed(2)}</p>
      {/* Add more cryptocurrency details as needed */}
    </div>
  );
};

export default CryptoListItem;
