import styled from 'styled-components/native';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Button from '../../components/Button';

export const CardContent = styled(Card)`
  margin-bottom: 32px;
  padding: 16px;
  padding-right: 0px;
  margin-right: 16px;
  margin-left: 16px;
`;

export const HeaderCard = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

export const Inputs = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 12px;

`;

export const InputStyled = styled(Input)`
  margin-right: 16px;
`;

export const ButtonCalc = styled(Button)`
  width: 90px;
  margin-right: 16px;
`;


export const ContentBody = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FirstInfo = styled.View`
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const ImageCenter = styled.Image`
  width: 220px;
  height: 119px;
`;

export const TextInfo = styled.Text`
   width: 220px;
   text-align: center;
`;
