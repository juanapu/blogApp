import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { PostData } from '../actions/index';
import { Link } from 'react-router-dom';
import { form,FormGroup,Col,HelpBlock,FormControl,ControlLabel,bsClass } from 'react-bootstrap';

// const renderField = (field) => {
// 	/******  == const name=field.input.name   ********/ 
// 	const {input: {name}}=field;        
// 	return(
// 		<div>
// 			<label htmlFor={name}>{name}</label>
// 			<input {...field.input} name={name} type="text" />
// 		</div>
// 		)
// }

const validate = values =>{
	const error = {};
	if(!values.title){
		error.title = 'Please input a title';
	}
	if(!values.categories){
		error.categories = 'Please input a categories';
	}

	if(!values.content){
		error.content = 'Please input a content';
	}

	return error
}

class Creactpost extends Component {
	constructor(props){
		super(props);
		this.state={};
		this.renderField=this.renderField.bind(this);
	}

	onSubmit(values){
		var _this=this;
		this.props.PostData(values,function(){
			_this.props.history.push('/');  /***callback***/
		});
	}
    
    /******  == const name=field.input.name   ********/ 
    renderField(field){  
        const {input: {name}} = field; 

		return(
			<FormGroup validationState="warning">
				<ControlLabel htmlFor={name}>{name}</ControlLabel>
				<FormControl {...field.input} name={name} type="text" />
				<HelpBlock bsClass="warning">{(field.meta.touched&&field.meta.error)?field.meta.error:''}</HelpBlock>
			</FormGroup>
			)	
    }

	render(){
		const { handleSubmit } = this.props;
		return (
				<form horizontal onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="title" component={this.renderField} />
					<Field name="categories" component={this.renderField} />
					<Field name="content" component={this.renderField} />
					<div>
						<input name="save" type="submit" />
						<Link to='/'><button>cancel</button></Link>
					</div>
				</form>
			)
	}
}


export default reduxForm({
	form: 'Creactpost',
	validate // <--- validation function given to redux-form
	  // <--- warning function given to redux-form
})(
  connect(null,{ PostData })(Creactpost)
);