var React = require('react');

var sayHello = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hola!</h1>
            </div>
        );
    }
});

module.exports = sayHello;

//view at http://localhost:8080
