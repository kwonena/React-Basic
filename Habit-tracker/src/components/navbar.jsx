import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span className="navbar-name">Habit Tracker</span>
        <span className="navbar-count">{this.props.tatalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
