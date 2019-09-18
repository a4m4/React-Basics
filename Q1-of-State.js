import React from "react";
import ReactDOM from "react-dom";
import "./new.css";

class Room extends React.Component {
  state = {
    isLit: false
  };

  changeStatus = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";

    return (
      <div className={`room ${brightness}`}>
        the room is {this.state.isLit ? "Lit" : "Dark"}
        <br />
        <buton onClick={this.changeStatus}>Change ! </buton>
        {brightness}
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById("root"));
