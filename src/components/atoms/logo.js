import React from "react"
import styled from "styled-components"
import Photo from "../../images/logo-mini.png"

const Logo = () => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyItems: "center", boxSizing: "border-box"}}>
      <img src={Photo} alt="Photo" style={{width: "130px", height: "80px", margin: "0"}}/>
    </div>
  )
}

export default Logo
