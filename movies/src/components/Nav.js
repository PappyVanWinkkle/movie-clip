import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

class movieBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar style={{ background: '#222f3e' }} light expand="md" className="fixed-top">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<NavbarBrand>
							<i className="fas fa-video fa-2x " style={{ color: '#FF0000' }} />
						</NavbarBrand>
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret className="text-light">
									Movies
								</DropdownToggle>
								<DropdownMenu right>
									<Link to="/shows" style={{ textDecoration: 'none' }}>
										<DropdownItem>Popular</DropdownItem>
									</Link>
									<Link to="/topMovies" style={{ textDecoration: 'none' }}>
										<DropdownItem>Top Rated</DropdownItem>
									</Link>
									<Link to="/playing" style={{ textDecoration: 'none' }}>
										<DropdownItem>In Cinemas</DropdownItem>
									</Link>
									<Link to="/new" style={{ textDecoration: 'none' }}>
										<DropdownItem>New Movies</DropdownItem>
									</Link>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default movieBar;
