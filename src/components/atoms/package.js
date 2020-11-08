import React from "react"
import styled from "styled-components"

const Package = ({ title, children, active }) => {
  return (
    <PackageWrapper className={active ? "active" : "not-active"}>
      <div className="content">
        <h2>{title}</h2>
        {children}
      </div>
    </PackageWrapper>
  )
}

const PackageWrapper = styled.article`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 350px;
  margin-bottom: 3rem;
 

  @media (min-width: 1400px) and (max-width: 1639px){
    margin-bottom: 7rem;
    max-width: 500px;
  }
  @media (min-width: 1640px){
    margin-bottom: 7rem;
    max-width: 280px;
  }
  .content {
    background: #F2BB63;
    color: black;
    text-align: center;
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0px 0px 22px 7px rgba(0, 0, 0, 0.25);
    
    .discount{
      color: #00BE0E
    }

    ul {
      padding-left: 0;
      list-style: none;
      margin: 2.5rem 0;

      li {
        line-height: 26px;
        padding-left: 0.5rem;
      }

      .linethrough {
        text-decoration: line-through;
        opacity: 0.25;
      }
    }
  }

  &.not-active {
    button {
      background: transparent;
      border: 1px solid #e609b5;
    }
  }

  &.active {
    order: 1;
    z-index: 3;
    
    @media (min-width: 1403px) {
      order: 0;
      transform: scale(1.25);
    }
    @media (min-width: 100px) and (max-width: 1403px){
      order: 0;
      transform: scale(1);
    }
    .content {
      background: #F2BB63;
    }
    &:hover {
      filter: brightness(120%);
      box-shadow: 0px 6px 24px rgba(242, 187, 99, 0.4);
    }
    &::before {
      content: "";
      position: relative;
      top: -5px;
      right: 0px;
      bottom: -5px;
      left: 0px;
      background: linear-gradient(to right, #e8cb38, #d68c15);
      z-index: -1;
      transform: skew(3deg, 3deg);
      border-radius: 4px;
    }
  }
`

export default Package





