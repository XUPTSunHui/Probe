import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import MyInput from './MyInput.jsx';
import $ from 'jquery';

export default class MyList extends React.Component {
	// in this is a list of MyInput
	constructor(props) {
		super(props);
		this.RUN =this.RUN.bind(this);
		this.Check =this.Check.bind(this);
		this.changePath =this.changePath.bind(this);
		this.changeBatchTimeout =this.changeBatchTimeout.bind(this);
		this.changeMaxMessageCount =this.changeMaxMessageCount.bind(this);
		this.changeAbsoluteMaxBytes =this.changeAbsoluteMaxBytes.bind(this);
		this.changePreferredMaxBytes =this.changePreferredMaxBytes.bind(this);
	}


	RUN(event){
		alert("send to back end as starting "+JSON.stringify(this.props.todos));
		//$.post('/api/run',this.state)
	}

	Check(event){
		alert("send to back end as starting "+JSON.stringify(this.props.todos));
	} 

	changePath(event){
		this.props.dispatch(
			({
				type: 'CHANGE_PATH',
				value: event.target.value,
			})
		)
	}

	changeBatchTimeout(event){
		this.props.dispatch(
			({
				type: 'CHANGE_BATCHTIMEOUT',
				value: event.target.value,
			})
		)
	}

	changeMaxMessageCount(event){
		this.props.dispatch(
			({
				type: 'CHANGE_MAXMSG',
				value: event.target.value,
			})
		)
	}

	changeAbsoluteMaxBytes(event){
		this.props.dispatch(
			({
				type: 'CHANGE_ABS',
				value: event.target.value,
			})
		)
	}

	changePreferredMaxBytes(event){
		this.props.dispatch(
			({
				type: 'CHANGE_PREFERED',
				value: event.target.value,
			})
		)
	}

	render () {
		// console.log(JSON.stringify(this.state.arr));
		return (
			<div>
			<Card>
			<Card.Header>Config Your Commands</Card.Header>
			<Card.Body>
			<Button variant="info" onClick={this.props.ApplyTestNetwork}>TestNetwork Sample</Button>
			<ListGroup variant="flush">
			<ListGroup>Path <input type="text" onChange={this.changePath} placeholder={this.props.todos.todos.path}/> </ListGroup>
			<ListGroup>BatchTimeout List <input type="text" onChange={this.changeBatchTimeout} placeholder={this.props.todos.todos.BatchTimeout}/> </ListGroup>
			<ListGroup>MaxMessageCount List <input type="text" onChange={this.changeMaxMessageCount} placeholder={this.props.todos.todos.MaxMessageCount}/> </ListGroup>
			<ListGroup>AbsoluteMaxBytes List <input type="text" onChange={this.changeAbsoluteMaxBytes} placeholder={this.props.todos.todos.AbsoluteMaxBytes}/> </ListGroup>
			<ListGroup>PreferredMaxBytes List <input type="text" onChange={this.changePreferredMaxBytes} placeholder={this.props.todos.todos.PreferredMaxBytes}/> </ListGroup>
			<ListGroup>Command lists</ListGroup>
			{
				this.props.todos.todos.cmd.map((item, index) => 
				<ListGroup.Item key={item.orderer}>
					<MyInput data={item}
							 dispatch={this.props.dispatch}/>
				</ListGroup.Item>) // 需要带上 key 属性 <li >{item}</li>
      		}
			</ListGroup>
			</Card.Body>
			<Card.Footer className="text-muted">
				<Button variant="info" onClick={this.props.addItem}>Add Command</Button>
				<Button variant="warning" onClick={this.props.removeItem}>Remove Last Command</Button>
				<Button variant="success" onClick={this.Check}>Check</Button>
				<Button variant="success" onClick={this.RUN}>Submit</Button>
			</Card.Footer>
			</Card>
			</div>
		);
	}
}