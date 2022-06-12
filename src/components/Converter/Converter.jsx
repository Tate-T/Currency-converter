import React, { useState } from 'react';
import s from './Converter.module.css';
import rates from '../../data.json';

const Converter = () => {
  const [currencySum, setcurrencySum] = useState('');

  const getAmount = () => {
    console.log('a');
  };

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setcurrencySum(value);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className={s.currencyForm} onClick={onSubmit}>
      <div className={s.inputStyles}>
        <div className={s.marginInput}>
          <h2>Select type of currency:</h2>
          <select name="currency_2" className={s.inputCurrency}>
            {/* <option value="1">UAH</option> */}
            <option value="2">EUR</option>
            <option value="3">USD</option>
          </select>
        </div>
        <h2>Enter the amount:</h2>
        <input
          type="text"
          className={s.inputCurrency}
          name="currencySum"
          value={currencySum}
          onChange={handleInputChange}
        />
        <button className={s.currencyBtn}>Count</button>
        {/* <select name="currency_1" className={s.inputFirst}>
        <option value="1">UAH</option>
        <option value="2">USD</option>
        <option value="3">EUR</option>
      </select> */}

        {/* <input type="text" name="currency" list="currency" autoComplete="off" />
      <datalist id="currency">currency</datalist>
      <select type="text"></select> */}
      </div>
      <p className={s.currencyResult}>
        Amount in UAH: <span className={s.currencyResultSum}>0 &#8372;</span>
      </p>
    </form>
  );
};

export default Converter;
