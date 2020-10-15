import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours:
        this.props.location === "Japan"
          ? new Date().getHours() + 2
          : this.props.location === "London"
          ? new Date().getHours() - 6
          : new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    };
  }

  tick() {
    this.setState((state) => ({
      hours: state.minutes >= 59 ? state.hours + 1 : state.hours,
      minutes: state.seconds >= 59 ? state.minutes + 1 : state.minutes,
      seconds: state.seconds >= 59 ? 0 : state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <>
        <div
          className={this.props.cn}
          style={{
            width: "90%",
            margin: "10px auto",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <h1>{this.props.location}</h1>
          <h2>
            {("00" + this.state.hours).substr(-2)} :{" "}
            {("00" + this.state.minutes).substr(-2)} :{" "}
            {("00" + this.state.seconds).substr(-2)}
          </h2>
        </div>
      </>
    );
  }
}
