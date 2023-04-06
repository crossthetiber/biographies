
export const opensearch_mappings = {
	settings: {
		index: {
			number_of_shards: 4,
			number_of_replicas: 0,
			"sort.field": [ "title.keyword" ],
			"sort.order": [ "asc" ]
		},
		analysis: {
			analyzer: {
				standard_english: {
					type: "custom",
					tokenizer: "standard",
					stopwords: "_english_",
					filter: [ "lowercase", "asciifolding" ]
				},
				diacritics: {
					type: "custom",
					tokenizer: "standard"
				},
				diacritics_lowercase: {
					type: "custom",
					tokenizer: "standard",
					filter: [ "lowercase" ]
				}
			},
			normalizer: {
				standard_english: {
					type: "custom",
					filter: [ "lowercase", "asciifolding" ]
				}
			}
		}
	},
	mappings: {
		properties: {
			title: {
				type: "text",
				analyzer: "standard_english",
				fields: {
					keyword: {
						type: "keyword",
						normalizer: "standard_english"
					},
				},
			},
			id: {
				// exact match
				type: "short"
			},
			uid: {
				type: "short"
			},
			author: {
				type: "text"
			},
			rights: {
				type: "text"
			},
			pubisher: {
				type: "text"
			},
			description: {
        type: "text",
        fields: {
					description_no_diacritics: {
						type: "text",
						analyzer: "standard_english"
					},
					description_lowercase_diacritics: {
						type: "text",
						analyzer: "diacritics_lowercase"
					},
					description_diacritics: {
						type: "text",
						analyzer: "diacritics"
					}
				}, 
			},
			source_page: {
				type: "text"
			},
			identifier: {
				type: "text"
			},
			identifier_integer: {
				type: "integer"
			},
			gender: {
				type: "keyword"
			},
			vocation: {
				type: "keyword"
			},
			status: {
				type: "keyword"
			},
			begin_date: {
				type: "date",
				format: "yyyy"
			},
			end_date: {
				type: "date",
				format: "yyyy"
			},
			names: {
				type: "keyword",
				fields: {
					names_no_diacritics: {
						type: "text",
						analyzer: "standard_english"
					},
					names_lowercase_diacritics: {
						type: "text",
						analyzer: "diacritics_lowercase"
					},
					names_diacritics: {
						type: "text",
						analyzer: "diacritics"
					}
				},
			},
			locations: {
				type: "keyword",
				fields: {
					location_no_diacritics: {
						type: "text",
						analyzer: "standard_english"
					},
					location_lowercase_diacritics: {
						type: "text",
						analyzer: "diacritics_lowercase"
					},
					location_diacritics: {
						type: "text",
						analyzer: "diacritics"
					}
				},
			},
			has_image: {
				type: "boolean"
			}
		}
	}
}