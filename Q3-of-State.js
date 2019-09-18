import React from "react";
import ReactDOM from "react-dom";

class Room extends React.Component {
  state = {
    temp: 72
  };

  onAdd = () => {
    this.setState({
      temp: this.state.temp + 1
    });
  };

  onSubtract = () => {
    this.setState({
      temp: this.state.temp - 1
    });
  };

  render() {
    return (
      <div>
        The Current Temperature is {this.state.temp}
        <br />
        <buton onClick={this.onAdd}> + </buton>
        <br />
        <buton onClick={this.onSubtract}> - </buton>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById("root"));
