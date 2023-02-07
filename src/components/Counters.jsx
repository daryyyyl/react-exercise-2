import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, products, onReset } =
      this.props;
    return (
      <div>
        <div className="row">
          <div className="com-sm-12">
            <button onClick={onReset} className="btn btn-primary mt-2">
              Reset
            </button>
          </div>
          {products.map((product) => (
            <div className="col-sm-4 p-3" key={product.id}>
              <Counter
                // onDelete={onDelete}
                counter={product}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
