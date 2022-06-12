import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.container}>
      <h1 className={s.title}>CURRENCY CONVERTER</h1>
      <div className={s.rate}>
        <p className={s.rateDicribe}>exchange rate:</p>
        {/* <span>UAH: </span> */}
        <b className={s.rateType}>EUR: &zwnj;</b>
        <span>34,59 &#8372;</span>
        <b className={s.rateType}>USD: &zwnj;</b>
        <span>32,70 &#8372;</span>
      </div>
    </header>
  );
};

export default Header;
