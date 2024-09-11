import React from "react";
import styled from "styled-components";

const Button = ({
  type,
  onClick,
  children,
  width,
  border,
  backgroundColor,
  color,
  height,
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      width={width}
      border={border}
      backgroundColor={backgroundColor}
      color={color}
      height={height}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  width: ${(props) => props.width || "25%"};
  height: ${(props) => props.height || "25px"};
  font-size: 0.7rem;
  border: ${(props) => props.border || "none"};
  text-align: center;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor || "inherit"};
  color: ${(props) => props.color || "black"};
  cursor: pointer; /* 버튼에 마우스 커서를 손 모양으로 변경 */
`;

export default Button;
