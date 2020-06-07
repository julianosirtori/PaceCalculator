import React from 'react';

import HeaderTitle from '../../components/HeaderTitle';
import Background from '../../components/Background';
import SplitImage from '../../assets/img/splits.png';

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

const Splits = () => (
  <Background>
    <HeaderTitle>Ritmo por volta</HeaderTitle>
    <CardContent>
      <HeaderCard>
        <Inputs>
          <InputStyled type="time" placeholder="min/km" label="Tempo" />
          <InputStyled type="kmh" placeholder=" km/h" label="Distancia" />
        </Inputs>
        <ButtonCalc>Calcular</ButtonCalc>
      </HeaderCard>
      <ContentBody>
        <FirstInfo>
          <ImageCenter source={SplitImage} />
          <TextInfo>Insira o Tempo e a Distancia para aparecer os ritmos de volta aqui</TextInfo>
        </FirstInfo>
      </ContentBody>
    </CardContent>
  </Background>
);

export default Splits;
