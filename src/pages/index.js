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
          <h2>You will need less waitters.</h2>
          <p>
            No coding, merchant account, or hosting required. Create completely
            customizable forms that can be embedded or shared anywhere. Automate
            and integrate your processes with built-in tools and 3rd party
            integrations.
          </p>
          <List>
            <li>Send funds to your bank account automatically</li>
            <li>Integrate with hundreds of third party providers</li>
            <li>Take granular control of your payment process</li>
            <li>Style the entire checkout process to match your brand</li>
            <li>
              Power up with extensions: Digital Delivery, Mailchimp Pro, etc...
            </li>
          </List>
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
            Gatsby is an open source, modern website framework that builds
            performance into every site by leveraging the latest web
            technologies such as React and GraphQL.
          </p>
          <List>
            <li>Modern web tech without the headache</li>
            <li>Bring your own data</li>
            <li>Scale to the entire internet</li>
            <li>Future-proof your website</li>
            <li>Progressive Web Apps</li>
          </List>
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
            The fastest way to build the fastest sites. Build, test, and deploy
            globally with Netlify’s all-in-one platform for modern web projects
          </p>
          <List>
            <li>Modern web tech without the headache</li>
            <li>Bring your own data</li>
            <li>Scale to the entire internet></li>
            <li>Future-proof your website</li>
            <li>Progressive Web Apps</li>
          </List>
        </ContentBlock>
      </ContentContainer>
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
