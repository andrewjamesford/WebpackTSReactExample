/// <reference path="typings/tsd.d.ts" />

import * as React from "react";

export default class Hello extends React.Component<{}, {}> {
	
	constructor() {
		super();
	}
	
	public render() {
		return <div>Hello React 1</div>
	}
}
