import React, { Component } from 'react';
import { Navbar, BImg } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';

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
        <FontAwesomeIcon icon={faIdBadge} />
        Contacts
      </Navbar.Brand>
    </Navbar>
    <div class="container">{props.children}</div>
  </>
);
export default LayoutContainer;
