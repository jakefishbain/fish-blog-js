import React, { Component } from 'react';

class BlogInputs extends Component {
	render(){
		return(
			<div className='blogInputs'>
				<form>
					<textarea rows='15' cols='200' ></textarea>
					<input type='text' placeholder='Author'/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
		)
	}
}
export default BlogInputs