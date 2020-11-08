import React from "react"
import styled from "styled-components"

const Packages = ({ title, para, children }) => {
  return (
    <PackagesWrapper>
      <div className="text-area">
        <h2>{title}</h2>
        <p>{para}</p>
      </div>
      <div className="flex-container">{children}</div>
    </PackagesWrapper>
  )
}

const PackagesWrapper = styled.section`
  padding: 100px 30px;
  text-align: center;
  background-color: #F9F6F3;
  .text-area {
    max-width: 500px;
    margin: 0 auto;

    @media (min-width: 1200px) {
      max-width: 650px;
    }
  }

  h2 {
    
  }

  .flex-container {
    width: 50%;
    flex-direction: column;
    padding-top: 80px;
    align-items: center;
    justify-content: space-around;
    display: flex;
   
    
    @media (min-width: 1512px) {
      flex-direction: row;
      flex-wrap: wrap;
      margin: auto;
      justify-content: space-between;
      width: 80%;
      text-align: center;
      align-items: center;
    }
    @media (min-width: 1640px){
      flex-direction: row;
      flex-wrap: wrap;
      margin: auto;
      justify-content: space-around;
      width: 80%;
      text-align: center;
      align-items: center;
    }
    
    @media (max-width: 1511px) {
      flex-direction: column;
      flex-wrap: wrap;
      margin: auto;
      justify-content: center;
      width: 100%;
      text-align: center;
      align-items: center;

    }

  }
`

export default Packages
