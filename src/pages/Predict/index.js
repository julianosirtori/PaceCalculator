import React from 'react';

import HeaderTitle from '../../components/HeaderTitle';
import Background from '../../components/Background';
import PreditorImage from '../../assets/img/preditor.png';

import {
  CardContent,
  HeaderCard,
  Row,
  InputStyled,
  ButtonCalc,
  ContentBody,
  FirstInfo,
  ImageCenter,
  TextInfo,

} from './styles';

const Predict = () => (
  <Background>
    <HeaderTitle>Preditor de tempo</HeaderTitle>
    <CardContent>
      <HeaderCard>
        <Row>
          <InputStyled type="kmh" placeholder="Km" label="Eu corri a distancia:" />
          <InputStyled type="time" placeholder=" hh:mm:ss" label="No tempo de:" />
        </Row>
        <Row>
          <InputStyled type="kmh" placeholder="Km" label="Eu corri a distancia:" />
          <ButtonCalc>Calcular Tempo</ButtonCalc>
        </Row>
      </HeaderCard>
      <ContentBody>
        <FirstInfo>
          <ImageCenter source={PreditorImage} />
          <TextInfo>Insira o Tempo e a Distancia para aparecer os ritmos de volta aqui</TextInfo>
        </FirstInfo>
      </ContentBody>
    </CardContent>
  </Background>
);

export default Predict;
