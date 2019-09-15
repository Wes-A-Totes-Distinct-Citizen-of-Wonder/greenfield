import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Axios from "axios";

class SearchTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(lastState => ({
            open: !lastState.open
        }))
    }

    render() {
        return (
            <div>
            <Dropdown isOpen={this.state.open} toggle={this.toggle}>
                <DropdownToggle caret>
                    Search by:
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => this.props.searchByTag('lumber')}>Lumber</DropdownItem>
                    <DropdownItem onClick={() => this.props.searchByTag('metal')}>Metal</DropdownItem>
                    <DropdownItem onClick={() => this.props.searchByTag('concrete')}>Concrete</DropdownItem>
                    <DropdownItem onClick={() => this.props.searchByTag('plumbing')}>Plumbing</DropdownItem>
                    <DropdownItem onClick={() => this.props.searchByTag('glass')}>Glass</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
        )
    }
}

export default SearchTag;
