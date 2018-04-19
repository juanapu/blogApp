import React, { Component } from 'react';
import { Grid,Row,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fetchpost } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Deletepost } from '../actions/index';

class renderpost extends Component{

	constructor(props){
		super(props);
		this.state={};
		this.deleteFunc=this.deleteFunc.bind(this);
	}

	componentDidMount(){
		const id = this.props.match.params.id;
		this.props.fetchpost(id);
	}

	deleteFunc(){
		const id = this.props.match.params.id;
		let _this=this;
		this.props.deletepost(id,function(){
			_this.props.history.push('/');
		});
	}

	render(){
		// const data = this.props.data;
		// console.log("daa is xxxx");
		// console.log(data);

		const {data}=this.props;
		console.log(data);
		if(data)
			return (
					<Grid>
						<Row>
							<Col xs={6}>
								<a href='/'>back to Posts</a>
							</Col>
							<Col xs={6}>
								<Button bsStyle="primary" onClick={this.deleteFunc}>Delete Post</Button>
							</Col>
						</Row>
						<Row>
						   <Col xs={12}>
								{data.id?data.title:'loading.....'}
							</Col>
						</Row>
						<Row>
						    <Col xs={12}>
								{data.id?(data.categories?data.categories:'null'):'loading.....'}
							</Col>
						</Row>
						<Row>
						    <Col xs={12}>
								{data.id?(data.content?data.content:'null'):'loading.....'}
							</Col>
						</Row>
					</Grid>
				)
		else
			return (
					<div>loading...</div>
				)
	}
}
/****state: reducer state****/
function mapStateToProps(state){
	return {data:state.reducerPost}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchpost: Fetchpost, deletepost: Deletepost},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(renderpost);