/*
*
* App
*
* This component is the skeleton around the actual pages, and should only
* contain code that should be seen on all pages. (e.g. navigation bar)
*/

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'components/Helmet';
// import styled from 'styled-components';

import withProgressBar from 'components/ProgressBar';

export function App(props) {
  return (
    <div>
      <Helmet title="React.js Boilerplate" />

      {React.Children.toArray(props.children)}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default withProgressBar(App);
