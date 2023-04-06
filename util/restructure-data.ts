import * as fs from 'fs/promises'

var json_contents = null
var filehandle = null

interface OldBiography {
	uid: number,
	title: string,
	author: string,
	rights: string,
	subjects: string,
	has_image: boolean,
	publisher: string,
	identifier: string,
	description: string,
	source_page: string,
	coverage_spatial: string,
	coverage_temporal: string,
	identifier_integer: number
}

type NewBiography = {
	uid: number,
	title: string,
	gender: string,
	names: Array<string>,
	status: string,
	vocation: string,
	author: string,
	rights: string,
	has_image: boolean,
	publisher: string,
	identifier: string,
	description: string,
	source_page: string,
	locations: Array<string>,
	coverage_temporal: string,
	identifier_integer: number	
}

async function open_file() {
	const contents = await fs.readFile('./archived-data/archive-biographies.json', {encoding: 'utf8'})
	var json_contents = JSON.parse(contents)
	var new_json_contents: Array<NewBiography> = []
	json_contents.forEach((old_biography: OldBiography) => {
		
		var new_biography: NewBiography = {} as NewBiography

		// Assign most attributes as one to one
		new_biography.uid = old_biography.uid
		new_biography.title = old_biography.title
		new_biography.author = old_biography.author
		new_biography.rights = old_biography.rights
		new_biography.has_image = old_biography.has_image
		new_biography.publisher = old_biography.publisher
		new_biography.identifier = old_biography.identifier
		new_biography.description = old_biography.description
		new_biography.source_page = old_biography.source_page
		new_biography.coverage_temporal = old_biography.coverage_temporal
		new_biography.identifier_integer = old_biography.identifier_integer

		// The subject string in the data is actually a delimited field with 
		// several field types that need to be parsed out and the 'names' type
		// is an array
		var subjects_data = old_biography.subjects.trim().replace(/  /, " ").replace(/ \|$/, "")
		var subjects: Array<string> = subjects_data.split(' | ')
		new_biography.gender = subjects[0].charAt(0).toUpperCase() + subjects[0].slice(1)
		new_biography.vocation = subjects[1].charAt(0).toUpperCase() + subjects[1].slice(1)
		new_biography.status = subjects[2].charAt(0).toUpperCase() + subjects[2].slice(1)
		new_biography.names = subjects.slice(3)
		
		// These are the locations associated with the record, and like subjects, this is
		// a delimited field that needs to be parsed out and turned into an array
		var spatial_data = old_biography.coverage_spatial.trim().replace(/  /, " ").replace(/ \|$/, "")
		new_biography.locations = spatial_data.split(' | ')

		new_json_contents.push(new_biography)
	})
	return new_json_contents
}

async function write_file(content: Array<NewBiography>) {
	await fs.writeFile('../content/biographies.json', JSON.stringify(content))
}

open_file().then(new_json => write_file(new_json))
