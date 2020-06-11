import React, { useState } from 'react';

import masks from '../../utils/masks';
import HeaderTitle from '../../components/HeaderTitle';
import Background from '../../components/Background';


import {
  CardContent, ContentRow, InputStyled, ButtonConvert, ContentCollumn, ButtonLong,
} from './styles';

const Convert = () => {
  const [paceForConvert, setPaceForConvert] = useState('');
  const [velocityForConvert, setVelocityForConvert] = useState('');

  const [distance, setDistance] = useState('');
  const [velocity, setVelocity] = useState('');
  const [time, setTime] = useState('');

  function convertCardOne() {
    console.log('Card1');
  }

  function convertCardTwo() {
    console.log('Card2');
  }

  return (
    <Background>
      <HeaderTitle>Calculadora</HeaderTitle>
      <CardContent>
        <ContentRow>
          <InputStyled
            type="time"
            value={paceForConvert}
            placeholder="mm:ss"
            label="Pace"
            onChangeText={(text) => setPaceForConvert(masks.time(text))}
          />
          <ButtonConvert onPress={convertCardOne} icon="arrow-left-right-bold" />
          <InputStyled
            type="kmh"
            value={velocityForConvert}
            placeholder=" km/h"
            label="Velocidade"
            onChangeText={(text) => setVelocityForConvert(masks.distance(text))}
          />
        </ContentRow>
      </CardContent>
      <CardContent>
        <ContentCollumn>
          <ContentRow>
            <InputStyled type="time" placeholder="min/km" />
            <ButtonLong onPress={convertCardTwo} icon="timer">Tempo</ButtonLong>
          </ContentRow>
        </ContentCollumn>
        <ContentCollumn>
          <ContentRow>
            <InputStyled type="kmh" placeholder=" km/h" />
            <ButtonLong onPress={convertCardTwo} icon="run-fast">Velocidade</ButtonLong>
          </ContentRow>
        </ContentCollumn>
        <ContentCollumn>
          <ContentRow>
            <InputStyled type="kmh" placeholder=" km/h" />
            <ButtonLong onPress={convertCardTwo} icon="road">Distancia</ButtonLong>
          </ContentRow>
        </ContentCollumn>
      </CardContent>
    </Background>
  );
};

export default Convert;
