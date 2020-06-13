import React, { useState } from 'react';

import RadioForm from 'react-native-simple-radio-button';
import { paceVelocidadeRitmo, ferramentasTempoParaSegundo } from '../../math/convert';
import mask from '../../utils/masks';
import Card from '../Card';

import {
  Content, Form, Results, ButtonStyled, InputStyled, Result, Value, Label,
} from './styles';

const types = [
  { label: 'min/km', value: 'km' },
  { label: 'min/milha', value: 'milha' },
];

const RateConverter = () => {
  const [rate, setRate] = useState('');
  const [type, setType] = useState('km');

  const [minKm, setMinKm] = useState(0);
  const [kmH, setKmH] = useState(0);
  const [minMilha, setMinMilha] = useState(0);
  const [milhasH, setMilhasH] = useState(0);
  const [min400, setMin400] = useState(0);

  const [showResults, setShowResults] = useState(false);

  function submit() {
    setShowResults(true);

    let tempo = rate;
    if (type === 'milha') tempo *= 1.61;

    const results = paceVelocidadeRitmo(ferramentasTempoParaSegundo(tempo));

    setMinKm(results.minKm);
    setKmH(results.kmH);
    setMinMilha(results.minMilha);
    setMilhasH(results.milhasH);
    setMin400(results.min400);
  }


  return (
    <Card title="Conversor de Ritmo">
      <Content>
        <Form>
          <InputStyled
            placeholder="mm:ss"
            value={rate}
            onChangeText={(text) => setRate(mask.time(text))}
            label="Pace (min/km)"
          />
          <RadioForm
            radio_props={types}
            initial={0}
            buttonColor="#322153"
            labelColor="#322153"
            buttonSize={12}
            selectedLabelColor="#322153"
            selectedButtonColor="#2FB86E"
            onPress={(value) => { setType(value); }}
          />
          <ButtonStyled onPress={submit}>
            Calcular
          </ButtonStyled>
        </Form>
        {showResults && (
          <Results>
            <Result>
              <Value>{minKm}</Value>
              <Label>min/km</Label>
            </Result>
            <Result>
              <Value>{kmH}</Value>
              <Label>km/h</Label>
            </Result>
            <Result>
              <Value>{minMilha}</Value>
              <Label>min/milha</Label>
            </Result>
            <Result>
              <Value>{milhasH}</Value>
              <Label>milhas/h</Label>
            </Result>
            <Result>
              <Value>{min400}</Value>
              <Label>min/400m</Label>
            </Result>
          </Results>
        )}
      </Content>
    </Card>
  );
};

export default RateConverter;
