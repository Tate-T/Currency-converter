import s from '../Converter.module.css';
import rates from '../../../data.json';
import React, { useState } from 'react';

const FormBuy = () => {
  const [currencySum, setcurrencySum] = useState('');
  const [currencyResult, setcurrencyResult] = useState(0);

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setcurrencySum(value);
  };

  const getAmountBuy = () => {
    // const option = document.querySelector('.option');
    // switch (option.getAttribute('value')) {
    //   case '1':
    //     setcurrencyResult(rates[1].buy * currencySum);
    //     break;
    //   case '2':
    //     setcurrencyResult(rates[0].buy * currencySum);
    //     break;
    //   default:
    //     return;
    // }
    setcurrencyResult(rates[0].sale * currencySum);
  };

  const onSubmit = e => {
    e.preventDefault();
    getAmountBuy();
  };
  return (
    <form onClick={onSubmit}>
      <div className={s.currency}>
        <div className={s.inputStyles}>
          <div className={s.currencyBuyText}>
            <h2>Select type of currency for BUY:</h2>
            <select className={s.inputCurrency}>
              <option value="1" className={s.option}>
                USD
              </option>
              <option value="2" className={s.option}>
                EUR
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
          Amount in UAH:
          <span className={s.currencyResultSum}>
            {currencyResult.toFixed(2)} &#8372;
          </span>
        </p>
      </div>
    </form>
  );
};

export default FormBuy;
