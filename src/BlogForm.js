import React, { Component } from 'react';
var uuid = require('node-uuid');
var moment = require('moment');

class BlogForm extends Component {

	handleSubmit(event){
		event.preventDefault()
		this.props.onAddPost({id: uuid.v4(), content: this.props.formContent, author: this.props.formAuthor, date: moment().toString()})
	}

	handleChange(field, event){
		this.props.onChangeInput(event.target.value, field)
	}

	render(){
		return(
			<div className='blogInputs'>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<textarea rows='15' cols='200' onChange={this.handleChange.bind(this, 'formContent')} value={this.props.formContent}></textarea>
					<input type='text' placeholder='Author' onChange={this.handleChange.bind(this, 'formAuthor')} value={this.props.formAuthor}/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
		)
	}
}
export default BlogForm