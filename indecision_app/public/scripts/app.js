"use strict";

var visibility = false;
console.log(visibility);
var toggleButton = function toggleButton() {
    visibility = !visibility;
    reRenderDom();
};
var reRenderDom = function reRenderDom() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleButton },
            visibility ? "Hide Detials" : "Show Details"
        ),
        visibility && React.createElement(
            "p",
            null,
            "Here are some details you can see now"
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};
reRenderDom();
