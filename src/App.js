import React, { Component, Fragment } from 'react';
import Cart from './Cart';
import ProductList from './ProductList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let path = props.request ? props.request.url : window.location.pathname;
    this.state = {
      page: path === "/cart" ? "cart" : "home",
      ...(global.__ssrData__ || {})
    };
  }

  render() {
    let { page } = this.state;
    let products = this.props.products || this.state.products;

    return (
      <Fragment>
        <header className="App-header">
          <div className="header-left">
          <h1>Dog Things</h1>
          </div>

          <div className="header-right">
          <Cart />
          </div>
        </header>

        <main>
          {page === 'cart' ? (
            <p>Cart stuff here</p>
          ) : (
            <section className="product-page">
							<aside className="sideoptions">
								<h1>Categories</h1>
								<ul>
									<li>Bones</li>
									<li>Food brands</li>
								</ul>
							</aside>
							<ProductList products={products} />
						</section>
          )}

        </main>
      </Fragment>
    );
  }
}

export default App;
