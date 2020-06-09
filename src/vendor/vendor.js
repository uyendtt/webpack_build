import "../scss/index.scss";
console.log("vendor");

import React from "react";
import ReactDOM from "react-dom";

const title = "React with Webpack and Babel fadfasdf";

ReactDOM.render(<div>{title}</div>, document.getElementById("app"));

module.hot.accept();
