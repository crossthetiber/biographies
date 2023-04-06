import React from "react"
import { graphql, PageProps, withPrefix } from "gatsby"
import Layout from "../components/Layout"
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiText,
  EuiLink
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

const Home = ({ data }: PageProps<SiteProps>) => {

  return (
    <Layout homePageFlag={true}>
      <EuiPage paddingSize="none">
        <EuiPageBody>
          <EuiPageContent
            verticalPosition="center"
            horizontalPosition="center"
            paddingSize="s"
            element="div"
            hasBorder={false}
            hasShadow={false}
            color="transparent"
            grow={true}
          >
            <EuiPageContentBody restrictWidth={'55%'} className="home-intro">
              <EuiText textAlign="left" size="m" className="intro">
                <StaticImage
                  src="../assets/images/portraits-full.png"
                  alt="Image of Catholic martyr portraits"
                  placeholder="blurred"
                  useMap="#map"
                  className="portraits map"
                />
                <EuiLink href="/about#martyrs">
                  <StaticImage
                    src="../assets/images/portraits-full.png"
                    alt="Image of Catholic martyr portraits"
                    placeholder="blurred"
                    className="portraits mobile"
                  />
                </EuiLink>

                <map name="map">
                  <area shape="rect" coords="515, 349, 637, 545" href="/biographies/129" />
                  <area shape="rect" coords="650, 329, 768, 501" href="/biographies/281" />
                  <area shape="rect" coords="781, 341, 923, 556" href="/biographies/533" />
                  <area shape="rect" coords="838, 179, 1004, 332" href="/biographies/279" />
                  <area shape="rect" coords="714, 162, 826, 319" href="/biographies/1867" />
                  <area shape="rect" coords="773, 12, 913, 148" href="/biographies/1888" />
                  <area shape="rect" coords="624, 29, 761, 147" href="/biographies/1859" />
                  <area shape="rect" coords="562, 196, 700, 316" href="/biographies/138" />
                  <area shape="rect" coords="433, 242, 542, 349" href="/biographies/1485" />
                  <area shape="rect" coords="282, 247, 418, 432" href="/biographies/357" />
                  <area shape="rect" coords="198, 46, 338, 189" href="/biographies/1935" />
                  <area shape="rect" coords="350, 53, 480, 237" href="/biographies/1678" />
                  <area shape="rect" coords="486, 51, 611, 188" href="/biographies/105" />
                  <area shape="rect" coords="63, 64, 186, 182" href="/biographies/1132" />
                  <area shape="rect" coords="159, 200, 271, 398" href="/biographies/616" />
                  <area shape="rect" coords="14, 212, 151, 383" href="/biographies/1580" />
                </map>

                <p><em>Book of Remembrance: Biographies of Catholic Clergy and Laity Repressed in the Soviet Union (USSR)
                  from 1918 to 1953</em> presents brief biographies of approximately 1,900 Catholic clergy and laity repressed
                  by the Soviet regime under Lenin and Stalin.The biographies were compiled by Irina Osipova and Fr.Bronisƚaw
                  Czaplicki, published by the Apostolic Administration for Catholics of North European Russia, and translated
                  from Russian by Geraldine Kelley.</p>
                <p><strong>Click on All Biographies in order to search and browse the biographies</strong></p>
                <p>
                  Photographs on home page: The sixteen “Servants of God” selected for inclusion in a
                  cause for canonization opened in May 2003. For more information on the cause,
                  please see the <EuiLink href="http://en.catholicmartyrs.org/">Catholic New Martyrs of Russia</EuiLink> site.
                </p>
              </EuiText>
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

export default Home;
