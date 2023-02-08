import React, { Component } from "react";

export default class Counter extends Component {
  getName() {
    return <h1>Big Name</h1>;
  }

  getClassName() {
    if (this.props.product.quantity > 0) {
      return "badge bg-primary";
    }
    return "badge bg-warning text-dark";
  }

  formatText() {
    if (this.props.product.quantity > 0) {
      return this.props.product.quantity;
    }
    return "Zero";
  }

  formatButton() {
    if (this.props.product.quantity > 0) {
      return this.props.product.quantity;
    }
    return;
  }

  componentWillUnmount() {
    // console.log("unmounting...");
  }

  render() {
    const { product, children, cart, addToCart } = this.props;
    return (
      <>
        {children}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => this.props.onIncrement(product.id)}
                type="button"
                className="btn btn-info p-0 px-2 fw-bold text-white"
              >
                +
              </button>
              <span className="px-2 border">{this.formatText()}</span>
              <button
                onClick={() => this.props.onDecrement(product.id)}
                disabled={product.quantity === 0}
                type="button"
                className="btn btn-info p-0 px-2 fw-bold text-white"
              >
                -
              </button>
            </div>
            <br />
            {product.quantity > 0 && (
              <button
                className="btn btn-primary my-2"
                onClick={() => this.props.addToCart(product)}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
        {/* <img src={this.props.product.image}></img>
        <a href={this.props.product.image}>{this.getName()}</a> */}
        {/* <button
          onClick={() => this.props.onDelete(product.id)}
          className="btn btn-danger ms-1"
        >
          Delete
        </button> */}
      </>
    );
  }
}
