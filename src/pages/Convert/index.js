import React from 'react';
import { Text } from 'react-native';

import HeaderTitle from '../../components/HeaderTitle';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Background from '../../components/Background';
// import { Container } from './styles';

const Convert = () => (
  <Background>
    <HeaderTitle>Calculadora</HeaderTitle>
    <Card>
      <Text>TESTE</Text>
      <Button icon="arrow-left-right-bold" />
    </Card>
  </Background>
);

export default Convert;
