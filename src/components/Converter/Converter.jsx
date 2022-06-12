import React from "react";
import s from "./Converter.module.css";

const Converter = (currency) => {
  return (
    <form className={s.currencyForm}>
      <h2>Select type of currency:</h2>
      <select name="currency_1" className={s.inputFirst}>
        <option value="1">UAH</option>
        <option value="2">USD</option>
        <option value="3">EUR</option>
      </select>
      <select name="currency_2" className={s.inputCurrency}>
        <option value="1">UAH</option>
        <option value="2">USD</option>
        <option value="3">EUR</option>
      </select>
      {/* <input type="text" name="currency" list="currency" autoComplete="off" />
      <datalist id="currency">currency</datalist>
      <select type="text"></select> */}
      <p className={s.currencyResult}>Result: UAH</p>
    </form>
  );
};

export default Converter;
