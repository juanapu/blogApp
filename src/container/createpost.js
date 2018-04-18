import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { PostData } from '../actions/index';

class Creactpost extends Component {
	constructor(props){
		super(props);
		this.state={};
	}

	onSubmit(values){
		this.props.PostData(values);
	}

	render(){
		const { handleSubmit } = this.props;
		return (
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div>
						<label htmlFor="title">Title</label>
						<Field name="title" component="input" type="text" />
					</div>
					<div>
						<label htmlFor="categories">Categories</label>
						<Field name="categories" component="input" type="text" />
					</div>
					<div>
						<label htmlFor="contents">Contents</label>
						<Field name="contents" component="textarea" type="text" />
					</div>
					<div>
						<input name="save" type="submit" />
						<button>cancel</button>
					</div>
				</form>
			)
	}
}


export default reduxForm({
	form: 'Creactpost'
})(
  connect(null,{ PostData })(Creactpost)
);