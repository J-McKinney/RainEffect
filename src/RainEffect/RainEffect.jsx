import React, { Component } from "react";

class RainEffect extends Component {
  render() {
    return (
      <>
        <div ref={(ref) => (this.mount = ref)}></div>
        <div></div>
      </>
    );
  }
}

export default RainEffect;
