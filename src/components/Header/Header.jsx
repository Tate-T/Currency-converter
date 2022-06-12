import React from 'react';
import s from './Header.module.css';
import rates from '../../data.json';

const Header = () => {
  return (
    <header className={s.container}>
      <h1 className={s.title}>CURRENCY CONVERTER</h1>
      <div className={s.rate}>
        <p className={s.rateDicribe}>exchange rate-sale:</p>
        <b className={s.rateType}>USD: &zwnj;</b>
        <span>{rates[0].sale} &#8372;</span>
        <b className={s.rateType}>EUR: &zwnj;</b>
        <span>{rates[1].sale} &#8372;</span>
        {/* {rates.map(({ currencyCodeA, rateSell }) => (
          <div key={currencyCodeA}>
            <b className={s.rateType}>{currencyCodeA}: &zwnj;</b>
            <span>{rateSell} &#8372;</span>
          </div>
        ))} */}
      </div>
      <div className={s.rate}>
        <p className={s.rateDicribe}>exchange rate-buy:</p>
        <b className={s.rateType}>USD: &zwnj;</b>
        <span>{rates[0].buy} &#8372;</span>
        <b className={s.rateType}>EUR: &zwnj;</b>
        <span>{rates[1].buy} &#8372;</span>
      </div>
    </header>
  );
};

export default Header;
