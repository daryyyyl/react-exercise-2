import React, { Component } from "react";
import { Button, Space } from "antd";

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
        <div className="card p-1">
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
            {product.quantity > 0 && (
              <Space>
                <Button
                  type="primary"
                  className="ms-2"
                  onClick={() => this.props.addToCart(product)}
                >
                  Add<i className="fa-solid fa-cart-plus ms-2"></i>
                </Button>
              </Space>
            )}
          </div>
        </div>
      </>
    );
  }
}
