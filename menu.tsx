/// <reference path="typings/tsd.d.ts" />

import * as React from "react";

export default class Menu extends React.Component<{}, {}> {
	
	constructor() {
		super();
	}
	
	public render() {
		return <div><ul><li><a href="">Home</a></li><li><a href="">Page 1</a></li><li><a href="">Page 2</a></li></ul></div>
	}
}
