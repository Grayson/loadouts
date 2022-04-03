import React from 'react'

function Label({ title }: { title: String }): JSX.Element {
	return <dt>{title}</dt>
}

function SimpleValue({value}: { value: String | number | boolean }): JSX.Element {
	return <dd>{value}</dd>
}

function List({ record }: { record: Record<any, any> }): JSX.Element {
	return <dl>
		{ record.map( (k: String, v: number | boolean | String) => {
			<>
				<Label title={k} />
				<SimpleValue value={v} />
			</>
		}) }
	</dl>
}

function DisplayPostRequest(post: Record<string, any>): JSX.Element {
	return <>
		<List record={post} />
		<pre>
			{JSON.stringify(post)}
		</pre>
	</>
}

export default DisplayPostRequest