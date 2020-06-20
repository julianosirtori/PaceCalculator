import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import masks from '../../utils/masks';
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
  LabelResult,
  Result

} from './styles';

const Predict = () => {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [distanceWantToRun, setDistanceWantToRun] = useState('');
  const [result, setResult] = useState('');

  function submit(){
    const seconds = convertTimeToSeconds();
    const meters = convertKilometrosMeters();
    const secondsForMeters =  seconds / meters;

    const secondsPredict = (parseInt(distanceWantToRun) * 1000) * secondsForMeters;
    
    let date = new Date(0);
    date.setSeconds(secondsPredict);
    setResult(date.toISOString().substr(11, 8));
    Keyboard.dismiss();
  }

  function convertTimeToSeconds(){
    const timeSplitted = time.split(':');
    if(time.split(':').length < 3){
      timeSplitted.push("00");
    }

    return ((parseInt(timeSplitted[0])  * 60) * 60) + // horas para segundos
      (parseInt(timeSplitted[1]) * 60) + // minutos para segundos
      parseInt(timeSplitted[2]); // segundos
  }

  function convertKilometrosMeters(){
    return distance * 1000;
  }

  return (
    <Background>
      <HeaderTitle>Preditor de tempo</HeaderTitle>
      <CardContent>
        <HeaderCard>
          <Row>
            <InputStyled 
              value={distance} 
              onChangeText={(text) => setDistance(text)}
              placeholder="Km" 
              label="Eu corri a distancia:" />
            <InputStyled
              value={time} 
              onChangeText={(text) => setTime(masks.fulltime(text))}
              placeholder=" hh:mm:ss" 
              label="No tempo de:" 
            />
          </Row>
          <Row>
            <InputStyled 
              value={distanceWantToRun} 
              onChangeText={(text) => setDistanceWantToRun(text)}
              placeholder="Km" 
              label="E quero Correr:" />
            <ButtonCalc
              onPress={submit}
            >
              Calcular Tempo
            </ButtonCalc>
          </Row>
        </HeaderCard>
        <ContentBody>
          {result !== '' ? 
          (<FirstInfo>
            <LabelResult>Tempo Preditado:</LabelResult>
            <Result>{result}</Result>
          </FirstInfo>)
          :
          (<FirstInfo>
            <ImageCenter source={PreditorImage} />
            <TextInfo>Insira os dados acima para calcular o tempo preditado</TextInfo>
          </FirstInfo>) 
          } 
          
        </ContentBody>
      </CardContent>
    </Background>
  );
};

export default Predict;
