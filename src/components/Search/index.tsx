import React from "react"
import {
  MultiMatchQuery,
  RefinementSelectFacet,
  SearchkitConfig
} from '@searchkit/sdk/lib/esm'
import { useSearchkitSDK } from '@searchkit/sdk/lib/esm/react-hooks'
import { useSearchkitVariables } from '@searchkit/client/lib/esm'
import { Buffer } from "buffer"
import { HitsList } from "./HitsList"
import { SearchBar, Pagination, FacetsList, SelectedFilters, ResetSearchButton, SortingSelector } from "@searchkit/elastic-ui"
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageSideBar,
  EuiSpacer,
  EuiTitle,
  EuiHorizontalRule,
  EuiText,
  EuiTextColor,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
} from '@elastic/eui'

const header_parameters = () => {
  const authstring = Buffer.from(`${process.env.GATSBY_OPENSEARCH_READ_ONLY_USERNAME}` + ":" + `${process.env.GATSBY_OPENSEARCH_READ_ONLY_PASSWORD}`).toString('base64')
  const header_obj = { Authorization: "Basic " + authstring }
  return header_obj
}

const config: SearchkitConfig = {
  host: 'https://' + `${process.env.GATSBY_OPENSEARCH_ENDPOINT}`,
  connectionOptions: {
    headers: header_parameters()
  },
  index: `${process.env.GATSBY_OPENSEARCH_INDEX}`,
  hits: {
    fields: ['uid', 'title', 'locations', 'gender', 'status', 'vocation', 'names', 'description'],
    highlightedFields: ['title.text', 'description', 'locations.text']
  },
  query: new MultiMatchQuery({
    fields: [
      'description.description_no_diacritics',
      'description.description_lowercase_diacritics',
      'description.description_diacritics',
      'title.text',
      'locations.location_no_diacritics',
      'locations.location_lowercase_diacritics',
      'locations.location_diacritics',
      'names.names_no_diacritics',
      'names.names_lowercase_diacritics',
      'names.names_diacritics',
    ]
  }),
  sortOptions: [
    {
      id: 'relevance',
      label: 'Relevance',
      field: '_score',
      defaultOption: true
    },
    {
      id: 'title',
      label: 'Title',
      field: { 'title.keyword': 'asc' }
    }
  ],
  facets: [
    new RefinementSelectFacet({
      field: 'status',
      identifier: 'status',
      label: 'Status',
      multipleSelect: true,
    }),
    new RefinementSelectFacet({
      field: 'vocation',
      identifier: 'vocation',
      label: 'Vocation',
      multipleSelect: true,
    }),
    new RefinementSelectFacet({
      field: 'gender',
      identifier: 'gender',
      label: 'Gender',
      multipleSelect: true,
    }),
    new RefinementSelectFacet({
      field: 'locations',
      identifier: 'locations',
      label: 'Locations',
      size: 15,
      multipleSelect: true,
    })
  ],
}

export const Search = () => {
  const Facets = FacetsList([]);
  const variables = useSearchkitVariables()
  const { results, loading } = useSearchkitSDK(config, variables);
  if (typeof window === 'undefined') {
    return (<div>Loading...</div>)
  } else {
    return (
      <EuiPage paddingSize="none">
        <EuiPageSideBar paddingSize="m">
          <SearchBar loading={loading} />
          <EuiSpacer size="m" />
          <ResetSearchButton loading={loading} />
          <EuiHorizontalRule size="half" />
          <EuiTitle size="xs">
            <EuiTextColor color="success">
              <h5>{results?.summary.total} Results</h5>
            </EuiTextColor>
          </EuiTitle>
          <EuiHorizontalRule size="half" />
          <Facets data={results} loading={loading} />
        </EuiPageSideBar>
        <EuiPageBody panelled>
          <EuiPageContent>
            <EuiPageContentBody>
              <SelectedFilters data={results} loading={loading} />
              <EuiSpacer size="m" />
              <EuiFlexGroup gutterSize="xs" direction="row" alignItems="stretch">
                <EuiFlexItem grow={1}>
                  <EuiPanel paddingSize="s" grow={false} hasBorder={false} hasShadow={false}>
                    <EuiText>
                      <span style={{ fontWeight: 'bold' }}>Sort By:</span>
                    </EuiText>
                  </EuiPanel>
                </EuiFlexItem>
                <EuiFlexItem grow={10}>
                  <EuiPanel paddingSize="s" hasBorder={false} hasShadow={false}>
                    <SortingSelector data={results} loading={loading} />
                  </EuiPanel>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="l" />
              <HitsList {...results} />
              <EuiHorizontalRule size="half" />
              <EuiFlexGroup justifyContent="spaceAround">
                <Pagination data={results} />
              </EuiFlexGroup>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    )
  }
}

export default Search
