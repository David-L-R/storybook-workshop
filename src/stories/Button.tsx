import React from "react";
import { styled } from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  type?: string;
  onClick?: (e: any) => void;
}

interface IStyledButton {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
}

const StyledButton = styled.button<IStyledButton>`
  padding: 10px 20px;
  background-color: transparent;
  outline: none;
  border: 1px solid palevioletred;
  color: palevioletred;
  border-radius: 3px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
    filter: brightness(85%);
  }

  ${(p) =>
    p.primary &&
    `
      background-color: palevioletred;
      border-color: palevioletred;
      color: white;
    `}
  ${(p) => {
    switch (p.size) {
      case "small":
        return `
          font-size: 12px;
          `;
      case "medium":
        return ` 
          font-size: 14px;
          `;
      case "large":
        return `
          font-size: 16px;
          `;
      default:
        return `
          font-size: 14px;
          `;
    }
  }}
`;

export const Button = ({
  children,
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  type = "button",
  onClick = () => {},
  ...props
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} size={size} primary={primary} {...props}>
      {label.toUpperCase()}
    </StyledButton>
  );
};
