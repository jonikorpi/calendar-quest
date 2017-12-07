import React from "react";
import { Persist } from "react-persist";
import Loadable from "react-loadable";

import StartMenu from "./StartMenu";
import ComponentLoader from "./ComponentLoader";

class State extends React.Component {
  state = {
    match: null,
    class: null,
  };

  render() {
    return [
      <Persist
        key="Persist"
        name="gameState"
        data={this.state}
        debounce={1000}
        onMount={data => this.setState(data)}
      />,
      <StartMenu key="StartMenu" {...this.state} />,
      <ComponentLoader key="Match" component={"Match"} {...this.state} />,
    ];
  }
}

export default State;
