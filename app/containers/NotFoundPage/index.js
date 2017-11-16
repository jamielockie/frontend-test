/*
*
* NotFoundPage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'components/Helmet';

export class NotFoundPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <Helmet
          title="NotFoundPage"
          meta={[
            { name: 'description', content: 'Description of NotFoundPage' },
          ]}
        />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(NotFoundPage);
