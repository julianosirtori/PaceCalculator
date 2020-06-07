import React from 'react';

import { Container } from './styles';

const Card = ({ children, ...props }) => (
  <Container {...props}>
    {children}
  </Container>
);

export default Card;
