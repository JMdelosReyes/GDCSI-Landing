import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "@utils/layout"
import SEO from "@utils/seo"
import Img from "gatsby-image"
import Button from "@atoms/button"
import ContentBlock from "@atoms/contentBlock"
import Container from "@atoms/container"
import List from "@atoms/list"
import Subheading from "@atoms/subheading"
import SectionHeader from "@molecules/sectionHeader"
import SectionSetup from "@molecules/sectionSetup"
import SectionCheckout from "@molecules/sectionCheckout"
import { MdDone, MdClear } from "react-icons/md"
import Packages from "@molecules/sectionPackage.js"
import Package from "@atoms/package.js"
import { IconContext } from "react-icons"
import { Link } from "react-scroll"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexImagesQuery {
      moonclerk: file(relativePath: { eq: "accepting-payments.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      gatsbyjs: file(relativePath: { eq: "fast-website.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      netlify: file(relativePath: { eq: "deploying-website.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <SectionHeader />
      <SectionSetup />
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.moonclerk.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading>Save money</Subheading>
          <h2>You will need less waiters.</h2>
          <p>
            Your waiters will only have to take care of serving.
            Taking note of customers will be left to Self Service, saving time and money.
          </p>
          {/* <List>
            <li>Send funds to your bank account automatically</li>
            <li>Integrate with hundreds of third party providers</li>
            <li>Take granular control of your payment process</li>
            <li>Style the entire checkout process to match your brand</li>
            <li>
              Power up with extensions: Digital Delivery, Mailchimp Pro, etc...
            </li>
          </List> */}
        </ContentBlock>
      </ContentContainer>
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.gatsbyjs.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading>Save time</Subheading>
          <h2>Avoid waiting.</h2>
          <p>
            Customers will never leave tired of waiting.
            Shortly after sitting down at the table, the order will be directly in the kitchen.
          </p>
          {/* <List>
            <li>Modern web tech without the headache</li>
            <li>Bring your own data</li>
            <li>Scale to the entire internet</li>
            <li>Future-proof your website</li>
            <li>Progressive Web Apps</li>
          </List> */}
        </ContentBlock>
      </ContentContainer>
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.netlify.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading>Covid-friendly</Subheading>
          <h2>Less interaccion between customers and waitters.</h2>
          <p>
            Fewer waiters and less contact between them.
            In these times, Self Service is the ideal application to keep your premises safe from Covid.
            Besides, control your capacity and the necessary measures in a simple way
          </p>
          {/* <List>
            <li>Modern web tech without the headache</li>
            <li>Bring your own data</li>
            <li>Scale to the entire internet></li>
            <li>Future-proof your website</li>
            <li>Progressive Web Apps</li>
          </List> */}
        </ContentBlock>
      </ContentContainer>
      <Packages
        title="Our Packages"
        para="Choose the perfect solution for you. With benefits to suit all budgets Startup can offer amazing value and expert advice"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="FREE!" active={true}>
            <ul>

              <li>
                <MdDone />
                30 DAYS TRIAL
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Discount
              </li>

            </ul>
          </Package>
          <Package title="60€/month" active={true}>
            <ul>
              <li>
                <MdDone />
                3 month
              </li>
              <li>
                <MdDone />
                10 tables
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Discount
              </li>
            </ul>
          </Package>
          <Package title="54€/month" active={true}>
            <ul>
              <li>
                <MdDone />
                6 month
              </li>
              <li>
                <MdDone />
                10 tables
              </li>
              <li class="discount">
                <MdDone  />
                10% off
              </li>
            </ul>
          </Package>
          <Package title="45€/month" active={true}>
            <ul>
            <li>
                <MdDone />
                12 month
              </li>
              <li>
                <MdDone />
                10 tables
              </li>
              <li class="discount" >
                <MdDone  />
                12.5% off
              </li>
            </ul>
          </Package>
        </IconContext.Provider>
      </Packages>
      <SectionCheckout />
    </Layout>
  )
}

export default IndexPage

const Image = styled.div``

const ContentContainer = styled(Container)`
  &:nth-of-type(odd) {
    direction: rtl;

    div {
      direction: ltr;
    }
  }
`
