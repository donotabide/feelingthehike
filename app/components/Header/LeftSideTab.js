import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.1em 1em;
  margin: 0.5em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #fff;

  background: ${props => props.memories ? rgba(204,195,174, 0.8) : rgba(231,197,132, 0.8)};

  &:active {
    background: rgba(204,195,174, 1);   
    color: #fff;
  }
`;
