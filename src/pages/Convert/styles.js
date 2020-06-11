import styled from 'styled-components/native';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const CardContent = styled(Card)`
 margin-bottom: 32px;
 padding: 16px;
 margin-right: 16px;
 margin-left: 16px;
`;

export const InputStyled = styled(Input)`
  margin-right: 16px;
  width: 90px;
  
`;

export const ButtonConvert = styled(Button)`
  margin-right: 16px;
`;

export const ButtonLong = styled(Button)`
  width: 154px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 8px;
  align-items: flex-end;
`;

export const ContentCollumn = styled.View`
  flex-direction: column;
`;
