import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";

require("dotenv").config();

function App(props) {

  const { children } = props;

  return (
    <BrowserRouter>
      <div>
        <div className="sticky-top">
          <p>Header</p>
        </div>
        <div className="container-fluid">
          {children}
        </div>
        <p>Footer</p>
      </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
