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
    cart: [
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
    ],
  };

  // handleDelete = (id) => {
  //   this.setState({
  //     products: this.state.products.filter((product) => product.id !== id),
  //   });
  // };

  handleReset = () => {
    this.setState({
      products: this.state.products.map((product) => {
        return {
          ...product,
          quantity: 0,
        };
      }),
    });
  };

  addToCart = (data) => {
    this.setState({
      // cartProducts: this.state.cart.map((item) => { // hindi gumagana
      //   if (item.id === data.id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + data.quantity,
      //     };
      //   }
      //   return item;
      // }),
      cartProducts: (this.state.cart = [...this.state.cart, data]), // gumagana
    });
  };

  handleIncrement = (id) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      }),
    });
  };

  handleDecrement = (id) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      }),
    });
  };

  getCartWithValue = () => {
    return this.state.cart.filter((item) => item.quantity > 0).length;
  };

  displayCart = () => {
    return this.state.cart;
  };

  render() {
    return (
      <div>
        <NavBar
          totalCount={this.getCartWithValue()}
          cartProducts={this.state.cart}
        />
        <div className="container-sm">
          {
            <Counters
              products={this.state.products}
              cartProducts={this.state.cart}
              addToCart={this.addToCart}
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
