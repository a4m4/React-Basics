# React-Basics
Just Basic stuff related to React!

To print HEllo in just React :
  import React from "react";
import ReactDOM from "react-dom";

function Hello () {

  return <div> Hello From the Other side ! </div>
}

ReactDOM.render(<Hello />, document.querySelector('#root'));

