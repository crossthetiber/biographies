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
	gender: string,
	status: string,
	vocation: string,
	coverage_temporal: string,
	identifier_integer: number,
	names: Array<string>,
	locations: Array<string>
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
	begin_date: string,
	end_date: string,
	identifier_integer: number	
}

async function open_file() {
	const contents = await fs.readFile('./archived-data/archived-biographies2.json', {encoding: 'utf8'})
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
		new_biography.identifier_integer = old_biography.identifier_integer
		new_biography.status = old_biography.status
		new_biography.gender = old_biography.gender
		new_biography.vocation = old_biography.vocation
		new_biography.names = old_biography.names
		new_biography.locations = old_biography.locations

		// a delimited field that needs to be parsed out and turned into an array
		var spatial_data: Array<string> = old_biography.coverage_temporal.split("-")
		new_biography.begin_date = spatial_data[0]
		new_biography.end_date = spatial_data[1]
		
		new_json_contents.push(new_biography)
	})
	return new_json_contents
}

async function write_file(content: Array<NewBiography>) {
	await fs.writeFile('../content/biographies_dates.json', JSON.stringify(content))
}

open_file().then(new_json => write_file(new_json))
