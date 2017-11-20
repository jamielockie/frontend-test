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

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px;
  max-width: 980px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: flex-end;
  width: 60%;
  min-width: 300px;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
  border-top: 8px solid #2196f3;
  border-radius: 5px;
  span {
    font-weight: 700;
  }
`;

const CardTitle = styled.div`
  h1 {
    font-weight: 500px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: #2196f3;
  padding: 11px 8px 8px 8px;
  background: #fff;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    transition: all 0.3s; 
  }
`;

const ButtonPrev = Button.extend`
  color: ${({ disabled }) => disabled ? 'rgba(0,0,0,0.2)' : '#2196f3'};
  &:hover {
    box-shadow: none;
  }
`;

const StepContent = styled.div`
  display: ${({ isVisible }) => isVisible ? 'inline' : 'none'};
  transition: display 0.5s;
  p, li {
    font-family: inherit;
    line-height: 24px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.541327);
  }
  ul {
    padding-left: 20px;
  }
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

  handlePrevStep = () => {
    this.setState((currentState) => ({
      ...currentState,
      step: currentState.step - 1,
    }));
  }

  render() {
    return (
      <Wrapper>
          <Helmet title="HomePage" />
          {this.state.step < 6 ?
            <CardContainer>
              <CardTitle>
                <h1>Step {this.state.step + 1}</h1>
              </CardTitle>

              <StepContent isVisible={this.state.step <= 0}>
                <p>In the upper-right corner of any page, click <span>+</span>, and then click <span>New repository.</span></p>
              </StepContent>

              <StepContent isVisible={this.state.step === 1}>
              <p>Type a short, memorable name for your repository. For example, "hello-world".</p>
              </StepContent>

              <StepContent isVisible={this.state.step === 2}>
              <p>Optionally, add a description of your repository. For example, "My first repository on GitHub".</p>
              </StepContent>

              <StepContent isVisible={this.state.step === 3}>
                <p><span>Choose between creating a public or private repository.</span></p>
                <ul>
                  <li><span>Public</span> repositories are a great choice for getting started. They're visible to any user on GitHub, so you can benefit from a collaborative community.</li>
                  <li><span>Private</span> repositories require a little more setup. They're only available to you, the repository owner, as well as any collaborators you choose to share with. See <a target="_blank" href="https://help.github.com/articles/github-s-billing-plans/">GitHub's billing plans.</a></li>
                </ul>
              </StepContent>

              <StepContent isVisible={this.state.step === 4}>
                <p>Select <span>Initialize this repository with a README.</span></p>
              </StepContent>

              <StepContent isVisible={this.state.step === 5}>
                <p>Click <span>Create repository</span>.</p>
              </StepContent>

              <ButtonContainer>
                <ButtonPrev onClick={this.handlePrevStep} disabled={this.state.step < 1}>
                  Previous
                </ButtonPrev>

                <Button onClick={this.handleNextStep}>
                  Next
                </Button>
              </ButtonContainer>
            </CardContainer>
          :
            <CardContainer>
              <CardTitle>
                <h1>Congratulations!</h1>
              </CardTitle>

              <StepContent isVisible={this.state.step === 6}>
                <p>You've successfully created your first repository, and initialized it with a README file.</p>
              </StepContent>
            </CardContainer>
          }
      </Wrapper>
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
