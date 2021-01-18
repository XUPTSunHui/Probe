import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class MyInput extends React.Component {
	// in this component receive command and args
	constructor(props) {
		super(props);
		this.Debug =this.Debug.bind(this);
		this.TapeType = this.TapeType.bind(this);
		this.ShellType = this.ShellType.bind(this);
		this.AddItem = this.AddItem.bind(this);
		this.RemoveItem = this.RemoveItem.bind(this);
	}

	ShellType(event){
		this.props.dispatch(
			({
				type: 'TYPE_SHELL',
				order: this.props.data.order,
			})
		)
	}


	TapeType(event){
		this.props.dispatch(
			({
				type: 'TYPE_TAPE',
				order: this.props.data.order,
			})
		)
	}

	AddItem(event) {
		this.props.dispatch(
			({
				type: 'ADD_ARG',
				order: this.props.data.order,
			})
		)
	}

	RemoveItem(event){
		this.props.dispatch(
			({
				type: 'REMOVE_ARG',
				order: this.props.data.order,
			})
		)
	}

	Debug(event){
		alert("send to back end as starting "+JSON.stringify(this.props.data));
	}

	render () {
		return (
			<div>
				<ListGroup horizontal>
				<DropdownButton
				as={InputGroup.Prepend}
				variant="outline-secondary"
				title="Type"
				id="input-group-dropdown-1"
				>
				<Dropdown.Item as="button" onClick={this.ShellType}>Shell</Dropdown.Item>
				<Dropdown.Item as="button" onClick={this.TapeType}>Tape</Dropdown.Item>
				</DropdownButton>
				<ListGroup.Item>{this.props.data.cmdType}</ListGroup.Item>
				{
					this.props.data.args.map((item, index) => 
							<input type="text" key={index} placeholder={item}/> 
					) // 需要带上 key 属性 <li >{item}</li> <ListGroup.Item key={index}>{item}</ListGroup.Item>
      			}
			  	</ListGroup>
				<Button variant="info" onClick={this.AddItem}>Add New Arg</Button>
				<Button variant="warning" onClick={this.RemoveItem}>Remove Last Arg</Button>
				<Button variant="warning" onClick={this.Debug}>Show Command</Button>
			</div>
		);
	}
}

export default MyInput;