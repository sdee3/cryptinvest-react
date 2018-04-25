import React from "react";

export class Currencies extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyValues: []
    }
  }

  componentWillMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      .then(results => {
        return results.json();
      }).then(data => {
        let currencyValues = data.map((currencyValue) => {
          return (
            <li className="list-group-item" key={currencyValue.symbol}>
              1 {currencyValue.name} ({currencyValue.symbol}) =  $ {currencyValue.price_usd}
            </li>
          )
        });
        this.setState({ currencyValues: currencyValues });
        console.log("state", this.state.currencyValues);
      })
  }

  render() {

    return (
      <div>
        <ul className="list-group m-5">
          {this.state.currencyValues}
        </ul>
      </div>

    );
  }
}