import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 10,
})`
  width: 100%;
  height: 55px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #F7F7F7;
  padding: 0 22px;
`;

export const ItemTab = styled.TouchableOpacity`
  align-items: center;
`;

export const Label = styled.Text`
  color: ${(props) => (props.isFocused ? '#2FB86E' : '#8B898C')};
`;
