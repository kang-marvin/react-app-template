import React from "react";

class PrivateComponent extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <p>
            This is a private component. (Non Logged user can't view this)
          </p>
        </div>
      </div>
    );
  }
}

export default PrivateComponent;
