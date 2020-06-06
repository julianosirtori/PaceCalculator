import React from 'react';
import { Text } from 'react-native';

import HeaderTitle from '../../components/HeaderTitle';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Background from '../../components/Background';
// import { Container } from './styles';

const Convert = () => (
  <Background>
    <HeaderTitle>Calculadora</HeaderTitle>
    <Card>
      <Text>TESTE</Text>
      <Button icon="arrow-left-right-bold" />
      <Input type="time" placeholder="00:00:00" label="Pace (min/km)" />
      <Input type="kmh" placeholder="Kilometros por hora" label="Velocidade (km/h)" />
    </Card>
  </Background>
);

export default Convert;
