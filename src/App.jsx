// Estate Agent Market Insights App (React-only frontend with Zapier integration)

// --- App.jsx ---
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Flattened property data for Zapier
      const reportData = {
        recipient: 'shezaadhusain@gmail.com',
        subject: 'UK Property Market Report',
        currentRate: '5-year fixed: 4.2%',
        rateTrend: 'Rates down 0.25% this month',
        implication: 'Likely to encourage buyers',
        londonListings: 12000,
        londonAvgPrice: '£550,000',
        londonChange: 'Stock up 5% this quarter',
        manchesterListings: 8000,
        manchesterAvgPrice: '£280,000',
        manchesterChange: 'Stock up 3% this quarter',
        dev1Location: 'Liverpool City Centre',
        dev1Units: 150,
        dev1Completion: 'Q4 2026',
        dev1Impact: 'Likely to increase affordable housing options',
        dev2Location: 'Birmingham Eastside',
        dev2Units: 320,
        dev2Completion: 'Q2 2025',
        dev2Impact: 'May drive prices down slightly in the area'
      };

      const response = await axios.post(
        'https://hooks.zapier.com/hooks/catch/23295493/uytfyor/',
        reportData
      );
      console.log('Server response:', response.data);
      setStatus('Report sent successfully!');
    } catch (error) {
      console.error('Error sending report:', error);
      setStatus('Failed to send report.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">📩 Get UK Property Market Report</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send Report
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}

export default App;
