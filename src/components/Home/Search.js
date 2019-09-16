import React from "react";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  width: 624px;
  margin: 0 auto;
  border-radius: 2px;
  background-color: #fff;
  margin-top: 20px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px 150px 18px 17px;
  background: none;
  border: none;
  line-height: 17px;
  font-size: 14px;
  color: #9b9b9b;
  box-sizing: border-box;
  outline: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  position: relative;
`;

const SubmitBtn = styled.button`
  background-color: #00b2fe;
  color: white;
  width: 50px;
  height: 30px;
  font-size: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  font-weight: 600;
`;

export default () => {
  return (
    <Form>
      <Input placeholder="소환사명"></Input>
      <SubmitBtn>.GG</SubmitBtn>
    </Form>
  );
};
