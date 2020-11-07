import React, { Component } from "react"
import styled from "styled-components"
import { media } from "@utils/media"

class FormModal extends Component {
  render() {
    return this.props.show ? (
      <>
        <Back onClick={this.props.backClicked} />
        <Form>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </Form>
      </>
    ) : null
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
