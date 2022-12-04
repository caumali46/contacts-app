import React from 'react';
import { Navbar, Container } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';

const LayoutContainer = (props) => (
  <>
    <Navbar light bg="info">
      <Container>
        <Navbar.Brand href="#">
          <FontAwesomeIcon icon={faIdBadge} className="mr-2" />
          Contacts
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Container className="mt-5">{props.children}</Container>
  </>
);
export default LayoutContainer;
