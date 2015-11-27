/// <reference path="typings/tsd.d.ts" />

import * as React from "react";
import { Router, Route, Link } from 'react-router';

export default class Menu extends React.Component<{}, {}> {
	
	constructor() {
		super();
	}
	
	public render() {
		return (
         <div>
            <ul>
               <li><Link to={`/`}>Home</Link></li>
               <li><Link to={`/page1`}>Page 1</Link></li>
               <li><Link to={`/page2`}>Page 2</Link></li>
            </ul>
         </div>
      )
	}
}
