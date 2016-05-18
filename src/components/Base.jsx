var React = require('react');
var Link = require('react-router').Link;

var Base = React.createClass({
	render: function(){
		return (
			<div>
				<h1><Link to='/page1'>Header</Link></h1>
					{this.props.children}
				<h2><Link to='/page2'>Footer</Link></h2>
			</div>
		);
	}
});

module.exports = Base;