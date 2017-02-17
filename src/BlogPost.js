import React, { Component } from 'react';

class BlogPost extends Component {
	renderActionBtn(){
		if(this.props.isEditing){
			return <button className='saveBtn' onClick={() => this.props.onToggleEdit(this.props.id)}>Save</button>
		}else{
			return <button className='editBtn' onClick={() => this.props.onToggleEdit(this.props.id)}>Edit</button>
		}
	}

	render(){
		return(
			<li className='blogPost'>
				<p className='postContent'>{this.props.content}</p>
				<p className='postAuthor'>Post by: {this.props.author} on {this.props.date}</p>
				{this.renderActionBtn()}
				<button onClick={() => this.props.onDelete(this.props.id)} className='deleteBtn'>🗑</button>
			</li>
		)
	}
}

export default BlogPost