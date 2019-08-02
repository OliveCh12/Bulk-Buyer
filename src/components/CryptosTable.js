import React from "react";

const CryptosTable = ({ collection }) => {
  return (
    <table className="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Price (USD)</th>
          <th scope="col">Rank</th>
        </tr>
      </thead>
      <tbody>
        {collection.map(item => (
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.symbol}</td>
            <td>{item.price_usd}</td>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptosTable;
