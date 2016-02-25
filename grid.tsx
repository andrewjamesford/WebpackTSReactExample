/// <reference path="typings/tsd.d.ts" />

import * as React from "react";
import * as Griddle from "griddle-react";

export default class MyGrid extends React.Component<{}, {}> {
	
	constructor() {
		super();
	}
	
	public render() {
		var fakeData =  [
		{
			"id": 0,
			"name": "Mayer Leonard",
			"city": "Kapowsin",
			"state": "Hawaii",
			"country": "United Kingdom",
			"company": "Ovolo",
			"favoriteNumber": 7
		},
		{
			"id": 1,
			"name": "Mayer Leonard",
			"city": "Kapowsin",
			"state": "Hawaii",
			"country": "United Kingdom",
			"company": "Ovolo",
			"favoriteNumber": 7
		},
		{
			"id": 2,
			"name": "Mayer Leonard",
			"city": "Kapowsin",
			"state": "Hawaii",
			"country": "United Kingdom",
			"company": "Ovolo",
			"favoriteNumber": 7
		},
		];
		return (
			<div>
				<Griddle results={fakeData} />
			</div>
		)
	}
}