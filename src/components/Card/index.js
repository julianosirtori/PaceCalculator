import React from 'react';

import { Container, Title } from './styles';

const Card = ({ children, title, ...props }) => (
  <Container {...props}>
    {title && (<Title>{title}</Title>)}
    {children}
  </Container>
);

export default Card;
