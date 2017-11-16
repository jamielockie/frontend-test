/*
*
* Helmet
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

function updateTitle(title) {
  if (document.title !== title) {
    document.title = title;
  }
}

function Helmet({ title }) {
  updateTitle(title);

  return (
    <span></span>
  );
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default onlyUpdateForKeys(['title'])(Helmet);
