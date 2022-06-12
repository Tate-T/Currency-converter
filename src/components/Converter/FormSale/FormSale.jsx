import s from '../Converter.module.css';
import rates from '../../../data.json';
import React, { useState } from 'react';

const FormSale = () => {
  const [currencySum, setcurrencySum] = useState('');
  const [currencyResult, setcurrencyResult] = useState(0);

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setcurrencySum(value);
  };

  const getAmountSale = () => {
    setcurrencyResult(currencySum / rates[1].sale);
  };

  const onSubmit = e => {
    e.preventDefault();
    getAmountSale();
  };
  return (
    <form onClick={onSubmit}>
      <div className={s.currency}>
        <div className={s.inputStyles}>
          <div className={s.currencyBuyText}>
            <h2>Select type of currency for SALE:</h2>
            <select className={s.inputCurrency}>
              <option value="1" className={s.option}>
                EUR
              </option>
              <option value="2" className={s.option}>
                USD
              </option>
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
          Amount in EUR:
          <span className={s.currencyResultSum}>
            {currencyResult.toFixed(2) + 'EUR'}
          </span>
        </p>
      </div>
    </form>
  );
};

export default FormSale;
