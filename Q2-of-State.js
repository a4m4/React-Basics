import React from "react";
import ReactDOM from "react-dom";
import "./new.css";

class Room extends React.Component {
  state = {
    isLit: true
  };

  onLight = () => {
    this.setState({
      isLit: true
    });
  };

  offLight = () => {
    this.setState({
      isLit: false
    });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";

    return (
      <div className={`room ${brightness}`}>
        Lights Are {this.state.isLit ? "Lit" : "Dark"}
        <br />
        <buton onClick={this.onLight}> On! </buton>
        <br />
        <buton onClick={this.offLight}> Off ! </buton>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById("root"));
