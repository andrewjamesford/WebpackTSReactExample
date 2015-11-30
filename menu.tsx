/// <reference path="typings/tsd.d.ts" />

import * as React from "react";

import { IndexLink, Link } from 'react-router';

export default class Menu extends React.Component<{}, {}> {
	
	constructor() {
		super();
	}
	
	public render() {
		return (
         <div className="menu">
            {/*<ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
            </ul>*/}
            <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#/about">About</a></li>
            </ul>
         </div>
      )
	}
}
