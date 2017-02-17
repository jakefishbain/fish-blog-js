import React, { Component } from 'react';
import EditableText from './EditableText'

class BlogPost extends Component {
	contentChange(event){
		this.props.onContentChange(this.props.id, event.target.value)
	}

	authorChange(event){
		this.props.onAuthorChange(this.props.id, event.target.value)
	}

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
				<EditableText tag='textarea' rows='15' cols='200' label='post' value={this.props.content} isEditing={this.props.isEditing} onChange={this.contentChange.bind(this)}/>
				<EditableText tag='input' type='text' label='author' value={this.props.author} isEditing={this.props.isEditing} onChange={this.authorChange.bind(this)}/>
				<p className='postDate'>{this.props.date}</p>
				{this.renderActionBtn()}
				<button onClick={() => this.props.onDelete(this.props.id)} className='deleteBtn'>🗑</button>
			</li>
		)
	}
}

export default BlogPost