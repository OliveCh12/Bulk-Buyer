import React, { useState, useEffect } from "react";

const Cryptos = () => {
  const [hasError, setErrors] = useState(false);
  const [cryptos, setCryptos] = useState([]);
  const [state, setState] = useState({
    unit: 1,
    price: 1
  });

  const myInit = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default"
  };

  function fetchData(url) {
    fetch(url, myInit)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        setCryptos(json.data);
        console.log("parsed json", json.data);
      })
      .catch(function(ex) {
        setErrors(true);
        console.log("parsing failed", hasError, ex);
      });
  }

  useEffect(() => {
    fetchData("https://api.coinlore.com/api/tickers/");
  }, []);

  // function handleInputUnit(event) {
  //   setstate(event.target.value);
  // }
  // function handleInputPrice(event) {
  //   setstate({event.target.value);
  // }

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setState({
      [name]: value
    });

    console.log(state);
  }

  return (
    <div>
      <input
        name="unit"
        type="number"
        className="form-control"
        onChange={handleInputChange}
        placeholder="Total Unit"
      />
      <input
        name="price"
        type="number"
        className="form-control"
        onChange={handleInputChange}
        placeholder="Total Price"
      />

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Crypto ({cryptos.length})</th>
            <th scope="col">Unit price (USD)</th>
            <th scope="col">For {state.price} $</th>
            <th scope="col">Change 24h (%)</th>
            <th scope="col">Price (BTC)</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.rank}</th>
              <td>
                <strong>{item.symbol}</strong> <small>{item.name}</small>
              </td>
              <td>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "USD",
                  useGrouping: true
                }).format(item.price_usd)}
              </td>
              <td>{Math.round(state.price / item.price_usd) / 1000000 }</td>
              {item.percent_change_24h <= 0 ? (
                <td className="text-danger">{item.percent_change_24h} %</td>
              ) : (
                <td className="text-primary">{item.percent_change_24h} %</td>
              )}
              <td>{item.price_btc} ₿</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cryptos;
