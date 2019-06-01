import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
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
          className="PropertyImage"
          onChange={e => {
            this.handleChange("img", e.target.value);
          }}
        />
      </div>
    );
  }
}
