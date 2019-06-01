import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(state, inp) {
    let value = inp;
    this.setState({
      [state]: value
    });
  }

  render() {
    return (
      <div>
        <input
          className="PropertyName"
          onChange={e => {
            this.handleChange("name", e.target.value);
          }}
        />
        <input
          className="Address"
          onChange={e => {
            this.handleChange("address", e.target.value);
          }}
        />
        <input
          className="City"
          onChange={e => {
            this.handleChange("city", e.target.value);
          }}
        />
        <input
          className="State"
          onChange={e => {
            this.handleChange("state", e.target.value);
          }}
        />
        <input
          className="ZIP"
          onChange={e => {
            this.handleChange("zip", e.target.value);
          }}
        />
      </div>
    );
  }
}
