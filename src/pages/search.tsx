import React from 'react'
import { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { graphql, PageProps } from "gatsby"
import { withSearchkit, withSearchkitRouting } from '@searchkit/client'
import Layout from "../components/Layout"
import Search from "../components/Search"

const SearchkitApp = withSearchkit(withSearchkitRouting(Search));

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

type SiteProps = {
  site: {
    siteMetadata: {
      title: string,
      description: string
    }
  }
}

const SearchPage = () => {
  return (
    <Layout>
      <SearchkitApp />
    </Layout>
  )
}

export const Head = ({ data }: PageProps<SiteProps>) => {
  const { title, description } = data.site.siteMetadata


  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  )

}

export default SearchPage