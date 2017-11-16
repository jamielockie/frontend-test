/*
*
* HomePage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'components/Helmet';
import styled from 'styled-components';
import makeSelectHomePage from './selectors';

const StepContent = styled.div`
  border: 1px solid grey;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transform: 0.15s all;
`;

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  state = {
    step: 0,
  }

  handleNextStep = () => {
    this.setState((currentState) => ({
      ...currentState,
      step: currentState.step + 1,
    }));
  }

  render() {
    return (
      <div>
        <Helmet title="HomePage" />

        <div>
          <h1>Step {this.state.step + 1}</h1>

          <StepContent isVisible={this.state.step === 0}>
            <p>In the upper-right corner of any page, click +, and then click New repository.</p>
          </StepContent>

          <StepContent isVisible={this.state.step === '1'}>
            <p>Type a short, memorable name for your repository. For example, &#39;hello-world&#39;.</p>
          </StepContent>

          <button onClick={this.handleNextStep}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = makeSelectHomePage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
