import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Wizard extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="links">
          <button className="cancel">Cancel</button>
        </Link>
      </div>
    );
  }
}
