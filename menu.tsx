/// <reference path="typings/tsd.d.ts" />

import * as React from "react";
import { Link } from 'react-router';

export default class Menu extends React.Component<{}, {}> {
	
	constructor() {
		super();
	}
	
	public render() {
		return (
         <div>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
            </ul>
         </div>
      )
	}
}
