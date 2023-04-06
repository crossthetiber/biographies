export const opensearch_selector= (data: { allBiographiesJson: { nodes: any[] } }) => {
	return data.allBiographiesJson.nodes.map(node => {
		return node
	})
}