import React, { useState } from 'react';

export default function TradeForm({ addTrade }) {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('buy');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symbol || !quantity || !price) return;
    addTrade({ symbol: symbol.toUpperCase(), quantity: Number(quantity), price: Number(price), type });
    setSymbol('');
    setQuantity('');
    setPrice('');
    setType('buy');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <input
        type="text"
        placeholder="Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        style={{ flex: 1, padding: 5 }}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{ flex: 1, padding: 5 }}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ flex: 1, padding: 5 }}
      />
      <select value={type} onChange={(e) => setType(e.target.value)} style={{ flex: 1, padding: 5 }}>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>
      <button type="submit" style={{ padding: '5px 10px' }}>Add Trade</button>
    </form>
  );
}
