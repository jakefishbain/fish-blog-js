import React, { Component } from 'react';
var moment = require('moment');


class BlogHeader extends Component {
	render(){
		return(
			<header className='blogHeader'>Welcome to my Blog! <br/> Current Date & Time: {moment().toString()}</header>
		)
	}
}
export default BlogHeader;