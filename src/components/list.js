import React, { Component } from "react";
import Styles from "./list.module.css";
import Headline from "./headline";
import Moment from "moment";
import Axios from "axios";
import M from "materialize-css";

export default class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      quota: 10000,
      brought: 0,
      remaining: 0,
    };
  }
  async componentDidMount() {
    try {
      // Make a request for a user with a given ID
      let res = await Axios.get("/api/v1/stats");
      res = res.data;
      console.log(res);

      let totalSum = 0;
      let quota = 10000;
      let arr = res.data;
      arr.forEach((item) => (totalSum += item.sum));
      console.log(JSON.stringify(totalSum));
      let remaining = quota - totalSum;
      this.setState({ remaining, quota, brought: totalSum, data: res.data });
    } catch (err) {}
  }
  deleteItem = async (id) => {
    Axios.delete(`/api/v1/records/${id}`)
      .then(function (response) {
        console.log(response);
        if (response.status === 204) {
          let toastHTML = `Success`;
          M.toast({ html: toastHTML, classes: "green accent-4 center-align" });
          window.location.href = "/";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var items = this.state.data;
    var itemList = "";
    if (items.length === 0) {
      itemList = (
        <div className="">
          <p className="">No's Records for show.please Wait...or Add...</p>
        </div>
      );
    } else {
      itemList = items.map((item) => {
        let coloumns =
          item.records &&
          item.records.map((e) => {
            console.log(e);
            return (
              <tr>
                <td>{Moment(e.date).format("dddd , Do MMM YYYY")}</td>
                <td>{e.amount}</td>
                <td>{e.description}</td>
                <td>
                  <a
                    href="#"
                    className="waves-effect waves-light btn right"
                    onClick={() => {
                      this.deleteItem(e.id);
                    }}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          });
        return (
          <>
            <thead className="center-align" style={{ float: "right" }}>
              <tr className="center-align">
                <th className="center middle-align">{`${
                  months[item._id.month - 1]
                },${item._id.year}`}</th>
              </tr>
            </thead>
            {coloumns}
          </>
        );
      });
    }
    return (
      <>
        <Headline
          quota={this.state.quota}
          remaining={this.state.remaining}
          brought={this.state.brought}
        />
        <div className={`${Styles.cRow} row center-align`}>
          <div className="col s12">
            <h3 className={`center-align`}>Mangoes Brought so far...</h3>
            <table className="centered highlight">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>{itemList}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
