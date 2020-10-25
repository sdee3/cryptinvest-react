import React from 'react';

export default function Currencies() {
  const [currencyValues, setCurrencyValues] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then((results) => results.json())
      .then((data) => {
        const result = data.map((currencyValue) => (
          <li className="list-group-item" key={currencyValue.symbol}>
            1 {currencyValue.name} ({currencyValue.symbol}) = ${' '}
            {currencyValue.price_usd}
          </li>
        ));
        setCurrencyValues(result);
      });
  }, []);

  return (
    <div>
      <ul className="list-group m-5">{currencyValues}</ul>
    </div>
  );
}
