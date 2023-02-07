import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Counters from "./components/Counters";

export default class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "product 1",
        quantity: 1,
        description: "This is kicks zone product number 1",
      },
      {
        id: 2,
        name: "product 2",
        quantity: 2,
        description: "This is kicks zone product number 2",
      },
      {
        id: 3,
        name: "product 3",
        quantity: 3,
        description: "This is kicks zone product number 3",
      },
      {
        id: 4,
        name: "product 4",
        quantity: 4,
        description: "This is kicks zone product number 4",
      },
      {
        id: 5,
        name: "product 5",
        quantity: 5,
        description: "This is kicks zone product number 5",
      },
    ],
  };

  // handleDelete = (id) => {
  //   this.setState({
  //     products: this.state.products.filter((counter) => counter.id !== id),
  //   });
  // };

  handleReset = () => {
    this.setState({
      products: this.state.products.map((counter) => {
        return {
          ...counter,
          quantity: 0,
        };
      }),
    });
  };

  handleIncrement = (id) => {
    this.setState({
      products: this.state.products.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            quantity: counter.quantity + 1,
          };
        }
        return counter;
      }),
    });
  };

  handleDecrement = (id) => {
    this.setState({
      products: this.state.products.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            quantity: counter.quantity - 1,
          };
        }
        return counter;
      }),
    });
  };

  getCountersWithValue = () => {
    return this.state.products.filter((product) => product.quantity > 0).length;
  };

  render() {
    return (
      <div>
        <NavBar totalCount={this.getCountersWithValue()} />
        <div className="container-sm">
          {
            <Counters
              products={this.state.products}
              // onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onReset={this.handleReset}
            />
          }
        </div>
      </div>
    );
  }
}
