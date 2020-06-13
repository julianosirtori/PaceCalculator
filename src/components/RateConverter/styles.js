import styled from 'styled-components/native';
import Button from '../Button';
import Input from '../Input';

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Form = styled.View`
  width: 100%;
  max-width: 140px;
`;

export const Results = styled.View`
  width: 100%;
  justify-content: center;
`;

export const Result = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 160px;
  margin-bottom: 6px;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 8px;
`;

export const InputStyled = styled(Input)`
  margin-bottom: 8px;
`;

export const Value = styled.Text`
  flex: 1;
  text-align:  right;
  margin-right: 8px;
  font-weight: bold;
  font-size: 14px;
  color: #2FB86E;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #AAAAAA;
  width: 72px;
`;
