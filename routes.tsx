/// <reference path="typings/tsd.d.ts" />

import * as React from "react";
import { Router, Route, Link } from "react-router";

import Menu from "./menu";
import Home from "./home";
import About from "./about";

export default class MyRouter extends React.Component<{}, {}> {
	
	constructor() {
		super();
	}
	
	public render() {
		return (
         <div>
				<Menu></Menu>
            <Router>
               <Route path="/" component={Home}>
                  <Route path="/about" component={About}/>                  
               </Route>
            </Router>
         </div>
      )
	}
}
