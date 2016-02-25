/// <reference path="typings/tsd.d.ts" />

import * as React from "react";
import * as MyGrid from "./grid";

export default class FormComps extends React.Component<{}, {}> {
	
	constructor() {
		super();
	}
	
	public render() {
		return (
			<div>
			Form
			<MyGrid></MyGrid>
			</div>
			)
	}
}