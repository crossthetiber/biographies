import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiListGroup,
  EuiListGroupItem,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPanel,
  EuiText,
  EuiTextColor,
  EuiTitle
} from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css'


export const query = graphql`
  query SpecificBiography($uid: Int) {
    biographiesJson(uid: { eq: $uid }) {
      title
      names
      gender
      status
      vocation
      locations
      author
      rights
      has_image
      publisher
      identifier
      description
      source_page
      begin_date
      end_date
      identifier_integer
    },
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

type BiographyProps = {
  biographiesJson: {
    title: string,
    names: Array<string>,
    gender: string,
    status: string,
    vocation: string,
    locations: Array<string>,
    author: string,
    rights: string,
    has_image: boolean,
    publisher: string,
    identifier: string,
    description: string,
    source_page: string,
    begin_date: string,
    end_date: string,
    identifier_integer: number
  }
}

const Biography = ({ data }: PageProps<BiographyProps>) => {
  const biodetails = data.biographiesJson;

  return (
    <Layout>
      <EuiPage paddingSize="s">
        <EuiPageBody paddingSize="s">
          <EuiPageContent paddingSize="l" hasBorder={false} hasShadow={false}>
            <EuiTitle>
              <h3 className="name">{biodetails.title}</h3>
            </EuiTitle>
            <EuiHorizontalRule size="full" margin="m" />
            <EuiFlexGroup gutterSize="m" direction="row">
              <EuiFlexItem grow={false} component="div" className="metadata">
                <EuiFlexGroup direction="column" wrap responsive={false}>
                  <EuiFlexItem grow={false} >
                    <EuiText>
                      <span style={{ fontWeight: 'bold' }}>Vocation: </span>
                      {biodetails.vocation}
                    </EuiText>
                    <EuiText>
                      <span style={{ fontWeight: 'bold' }}>Gender: </span>
                      {biodetails.gender}
                    </EuiText>
                    <EuiText>
                      <span style={{ fontWeight: 'bold' }}>Status: </span>
                      <EuiTextColor color="danger">{biodetails.status}</EuiTextColor>
                    </EuiText>
                    <EuiText>
                      <span style={{ fontWeight: 'bold' }}>Approximate Dates: </span>
                      {biodetails.begin_date} - {biodetails.end_date}
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false} >
                    <EuiTitle size="xs">
                      <h6>Names and Aliases:</h6>
                    </EuiTitle>
                    <EuiListGroup gutterSize="none" bordered={false} flush={true}>
                      {biodetails.names.map((name: string) => (
                        <EuiListGroupItem label={name} size="m" iconType={"shard"} />
                      ))}
                    </EuiListGroup>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiTitle size="xs">
                      <h5>Known Locations:</h5>
                    </EuiTitle>
                    <EuiListGroup gutterSize="none" bordered={false} flush={true}>
                      {biodetails.locations.map((location: string) => (
                        <EuiListGroupItem label={location} size="m" iconType={"globe"} />
                      ))}
                    </EuiListGroup>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiText>
                      <span style={{ fontWeight: 'bold' }}>Source Pages: </span>{biodetails.source_page}
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
              <EuiFlexItem grow={true}>
                <EuiFlexGroup gutterSize="m" component="div">
                  <EuiFlexItem grow={true}>
                    <EuiPanel hasBorder={false} hasShadow={false} paddingSize="l">
                      <div>
                        <EuiText>
                          <span style={{ fontWeight: 'bold' }}>Biographical Description: </span>
                          {biodetails.description}
                        </EuiText>
                      </div>
                    </EuiPanel>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </Layout>
  )
}

export { Head } from "../pages/index"


export default Biography
