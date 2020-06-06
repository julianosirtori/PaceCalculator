import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, TextButton } from './styles';

const Button = ({ children, icon, ...props }) => (
  <Container {...props}>
    <TextButton>{children}</TextButton>
    {icon && (<Icon name={icon} size={24} color="#fff" />)}
  </Container>
);

export default Button;
