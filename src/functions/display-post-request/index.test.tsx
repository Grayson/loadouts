import DisplayPostRequest from "."

function simpleKeyValueTest() {
	const req = DisplayPostRequest({ key: 1 })
	expect(req.props.children.length).toBe(2)
	expect(req.props.children[1].type).toBe('pre')
}

function tests() {
	it('should handle simple key-value records', simpleKeyValueTest)
}

describe('display-post-request tests', tests)