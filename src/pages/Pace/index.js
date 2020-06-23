import React from 'react';

import HeaderTitle from '../../components/HeaderTitle';
import Background from '../../components/Background';
import PaceImage from '../../assets/img/pace.png';

import {
  CardContent,
  HeaderCard,
  Inputs,
  InputStyled,
  ButtonCalc,
  ContentBody,
  FirstInfo,
  ImageCenter,
  TextInfo,

} from './styles';

const Pace = () => (
  <Background>
    <HeaderTitle>Calculadora de Pace</HeaderTitle>
    <CardContent>
      <HeaderCard>
        <Inputs>
          <InputStyled type="kmh" placeholder=" km/h" label="Eu corri a distancia" />
          <InputStyled type="time" placeholder="hh:mm:ss" label="No tempo de" />
        </Inputs>
        <ButtonCalc>Calcular</ButtonCalc>
      </HeaderCard>
      <ContentBody>
        <FirstInfo>
          <ImageCenter source={PaceImage} />
          <TextInfo>Insira o Tempo e a Distancia para aparecer os paces aqui</TextInfo>
        </FirstInfo>
      </ContentBody>
    </CardContent>
  </Background>
);

export default Pace;
