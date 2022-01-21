import { Component } from "react";
import styled from "styled-components";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
    this.setState((state) => ({ ...state, hasError: true }));
  }

  reloadPage = () => {
    window.location.pathname = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <StyledArea>
          <h2>Opps something went wrong..</h2>
          <Button onClick={this.reloadPage}>Reload the page</Button>
        </StyledArea>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const StyledArea = styled.div`
  color: var(--primary-clr);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: var(--primary-clr);
  color: white;
  padding: 10px;
`;
