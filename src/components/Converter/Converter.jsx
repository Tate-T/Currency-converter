import React from 'react';
import s from './Converter.module.css';

const Converter = currency => {
  return (
    <form className={s.currencyForm}>
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
        <input type="text" className={s.inputCurrency} />
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
        Amount in UAH: <span className={s.currencyResultSum}>3300 &#8372;</span>
      </p>
    </form>
  );
};

export default Converter;
