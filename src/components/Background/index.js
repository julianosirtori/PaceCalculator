import React from 'react';

import Shoes from '../../assets/img/shoes.png';
import { Container, Image, ScrollView } from './styles';

const Background = ({ children }) => (
  <Container>
    <Image source={Shoes} />
    <ScrollView keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>

  </Container>
);

export default Background;
