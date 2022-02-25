import React, {Component} from "react";

class Robot extends Component {
   
  //Create state
  state = {
    xoffset: 0,
    yoffset: 0,
    delta: 10,
  };

  moveRobotLeft = () => {
    this.setState(
      { yoffset: this.state.yoffset + this.state.delta}
    )
  };

  moveRobotRight = () => {
    this.setState(
      { xoffset: this.state.xoffset + this.state.delta });
  };
  

}