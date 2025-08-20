import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function PortfolioChart({ trades }) {
  let cumulative = 0;
  const labels = trades.map((_, i) => `Trade ${i + 1}`);
  const dataPoints = trades.map(({ quantity, price, type }) => {
    cumulative += type === 'buy' ? -quantity * price : quantity * price;
    return cumulative;
  });

  const netProfit = cumulative;

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Portfolio Value ($)',
        data: dataPoints,
        borderColor: netProfit >= 0 ? '#4caf50' : '#f44336',
        backgroundColor: 'rgba(0,188,212,0.1)',
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#00bcd4',
      },
    ],
  };

  return (
    <div style={{ marginTop: 40 }}>
      <h2 style={{ fontSize: 32, textAlign: 'center', color: netProfit >= 0 ? '#4caf50' : '#f44336' }}>
        Portfolio: ${netProfit.toFixed(2)}
      </h2>
      {trades.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#555' }}>No trades to calculate P/L.</p>
      ) : (
        <Line data={data} />
      )}
    </div>
  );
}
