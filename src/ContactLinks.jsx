import React from 'react';

const ContactLinks = (props) => (
  <div>
    <a href={props.link} rel="noreferrer noopener" target="_blank">
      <i className={props.faIcon} aria-hidden="true"></i>
    </a>
  </div>
);

export default ContactLinks;