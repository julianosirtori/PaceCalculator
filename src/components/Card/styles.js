import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 5,
})`
  background: #F7F7F7;
  border-radius: 4px;
  padding: 16px 16px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;

`;

export const Title = styled.Text`
  color: #322153;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin-bottom: 8px;
`;
