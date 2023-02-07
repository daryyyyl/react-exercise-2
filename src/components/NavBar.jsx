import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-body-tertiary">
        <div className="container-sm">
          <span className="navbar-brand mb-0 h1">
            <strong>KICKS ZONE</strong>
            <button
              type="button"
              className="btn btn-transparent position-relative"
            >
              Cart
              <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
                {this.props.totalCount > 0 && this.props.totalCount}
              </span>
            </button>
          </span>
        </div>
      </nav>
    );
  }
}
