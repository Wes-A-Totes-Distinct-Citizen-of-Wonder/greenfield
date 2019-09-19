import React from "react";
import ReactDOM from "react-dom";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, 
  Input, InputGroupAddon, InputGroup, Button, Col, Row } from 'reactstrap';

class SearchTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            zip: '',
        };
        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // controls the drop down menu on tags
    toggle() {
        this.setState(lastState => ({
            open: !lastState.open
        }))
    }
    
    handleClick(){
      console.log('hey');
    }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

    render() {
        return (
              <Row form>

              <Col md={3}>
                  <InputGroup>
                    <Input id='zip' placeholder='Zip' onChange={this.handleChange} />
                  <InputGroupAddon addonType="append"><Button onClick={() => this.props.searchByZip(this.state.zip)}><i class="fas fa-search"></i> Search</Button></InputGroupAddon>
                  </InputGroup>
              </Col>

              <Col sm={2}>
                <Dropdown isOpen={this.state.open} toggle={this.toggle}>
                  <DropdownToggle caret>Search by Material</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => this.props.searchByTag('lumber')}>Lumber</DropdownItem>
                    <DropdownItem onClick={() => this.props.searchByTag('metal')}>Metal</DropdownItem>
                    <DropdownItem onClick={() => this.props.searchByTag('concrete')}>Concrete</DropdownItem>
                    <DropdownItem onClick={() => this.props.searchByTag('piping')}>Piping</DropdownItem>
                    <DropdownItem onClick={() => this.props.searchByTag('glass')}>Glass</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>

              </Row>
        )
    }
}

export default SearchTag;
