import React, { Component } from 'react';
import { Navbar, BImg } from 'bootstrap-4-react';
import ContactIcon from '../assets/icons/contacts.svg';

const LayoutContainer = (props) => (
  <>
    <Navbar light bg="light">
      <Navbar.Brand href="#">
        <BImg
          src={ContactIcon}
          width="30"
          height="30"
          display="inline-block"
          align="top"
          mr="1"
        />
        Contacts
      </Navbar.Brand>
    </Navbar>
    <div class="container">{props.children}</div>
  </>
);
export default LayoutContainer;
