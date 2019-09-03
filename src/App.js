import React, { Component } from 'react';
import Header from './components/header/header'
import CustomerInfo from './components/body/customer-info/customer-info'
import CustomerChart from './components/body/customer-chart/customer-chart'
import "./App.scss"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <CustomerInfo />
          <CustomerChart />
        </div>
      </div>
    );
  }
}

export default App;
