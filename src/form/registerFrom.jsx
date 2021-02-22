import React from "react";
import Form from "./form";
import http from "./httpService";
import {toast} from "react-toastify";
import {apiRoot} from "../constants";

class Register extends Form {
  state = {
    data: {email: "", username: "", message: ""},
    errors: {},
  };

  handleSubmit = async (event) => {
    const {username, email, message} = this.state.data;
    event.preventDefault();
    const errors = this.validate();
    this.setState({errors: errors || {}});
    if (errors) return;

    const info = {name: username, email: email, message: message};
    const data = await http.post(apiRoot + '/message/', info);
    if (data["statusText"] === "Created") {
      this.setState({username: "", email: "", message: ""});
      toast.success("Thanks For Review");
      window.location = '/';
    }
  };

  render() {
    return (
        <React.Fragment>
          {this.renderInput("email", "Your Email", "text")}
          {this.renderInput("username", "Your Name", "text")}
          {this.renderInput("message", "Write Message", "text")}
          {this.renderButton("Submit")}
        </React.Fragment>
    );
  }
}

export default Register;
