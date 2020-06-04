import React from 'react';

import Shoes from '../../assets/img/shoes.png';
import { Container, Image } from './styles';

const Background = ({ children }) => (
  <Container>
    <Image source={Shoes} />
    {children}
  </Container>
);

export default Background;
