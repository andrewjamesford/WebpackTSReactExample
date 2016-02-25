/// <reference path="typings/tsd.d.ts" />

import * as React from "react";
import { IndexRoute, Router, Route, Link } from "react-router";

import Menu from "./menu";
import Home from "./home";
import About from "./about";
import FormComps from "./formcomps";


export default class MyRouter extends React.Component<{}, {}> {
	
	constructor() {
		super();
	}
	
	public render() {
		return (
         <div>
				<Menu></Menu>
            <Router>
               <Route path="/">
                  <IndexRoute component={Home}/>
                  <Route path="about" component={About}/>
                  <Route path="grid" component={FormComps}/>
               </Route>
            </Router>
         </div>
      )
	}
}
