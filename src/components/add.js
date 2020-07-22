import React, { Component } from "react";
import Styles from "./add.module.css";
import M from "materialize-css";
import Axios from "axios";
import Moment from "moment";
export default class add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date.now(),
      amount: 0,
      description: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    Axios.post("/api/v1/records", {
      ...this.state,
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          let toastHTML = `Success`;
          M.toast({ html: toastHTML, classes: "green accent-4 center-align" });
          window.location.href = "/";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  handleDate = (e) => {
    console.log(e);
    this.setState({ date: e });
  };
  handleAmount = (e) => {
    console.log(e.target.value);
    this.setState({ amount: e.target.value });
  };
  handleDescription = (e) => {
    console.log(e.target.value);
    this.setState({ description: e.target.value });
  };
  componentDidMount() {
    var elems = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(elems, {
      onSelect: (date) => {
        console.log(date);
        this.handleDate(date);
      },
    });
  }
  render() {
    return (
      <div className={`row ${Styles.cRow}`}>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <h2 className="text-center center">ADD Amount</h2>
          <div className="input-field col s6">
            <input
              id="date"
              type="text"
              class="datepicker"
              onChange={(e) => this.handleDate(e)}
              value={Moment(this.state.date).format("dddd , Do MMM YYYY")}
            />
            <label htmlFor="date">Date</label>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="amount"
                type="number"
                className="validate"
                onChange={(e) => this.handleAmount(e)}
              />
              <label htmlFor="amount">Amount(kg)</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="description"
                className="materialize-textarea"
                onChange={(e) => this.handleDescription(e)}
              ></textarea>
              <label htmlFor="description">Description</label>
            </div>
          </div>

          <button
            className={`btn ${Styles.cBtn} waves-effect waves-light middle `}
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
