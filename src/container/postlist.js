import React, { Component } from 'react';
import { Grid, Row, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Fetchposts } from '../actions/index';

var _ = require('lodash');

class Postlist extends Component{
	constructor(props){
		super(props);
		this.state={};
	}

	componentDidMount(){
		console.log("*******below is fetchposts********");
		console.log(this.props.fetchposts());
		console.log("*******below is end of fetchposts********");

	}

	render(){
		let Posts='';
		if(!this.props.data.error){
			console.log("below is props data");
			console.log(this.props.data);

			Posts=this.props.data.map((val,index)=>{
				const linkurl = "/post:"+val.id+"/";
				return (					
					    <Row key={index}>
					        <Link to={linkurl}>
							  <Col xs={8}>
							  	<p>{val.title}</p>
							  </Col>
							  <Col xs={4}>
							     <p>{val.categories}</p>
							  </Col>
							</Link>
						</Row>
				)
			});
		}

		return(
				<Grid>
					<Row className="show-grid cus-pd-top">
						<Col xs={8}>
						</Col>
						<Col xs={4} className="cus-txt-right">
						  <Link to="/createpost/"><Button bsStyle="primary">add post</Button></Link>
						</Col>
					</Row>
						{Posts}
				</Grid>
					)
	}
}

function mapStateToProps(state){
	console.log("state is ...");
	let val= state.reducerFetch;
	let result=_.map(val,function(vl,index){
		return vl
	});
	console.log(result);
	return {data: result}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchposts: Fetchposts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Postlist);