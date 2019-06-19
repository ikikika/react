import React, { Component } from "react";
import axios from "axios";

class CreateProduct extends Component {
  state = {
    name: "",
    price: "",
    quantity: "",
    errors: []
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newProduct = {
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity
    };
    axios
      .post("http://localhost:8000/api/product", newProduct, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.userToken}`
        }
      })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter item name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="Enter price"
                  value={this.state.price}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="quantity">quantity</label>
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                  placeholder="Enter quantity"
                  value={this.state.quantity}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
