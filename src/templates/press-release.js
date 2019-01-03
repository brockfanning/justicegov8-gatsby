import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import ReactHtmlParser from "react-html-parser";

const PressReleaseDetail = ({ data }) => (
  <Layout>
    <section className="grid-container">
      <h2>{ data.nodePressRelease.title }</h2>
      { ReactHtmlParser(data.nodePressRelease.body.value) }
    </section>
  </Layout>
)

export default PressReleaseDetail

export const query = graphql`
  query PressReleaseDetails($id: String!) {
    nodePressRelease(id: { eq: $id }) {
      title
      body {
        value
      }
    }
  }
`