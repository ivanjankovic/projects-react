import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };
  loadSamplesFishes = () => {
    this.setState({ fishes: sampleFishes });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Catch of a Day" />
          {/* <Fish />
          <Fish />
          <Fish />
          <Fish />
          <Fish />
          <Fish />
          <Fish />
          <Fish />
          <Fish /> */}
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSamplesFishes}/>
      </div>
    );
  }
}

export default App;
