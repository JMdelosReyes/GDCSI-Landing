import React, { Component } from "react"
import styled from "styled-components"

class FormModal extends Component {
  state = {
    name: "",
    email: "",
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email } = this.state

    return (
      <>
        <form
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
        </form>
        {this.props.show ? (
          <>
            <Back onClick={this.props.backClicked} />
            <Form>
              <form
                name="contact"
                onSubmit={this.handleSubmit}
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <p>
                  <label>
                    Your Name:{" "}
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    Your Email:{" "}
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </Form>
          </>
        ) : null}
      </>
    )
  }
}

const Back = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const Form = styled.div`
  display: flex;
  display-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1500;
  background-color: white;
  width: 50%;
  height: 50%;
  padding: 16px;
  left: 25%;
  top: 25%;
  box-sizing: border-box;
`

export default FormModal
