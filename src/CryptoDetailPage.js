import React from 'react';

const CryptoDetailPage = ({ match }) => {
  // Assuming the crypto ID is passed as a URL parameter
  const cryptoId = match.params.id;

  // You can fetch more details using this ID or pass additional props
  // Here we'll just display the ID as a placeholder
  return (
    <div>
      <h1>Crypto Detail Page</h1>
      <p>Showing details for crypto ID: {cryptoId}</p>
      {/* More detailed information about the cryptocurrency goes here */}
    </div>
  );
};

export default CryptoDetailPage;
