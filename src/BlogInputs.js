import React, { Component } from 'react';

class BlogInputs extends Component {
	render(){
		return(
			<div className='blogInputs'>
				<textarea rows='15' cols='300'></textarea>
				<input type='text' placeholder='Author'/>
				<button>Submit</button>
			</div>
		)
	}
}
export default BlogInputs