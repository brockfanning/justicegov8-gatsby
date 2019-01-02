import React from 'react'

class IndexPage extends React.Component {

  render() {
    const pages = this.props.data.allNodePage.edges
    const pageTitles = pages.map(page => <li>{page.node.title}</li>)
    return <ul>{pageTitles}</ul>
  }
}

export default IndexPage

export const query = graphql`
  query pageQuery {
    allNodePage {
      edges {
        node {
          title
        }
      }
    }
  }
`