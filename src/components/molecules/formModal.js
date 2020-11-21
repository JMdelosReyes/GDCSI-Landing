import React, { Component } from "react"
import styled from "styled-components"
import { media } from "@utils/media"

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
    if (this.state.name && this.state.email) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({ "form-name": "contact", ...this.state }),
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error))
    }
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
                {" "}
                <DivCenter>
                  <CenteredLabel>
                    Do you want more information about Self Service?
                  </CenteredLabel>
                </DivCenter>
                <ContentOffer>
                  Subscribe to our notifications list and get special offers
                  just for you!
                </ContentOffer>
                <DivCenter>
                  <p>
                    <label>
                      Your Name:{" "}
                      <input
                        required
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                      />
                    </label>
                  </p>
                </DivCenter>
                <DivCenter>
                  <p>
                    <label>
                      Your Email:{" "}
                      <input
                        required
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </label>
                  </p>
                </DivCenter>
                <DivCenter>
                  <CenteredRed>

                    Contact now and get early access. 1000 left.
                  </CenteredRed>
                </DivCenter>
                <DivCenter>
                  <Button type="submit">Subscribe</Button>
                </DivCenter>
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
  width: 80%;
  height: 70%;
  padding: 16px;
  left: 10%;
  top: 20%;
  box-sizing: border-box;
  border-radius: ${props => props.theme.button.radius};

  @media ${media.lg} {
    margin: auto;
    width: 50%;
    height: 50%;
    left: 25%;
    top: 25%;
  }
`

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.button.radius};
  font-weight: 500;
  padding: 0.75rem 2rem;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  transition: ${props => props.theme.animation.transition};

  &:hover {
    filter: brightness(105%);
    box-shadow: 0px 6px 24px rgba(242, 187, 99, 0.4);
  }
`
const DivCenter = styled.div`
  display: flex;
  justify-content: center;
`

const CenteredLabel = styled.h5`
  color: ${props => props.theme.colors.lightGray};
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const CenteredRed = styled.h5`
  color: red;
  font-size: 0.77837rem;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
 
  `
const ContentOffer = styled.h5`
  color: ${props => props.theme.colors.black};
  letter-spacing: 1px;
  margin-bottom: 1rem;
`

export default FormModal
