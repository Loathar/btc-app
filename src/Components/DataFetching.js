import React, { useState, useEffect } from "react";
import axios from "axios";
import btcImg from "../img/btc.jpg";
import { Container } from "react-bootstrap";
import BuyBtc from "./BuyBtc";

function DataFetching() {
  const [price, setPrice] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/BTCUSD",
      headers: {
        "X-RapidAPI-Host":
          "bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "3f6982978bmsh3dae234e4dc4f41p149339jsn27cab1f94e3d",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setPrice(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const btcPrice = price.ask;
  const satoshiPrice = btcPrice / 100000000;

  const currentBtcPrice = (
    <div className="text-dark bg-light" id="current-price">
      Current BTC price = {btcPrice} USD
    </div>
  );

  // console.log(btcPrice, satoshiPrice, "The total sats", Math.floor(satsTotal));

  return (
    <React.Fragment>
      <Container className="bg-dark i" id="whatisbtc">
        <h1 className="text-light bg-dark mb-0">What is Bitcoin?</h1>
        <div className="text-light bg-dark mb-3">
          Bitcoin is the first and most widely recognized cryptocurrency. It
          enables peer-to-peer exchange of value in the digital realm through
          the use of a decentralized protocol, cryptography, and a mechanism to
          achieve global consensus on the state of a periodically updated public
          transaction ledger called a 'blockchain.'
        </div>
        <img src={btcImg} alt="bitcoin coins" className="img-fluid w-25 mb-3" />
        <div className="text-light bg-dark mb-3">
          Practically speaking, Bitcoin is a form of digital money that (1)
          exists independently of any government, state, or financial
          institution, (2) can be transferred globally without the need for a
          centralized intermediary, and (3) has a known monetary policy that
          arguably cannot be altered.
          <div className="mb-2 mt-2">
            At a deeper level, Bitcoin can be described as a political,
            philosophical, and economic system. This is thanks to the
            combination of the technical features it integrates, the wide array
            of participants and stakeholders it involves, and the process for
            making changes to the protocol. Bitcoin can refer to the Bitcoin
            software protocol as well as to the monetary unit, which goes by the
            ticker symbol BTC. Launched anonymously in January 2009 to a niche
            group of technologists, Bitcoin is now a globally traded financial
            asset with daily settled volume measured in the tens of billions of
            dollars.
          </div>{" "}
          <div className="mb-2">
            Although its regulatory status varies by region and continues to
            evolve, Bitcoin is most commonly regulated as either a currency or a
            commodity, and is legal to use (with varying levels of restrictions)
            in all major economies. In June 2021, El Salvador became the first
            country to mandate Bitcoin as legal tender.
          </div>
        </div>
      </Container>
      <BuyBtc btcPrice={currentBtcPrice} satoshiPrice={satoshiPrice} />
    </React.Fragment>
  );
  // return (
  //   <div className="btc-prices">
  //     <span className="btc-asking-price">BTC current asking price : {}</span>
  //     <span className="btc-asking-price-low">
  //       BTC asking price daily low : {price.low}
  //     </span>
  //     {/* <p>BTC AVERAGE {price.averages.month}</p> */}
  //     {/* <span> {price.changes.price.month}</span> */}
  //     <span className="btc-asking-price">
  //       Current time and date : {price.display_timestamp}
  //     </span>
  //   </div>
  // );
}

export default DataFetching;
