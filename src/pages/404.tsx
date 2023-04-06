import React from "react"
import Layout from "../components/Layout"
import { graphql, PageProps } from "gatsby"
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiIcon,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiTitle
} from '@elastic/eui'
import { StaticImage } from "gatsby-plugin-image"

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

const NotFoundPage = () => {
  return (
    <Layout>
      <EuiPage>
        <EuiPageBody>
          <EuiPageContent hasBorder={false} hasShadow={false}>
            <EuiPageContentBody>
              <EuiFlexGroup alignItems="center" justifyContent="center" wrap={false}>
                <span>
                  <EuiFlexItem grow={false}>
                    <EuiPanel hasBorder={false} hasShadow={false}>
                      <EuiTitle size="l">
                        <h2>
                          <EuiIcon size="xxl" type="alert" />   404 Not Found
                        </h2>
                      </EuiTitle>
                    </EuiPanel>
                  </EuiFlexItem>
                </span>
              </EuiFlexGroup>
              <EuiSpacer size="l" />
              <EuiFlexGroup gutterSize="m" direction="row" alignItems="center" wrap={false}>
                <EuiFlexItem grow={2}>
                  <StaticImage
                    src="../assets/images/person1.png"
                    alt="Image of Catholic martyr"
                    placeholder="blurred"
                    objectFit="contain"
                    height={400}
                  />
                </EuiFlexItem>
                <EuiFlexItem grow={8}>
                  <EuiText textAlign="left" size="m">
                    <h2>
                      <EuiTextColor color="danger">Sorry, we can't find the page you were looking for. It may have been relocated to the Gulag.</EuiTextColor>
                    </h2>
                  </EuiText>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
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

export default NotFoundPage
