import React, { Component } from "react";

export default class House extends Component {
  render() {
    const { house, deleteHouse } = this.props;
    return (
      <div>
        <img src={house.img} />
        <h2>Property Name: {house.name}</h2>
        <h2>Address: {house.address}</h2>
        <h2>City: {house.city}</h2>
        <h2>Zip: {house.zip}</h2>
        <h2>Monthly Mortgage: {house.mortgage}</h2>
        <h2>Desired Rent: {house.rent}</h2>
        <button onClick={deleteHouse}>Remove Listing</button>
      </div>
    );
  }
}
