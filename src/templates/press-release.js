import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const PressReleaseDetail = ({ data }) => (
  <Layout>
    <section className="grid-container">
      <h2>{ data.nodePressRelease.title }</h2>
      { data.nodePressRelease.body.value }
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