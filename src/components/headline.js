import React, { Component } from "react";

export default class primer extends Component {
  render() {
    return (
      <div className={`row center-align`}>
        <div className={`col s4`}>
          <div class="card  darken-1">
            <div class="card-content text-">
              <span class="card-title">Quota</span>
              <p>{this.props.quota}</p>
            </div>
          </div>
        </div>

        <div className={`col s4`}>
          <div class="card white darken-1">
            <div class="card-content">
              <span class="card-title">Brought</span>
              <p>{this.props.brought}</p>
            </div>
          </div>
        </div>
        <div className={`col s4`}>
          <div class="card white darken-1">
            <div class="card-content">
              <span class="card-title">Remaining</span>
              <p>{this.props.remaining}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
