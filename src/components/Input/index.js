import React from 'react';

import {
  Container, Label, InputText,
} from './styles';

const Input = ({
  label, style, type, ...props
}) => (
  <Container style={style}>
    {label && (<Label>{label}</Label>)}
    <InputText
      {...props}
      keyboardType="numeric"
      style={{}}
    />

  </Container>
);

export default Input;
