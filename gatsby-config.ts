import type { GatsbyConfig } from "gatsby"

import { opensearch_mappings } from './content/opensearch/mappings'
import { opensearch_query } from './content/opensearch/query'
import { opensearch_selector } from './content/opensearch/selector'

type SiteProps = {
  site: {
    siteMetadata: {
      title: string,
      description: string,
      siteUrl: string
    }
  }
}

type SitePage = {
  path: string
}

type SitePages = {
  allSitePage: {
    nodes: SitePage[]
  }
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Biographies",
    subTitle:
      "",
    author: "",
    siteUrl: "",
    description:
      "",
    languages: {
      default: "en",
      allowed: ["en"],
    },
    allowRobots: "true",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
        `,
        resolveSiteUrl: ({ site }: SiteProps) => { return site.siteMetadata.siteUrl },
        resolvePages: ({ allSitePage }: SitePages) => {
          return allSitePage.nodes.map(page => {
            return { path: page.path }
          })
        },
        serialize: ({ path }: SitePage) => {
          return {
            url: path
          }
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `./content`,
        name: "biographies-content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `./src/assets/images`,
        name: "images"
      }
    },
    {
      resolve: '@ndlib/aws-opensearch',
      options: {
        opensearch_hostname: '',
        opensearch_password: '',
        opensearch_protocol: 'https',
        opensearch_port: 443,
        index_name: 'biographies',
        content_grouping: 'bulk',
        query: opensearch_query,
        unique_id: 'uid',
        selector: opensearch_selector,
        mappings: opensearch_mappings
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/images\/svg/
        }
      }
    },
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: `${process.env.S3_DEST_BUCKET}`
      }
    }
  ],
}

export default config
