import React, { useState } from 'react';

import RadioForm from 'react-native-simple-radio-button';
import mask from '../../utils/masks';
import Card from '../Card';

import {
  Content, Form, Results, ButtonStyled, InputStyled, Result, Value, Label,
} from './styles';

const types = [
  { label: 'min/km', value: 0 },
  { label: 'min/milha', value: 1 },
];

const SpeedConverter = () => {
  const [speed, setSpeed] = useState('');
  const [type, setType] = useState(0);

  function calc() {

  }

  return (
    <Card title="Conversor de Velocidade">
      <Content>
        <Form>
          <InputStyled
            placeholder="Km/h"
            value={speed}
            onChangeText={(text) => setSpeed(mask.distance(text))}
            label="Velocidade (km/h)"
          />
          <RadioForm
            radio_props={types}
            initial={0}
            buttonColor="#322153"
            labelColor="#322153"
            buttonSize={12}
            selectedLabelColor="#322153"
            selectedButtonColor="#2FB86E"
            onPress={(value) => { setType({ value }); }}
          />
          <ButtonStyled>
            Calcular
          </ButtonStyled>
        </Form>
        <Results>
          <Result>
            <Value>00:06:50</Value>
            <Label>min/km</Label>
          </Result>
          <Result>
            <Value>3.9</Value>
            <Label>km/h</Label>
          </Result>
          <Result>
            <Value>00:24:57</Value>
            <Label>min/milha</Label>
          </Result>
          <Result>
            <Value>2.4</Value>
            <Label>milhas/h</Label>
          </Result>
          <Result>
            <Value>00:06:12</Value>
            <Label>min/400m</Label>
          </Result>
        </Results>
      </Content>
    </Card>
  );
};

export default SpeedConverter;
