import s from '../Converter.module.css';
import rates from '../../../data.json';
import React, { useState, useRef } from 'react';

const FormSale = () => {
  const [currencySum, setcurrencySum] = useState('');
  const [currencyResult, setcurrencyResult] = useState(0);
  const selectValue = useRef('USD');
  const [currencyType, setcurrencyType] = useState('');

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setcurrencySum(value);
  };

  const getAmountSale = () => {
    switch (selectValue.current.value) {
      case 'USD':
        setcurrencyResult(currencySum / rates[0].sale);
        setcurrencyType(rates[0].ccy);
        break;
      case 'EUR':
        setcurrencyResult(currencySum / rates[1].sale);
        setcurrencyType(rates[1].ccy);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    getAmountSale();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={s.currency}>
        <div className={s.inputStyles}>
          <div className={s.currencyBuyText}>
            <h2>Select type of currency for SALE:</h2>
            <select className={s.inputCurrency} ref={selectValue}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <h2>Enter the amount:</h2>
          <input
            type="text"
            placeholder="enter a sum"
            className={s.inputCurrency}
            name="currencySum"
            value={currencySum}
            onChange={handleInputChange}
          />
          <button className={s.currencyBtn} type="submit">
            Count
          </button>
        </div>
        <p className={s.currencyResult}>
          Amount in {currencyType}:
          <span className={s.currencyResultSum}>
            {currencyResult.toFixed(2)} {currencyType}
          </span>
        </p>
      </div>
    </form>
  );
};

export default FormSale;
