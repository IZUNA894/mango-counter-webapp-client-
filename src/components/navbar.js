import React, { Component } from "react";
import Styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import Add from "./add.js"

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className={`brand-logo ${Styles.cBrandLogo}`}>
              MANGO's FARM
              <img className={`${Styles.icon}`} src="/mango.svg" />
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/add">Add</Link>
              </li>
              <li>
                <Link to="badges.html">Stats</Link>
              </li>
              <li>
                <Link to="collapsible.html">Sign-In</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
