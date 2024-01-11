import {ReactNode} from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return <StyledButton>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
  font-size: 16px;
  padding: 10px 14px;
  min-width: 140px;
  background-color: #007765;
  color: white;
  border: none;
  outline: none;
  border-radius: 8px;
`;