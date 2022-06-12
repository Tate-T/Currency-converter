import s from '../Converter.module.css';
import rates from '../../../data.json';
import React, { useState } from 'react';

const FormSale = () => {
  const [currencySum, setcurrencySum] = useState('');
  const [currencyResult, setcurrencyResult] = useState(0);
  const [selectValue, setSelectValue] = useState('USD');

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setcurrencySum(value);
  };

  const onChangeSelect = e => {
    const { value } = e.currentTarget;
    setSelectValue(value);
  };

  const getAmountSale = () => {
    switch (selectValue) {
      case 'USD':
        setcurrencyResult(currencySum / rates[0].sale);
        break;
      case 'EUR':
        setcurrencyResult(currencySum / rates[1].sale);
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
            <select className={s.inputCurrency} onChange={onChangeSelect}>
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
          Amount in USD:
          <span className={s.currencyResultSum}>
            {currencyResult.toFixed(2)} &#x24;
          </span>
        </p>
      </div>
    </form>
  );
};

export default FormSale;
