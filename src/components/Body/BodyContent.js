import React from 'react';
import { animate } from "animate.css";

import "./Body.css";
import logo from "./logo.svg";

import { Login } from "../Login/Login";
import { Register } from "../Register/Register";

export class BodyContent extends React.Component {
  render() {
    return (
      <div className="text-center">
        <header className="mt-5">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main role="main">
          <h1 className="display-3">CryptInvest - Welcome!</h1>

          <div className="jumbotron animated bounceIn" style={{animationDuration: 3 + 's'}}>
            <div className="container">
              <h1>Trade global crypto markets with ease</h1>
              <p className="text-justify">CryptInvest is the next best cryptocurrency trading website for the biggest investors! Join our trustworthy network today and explore dozens of cryptocurrencies today!</p>
              <p><a className="btn btn-danger btn-lg" href="" role="button" data-toggle="modal" data-target="#registerModal">Start trading for free!</a></p>
            </div>
          </div>

          <Login />
          <Register />

          <div className="container">
            <div className="row">
              <div className="col">
                <i className="fa fa-info fa-2x"></i>
                <p className="text-justify">Our next generation trading platform offers you tight spreads and competitive margins across our full range of online cryptocurrencies. Trade on popular cryptocurrencies like Bitcoin, Ethereum, NEO, Ripple, and Litecoin.</p>
              </div>
              <div className="col">
                <i className="fa fa-globe fa-2x"></i>
                <p className="text-justify">We offer a platform with advanced crypto asset tracking for optimal performance in realtime. Our trading platforms has many options and cryptocurrencies to choose from. Timely and transparent withdrawal payments are available 24/7.</p>
              </div>
              <div className="col">
                <i className="fa fa-user fa-2x"></i>
                <p className="text-justify">With your very own free account, you will get access to many different virtual currencies. This website works by making external API calls to <a href="https://coinmarketcap.com">CoinMarketCap</a> to get the latest data on the exchange rates for all available cryptocurrencies.</p>
              </div>
            </div>
            <hr />
          </div> { /* End of container */}

          <div id="carouselExampleIndicators" className="carousel slide mb-5" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-80 m-auto" src="https://res.cloudinary.com/sdee3-com/image/upload/v1516288023/crypto_1_kkjgoj.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-80 m-auto" src="https://res.cloudinary.com/sdee3-com/image/upload/v1516288023/crypto_2_kyqrfl.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-80 m-auto" src="https://res.cloudinary.com/sdee3-com/image/upload/v1516288023/crypto_3_cnm6oi.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </main>
      </div>

    );
  }
}

