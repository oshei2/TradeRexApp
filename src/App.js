import React, { useState } from 'react';
import TradeForm from './TradeForm';
import TradeHistory from './TradeHistory';
import PortfolioChart from './PortfolioChart';
import logo from './logo.png';

export default function App() {
  const [trades, setTrades] = useState([]);

  const addTrade = (trade) => setTrades([...trades, trade]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        fontFamily: 'Poppins, Arial, sans-serif',
        color: '#333',
        padding: 20,
        position: 'relative',
      }}
    >
      <img
        src={logo}
        alt="TradeRex Logo"
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: 240,
          height: 'auto',
          borderRadius: 12,
          boxShadow: '0 0 20px #00BFFF33',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh', 
          gap: 20,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 36, marginBottom: 5, color: '#000000' }}>TradeRex</h1>
          <p style={{ fontStyle: 'italic', color: '#00796b', fontSize: 30 }}>
            Trade it. Track it. Tame the market.
          </p>
        </div>

        <div style={{ maxWidth: 900, width: '100%' }}>
          <TradeForm addTrade={addTrade} />
          <TradeHistory trades={trades} />
          <PortfolioChart trades={trades} />
        </div>
      </div>
    </div>
  );
}
