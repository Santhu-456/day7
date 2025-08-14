import React, { Component } from "react";
class UserStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Loading..."
    };
    console.log("[Mounted] UserStatus class component loaded");
  }

  componentDidMount() {
    
    setTimeout(() => {
      this.setState({ status: "Online" });
      console.log("[Fetched] Status: Online");
    }, 1000);
  }

  render() {
    const { username } = this.props;
    return (
      <div>
        <h2>User: {username}</h2>
        <p>Status: {this.state.status}</p>
      </div>
    );
  }
}

export default UserStatus;
