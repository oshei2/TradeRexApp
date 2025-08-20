import React from 'react';

export default function TradeHistory({ trades }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Trade History</h2>
      {trades.length === 0 ? (
        <p>No trades logged yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #ccc' }}>Symbol</th>
              <th style={{ borderBottom: '1px solid #ccc' }}>Type</th>
              <th style={{ borderBottom: '1px solid #ccc' }}>Quantity</th>
              <th style={{ borderBottom: '1px solid #ccc' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((t, i) => (
              <tr key={i}>
                <td style={{ padding: 5 }}>{t.symbol}</td>
                <td style={{ padding: 5 }}>{t.type}</td>
                <td style={{ padding: 5 }}>{t.quantity}</td>
                <td style={{ padding: 5 }}>${t.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
