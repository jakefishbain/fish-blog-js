import React, { Component } from 'react';

class BlogPost extends Component {
	render(){
		return(
			<li className='blogPost'>
				<p className='postContent'>{this.props.content}</p>
				<p className='postAuthor'>Post by: {this.props.author} on {this.props.date}</p>
			</li>
		)
	}
}

export default BlogPost