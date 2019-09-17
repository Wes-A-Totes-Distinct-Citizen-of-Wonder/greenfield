import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, InputGroupAddon, InputGroup, Button, Col, Row } from 'reactstrap';
import Axios from "axios";



class SearchTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
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

    handleChange(){

    }

    render() {
        return (
            <div>
              <Row form>

              <Col md={2}>
                  <InputGroup>
                    <Input placeholder='Zipcode'/>
                    <InputGroupAddon addonType="append"><Button onClick={this.handleClick}>Search</Button></InputGroupAddon>
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
            </div>
        )
    }
}

export default SearchTag;
