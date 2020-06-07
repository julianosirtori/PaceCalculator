import React from 'react';

import HeaderTitle from '../../components/HeaderTitle';
import Background from '../../components/Background';

import {
  CardContent, ContentRow, InputStyled, ButtonConvert, ContentCollumn, ButtonLong,
} from './styles';

const Convert = () => (
  <Background>
    <HeaderTitle>Calculadora</HeaderTitle>
    <CardContent>
      <ContentRow>
        <InputStyled type="time" placeholder="min/km" label="Pace" />
        <ButtonConvert icon="arrow-left-right-bold" />

        <InputStyled type="kmh" placeholder=" km/h" label="Velocidade" />
      </ContentRow>

    </CardContent>
    <CardContent>
      <ContentCollumn>
        <ContentRow>
          <InputStyled type="time" placeholder="min/km" />
          <ButtonLong icon="timer">Tempo</ButtonLong>
        </ContentRow>
      </ContentCollumn>
      <ContentCollumn>
        <ContentRow>
          <InputStyled type="kmh" placeholder=" km/h" />
          <ButtonLong icon="run-fast">Velocidade</ButtonLong>
        </ContentRow>
      </ContentCollumn>
      <ContentCollumn>
        <ContentRow>
          <InputStyled type="kmh" placeholder=" km/h" />
          <ButtonLong icon="road">Distancia</ButtonLong>
        </ContentRow>
      </ContentCollumn>
    </CardContent>
  </Background>
);

export default Convert;
