/// <reference path="typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouter from "react-router";

import Hello from "./hello";


class App extends React.Component<{}, {}> {
    constructor() {
        super();
    }
    public render() {
        return <Hello></Hello>
    }
}       


ReactDOM.render(    
    React.createElement(Hello),
    document.getElementById('app')
);

