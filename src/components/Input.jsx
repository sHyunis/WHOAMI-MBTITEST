import React from "react";
import styled from "styled-components";

const Input = ({ border, placeholder, type, onChange, name, value, width }) => {
  return (
    <InputStyle
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      name={name}
      value={value}
      width={width}
      border={border}
      required
    ></InputStyle>
  );
};

const InputStyle = styled.input`
  width: ${(props) => props.width || "200px"};
  height: 25px;
  background-color: inherit;
  font-size: 0.6rem;
  text-indent: 0.5rem;
  border-bottom: 1px solid black;
  outline: none;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  &::placeholder {
    font-size: 0.6rem;
    color: darkgray;
  }
`;
export default Input;
