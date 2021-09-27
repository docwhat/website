//
// @format

import styled from '@emotion/styled'

export default styled.button`
  background: var(--button-bg-color);
  border-radius: 4px;
  border: none;
  color: var(--button-text-color);
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  padding: 10px 20px;
  text-align: center;
  text-shadow: 1px 1px 2px var(--middle-color);
  transition: 0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97);

  &:hover {
    background: var(--button-hover-bg-color);
    box-shadow: 1px 1px 4px var(--middle-color);
    color: var(--button-hover-text-color);
    text-shadow: 1px 1px 5px black;
    transform: translateY(-1px);
  }

  &:focus {
    outline: 0;
  }

  &:active {
    box-shadow: none;
    filter: brightness(1.2);
    text-shadow: 1px 1px 2px var(--middle-color);
    transform: translateY(1px);
  }
`
