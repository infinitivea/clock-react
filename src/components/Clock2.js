import React, { Component } from "react";

export default class Clock extends Component {
  state = {
    date: new Date(),
    location: this.props.location,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: this.props.bgColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>{this.props.location}</h1>
          <br />
          <h2>
            {this.state.date.toLocaleDateString("en-US", {
              timeZone: this.props.UTC,
            })}
          </h2>
          <br></br>
          <h3>
            {this.state.date.toLocaleTimeString("en-US", {
              timeZone: this.props.UTC,
            })}
          </h3>
        </div>
      </div>
    );
  }
}
