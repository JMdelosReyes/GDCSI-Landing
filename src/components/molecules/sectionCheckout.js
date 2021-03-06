import React, { useEffect, useState, useRef } from "react"
import { withPrefix } from "gatsby"
import styled from "styled-components"
import Seperator from "@assets/seperators/a-seperator-4.svg"
import Container from "@atoms/container"
import SliderTestimonials from "@molecules/sliderTestimonials"
import { media } from "@utils/media"
import Button from "../atoms/button"
import FormModal from "./formModal"

const SectionCheckout = () => {
  const [loaded, setLoaded] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const scriptEl = useRef(null)

  // only add moonclerk.js when component mounts
  // useEffect(() => {
  //   const checkoutScript = document.createElement("script")
  //   checkoutScript.id = "checkoutScript"
  //   checkoutScript.src = withPrefix("/moonclerk.js")
  //   scriptEl.current.appendChild(checkoutScript)
  //   setLoaded(true)
  // }, [])

  return (
    <Container content id="contact-form">
      <CheckoutContainer>
        <Content>
          <h6>Contact</h6>
          <h1>Ready to change restaurant business model </h1>
          <p>
            Build Self Services in your restaurant and start earning money with health and without worries
          </p>
          {/* <Seperator /> */}
          {/* <SliderTestimonials /> */}
          <div style={{ textAlign: "center", margin: "50px auto 0 auto" }}>
            <Button
              style={{ cursor: "pointer" }}
              onClick={() => setShowForm(!showForm)}
            >
              Contact us
            </Button>
          </div>
          <FormModal show={showForm} backClicked={() => setShowForm(false)} />
        </Content>
        {/* PASTE MOONCLERK FORM HTML ID HERE */}
        {/* <Form id="mc5exp0qlk2y40" ref={scriptEl} /> */}
      </CheckoutContainer>
    </Container>
  )
}

export default SectionCheckout

const CheckoutContainer = styled(Container)`
  background-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.button.radius};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  max-width: 100%;
  grid-template-columns: var(--gridSplit);

  @media ${media.lg} {
    flex-direction: row;
  }
`

const Content = styled.div`
  padding: var(--spacingContent);
  width: 100%;

  @media ${media.lg} {
    margin: auto;
    width: 50%;
  }

  h6 {
    color: ${props => props.theme.colors.lightGray};
    letter-spacing: 3px;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  h1 {
    color: ${props => props.theme.colors.white};
  }

  p {
    color: ${props => props.theme.colors.lightGray};
  }
`

const Form = styled.div`
  padding: var(--spacingContent);
  width: 100%;

  @media ${media.lg} {
    width: 50%;
  }

  a {
    display: none;
  }
`
