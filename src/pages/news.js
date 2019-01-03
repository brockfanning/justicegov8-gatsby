import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const AllNews = ({ data }) => {

  return (
    <Layout>
      <section className="grid-container">
        <h1>News</h1>
        <ul>
          {data.allNodePressRelease.edges.map(({ node }) => (
            <li key="{node.id}">
              <Link to={node.path.alias}>{node.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default AllNews;

export const query = graphql`
  query {
    allNodePressRelease {
      edges {
        node {
          title
          id
          path {
            alias
          }
          body {
            value
          }
        }
      }
    }
  }
`
