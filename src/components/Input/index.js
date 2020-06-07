import React, { useState } from 'react';

import { Container, Label, InputText } from './styles';

const Input = ({ label, type, ...props }) => {
  const [value, setValue] = useState('');

  function changeTextByType(text, teste) {
    let newValue = text;
    if (type === 'kmh') {
      newValue = newValue.includes('km') ? newValue.split(' km')[0] : newValue;

      setValue(`${newValue} km`);
    } else {
      setValue(teste);
    }
    // setValue(text);
  }

  return (
    <Container>
      {label && (<Label>{label}</Label>)}
      <InputText
        keyboardType="numeric"
        value={value}
        onChangeText={(text) => changeTextByType(text)}
        {...props}
      />
    </Container>
  );
};

export default Input;
