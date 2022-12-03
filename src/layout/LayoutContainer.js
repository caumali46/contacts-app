import React, { Component } from 'react';
import { Navbar, BImg } from 'bootstrap-4-react';
import ContactIcon from '../assets/icons/contacts.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLight, faIdBadge } from '@fortawesome/free-light-svg-icons';

const LayoutContainer = (props) => (
  <>
    <Navbar light bg="light">
      <Navbar.Brand href="#">
        {/* <BImg
          src={ContactIcon}
          width="30"
          height="30"
          display="inline-block"
          align="top"
          mr="1"
        /> */}
        <FontAwesomeIcon icon={'fa-solid fa-id-badge'} />
        <FontAwesomeIcon icon={faIdBadge} />
        Contacts
      </Navbar.Brand>
    </Navbar>
    <div class="container">{props.children}</div>
  </>
);
export default LayoutContainer;
