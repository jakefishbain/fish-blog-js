import React, { Component } from 'react';

class BlogPost extends Component {
	render(){
		return(
			<li className='blogPost'>
				<p className='postContent'>{this.props.content}</p>
				<p className='postAuthor'>Post by: {this.props.author} on {this.props.date}</p>
						{/*ADD EDIT FUNCTIONALITY HERE*/}
				<button className='editBtn'>Edit</button>
				<button onClick={() => this.props.onDelete(this.props.id)} className='deleteBtn'>🗑</button>
			</li>
		)
	}
}

export default BlogPost