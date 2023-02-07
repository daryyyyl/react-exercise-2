import React, { Component } from "react";

export default class Counter extends Component {
  getName() {
    return <h1>Big Name</h1>;
  }

  getClassName() {
    if (this.props.counter.quantity > 0) {
      return "badge bg-primary";
    }
    return "badge bg-warning text-dark";
  }

  formatText() {
    if (this.props.counter.quantity > 0) {
      return this.props.counter.quantity;
    }
    return "Zero";
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }

  render() {
    const { counter, children } = this.props;
    return (
      <>
        {children}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{counter.name}</h5>
            <p className="card-text">{counter.description}</p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => this.props.onIncrement(counter.id)}
                type="button"
                className="btn btn-info p-0 px-2 fw-bold"
              >
                +
              </button>
              <span className="px-2 border">{this.formatText()}</span>
              <button
                onClick={() => this.props.onDecrement(counter.id)}
                disabled={counter.quantity === 0}
                type="button"
                className="btn btn-info p-0 px-2 fw-bold"
              >
                -
              </button>
            </div>
          </div>
        </div>
        {/* <img src={this.props.counter.image}></img>
        <a href={this.props.counter.image}>{this.getName()}</a> */}
        {/* <button
          onClick={() => this.props.onDelete(counter.id)}
          className="btn btn-danger ms-1"
        >
          Delete
        </button> */}
      </>
    );
  }
}
