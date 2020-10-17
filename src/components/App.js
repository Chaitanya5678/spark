import React from "react";
import Navbar from "./Navbar";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

import { data } from "../data";
import { addToLeft } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    });

    store.dispatch(addToLeft(data));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <LeftColumn store={this.props.store} />
          <RightColumn store={this.props.store} />
        </div>
      </div>
    );
  }
}

export default App;
