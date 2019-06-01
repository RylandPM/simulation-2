import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: 0,
      rent: 0
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
          className="PropertyMortgage"
          onChange={e => {
            this.handleChange("mortgage", e.target.value);
          }}
        />
        <input
          className="PropertyRent"
          onChange={e => {
            this.handleChange("rent", e.target.value);
          }}
        />
      </div>
    );
  }
}
