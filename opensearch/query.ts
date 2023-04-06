export const opensearch_query = `
  query {
		allBiographiesJson {
			nodes {
				author
				begin_date
				end_date
				description
				gender
				has_image
				locations
				names
				publisher
				rights
				source_page
				status
				title
				uid
				vocation
				identifier
				identifier_integer
			}
		}
  }
`