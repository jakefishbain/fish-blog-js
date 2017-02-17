import React, { Component } from 'react';

class EditableText extends Component {
	render(){
		const { tag, onChange, value, isEditing, ...props} = this.props
		const Element = tag
		return(
			<div>
				{isEditing ? (
					<Element
						onChange={onChange}
						value={value} 
						{...props}
					/>
					)
					: value
				}
			</div>
		)
	}
} export default EditableText