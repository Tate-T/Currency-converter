import './App.css';
import Header from './components/Header/Header.jsx';
import Converter from './components/Converter/Converter.jsx';
import getCurrencyRateApi from './services/converterApi';
import { useState, useEffect } from 'react';

function App() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getCurrencyRateApi().then(response => {
      setRates(response.rates)
    })
  }, [])

  return (
    <div className="App">
      <Header rates={rates} />
      <Converter />
    </div>
  );
}

export default App;
