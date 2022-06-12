import s from './Converter.module.css';
import FormBuy from './FormBuy/FormBuy';
import FormSale from './FormSale/FormSale';

const Converter = () => {
  return (
    <>
      <FormBuy className={s.currencyForm} />
      <FormSale className={s.currencyForm} />
    </>
  );
};

export default Converter;
