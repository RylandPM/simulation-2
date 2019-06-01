import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import House from "../House/House";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }
  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios.get("/api/houses").then(response => {
      this.setState({
        houses: response.data
      });
    });
  }

  deleteHouse(id) {
    axios.delete(`/api/houses/${id}`).then(this.getHouses);
  }

  render() {
    const { houses } = this.state;
    const houseDisplay = houses.map(house => {
      return <House house={house} deleteHouse={this.deleteHouse} />;
    });
    return (
      <div>
        <Link to="/wizard" classname="links">
          <button className="New_Property">Add New Property</button>
        </Link>
        <div>{houseDisplay}</div>
      </div>
    );
  }
}
