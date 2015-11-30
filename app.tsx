/// <reference path="typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import MyRouter from "./routes";

ReactDOM.render(    
    React.createElement(MyRouter),
    document.getElementById('app')
);

