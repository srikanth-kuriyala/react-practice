import React from 'react';
import PropTypes from 'prop-types';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const HeaderMenu = ({ menu }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav" key={1}>
                    <Nav className="me-auto">
                        {menu.map((item, index) =>
                            (item?.children
                                && item?.children.length) ?
                                <NavDropdown
                                    title={item.name}
                                    id="basic-nav-dropdown"
                                    key={index}
                                >
                                    {item?.children.map((sub, index1) => 
                                        <NavDropdown.Item
                                            href={`#${sub.url}`}
                                            key={index1}
                                        >
                                            {sub.name}
                                        </NavDropdown.Item>
                                    )}
                                </NavDropdown>
                                :
                                <Nav.Link
                                    href={`#${item.url}`}
                                    key={index}
                                >
                                    {item.name}
                                </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}

HeaderMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string,
        children: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string
        }))
    }))
};

HeaderMenu.defaultProps = {
  menu: null,
};
