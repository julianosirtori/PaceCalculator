import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, ItemTab, Label } from './styles';

const tabs = [
  { icon: 'calculator', label: 'Converter' },
  { icon: 'speedometer', label: 'Splits' },
  { icon: 'poll', label: 'Preditor' },
  { icon: 'history', label: 'Pace' },
];

const TabBar = ({ state, navigation }) => {
  function navigateToRoute(name) {
    navigation.navigate(name);
  }

  return (
    <Container>
      {state.routes.map((route, index) => {
        const tab = tabs[index];
        const isFocused = state.index === index;

        return (
          <ItemTab key={route.name} onPress={() => navigateToRoute(route.name)}>
            <Icon
              name={tab.icon}
              size={24}
              color={isFocused ? '#2FB86E' : '#8B898C'}
            />
            <Label isFocused={isFocused}>{tab.label}</Label>
          </ItemTab>
        );
      })}

    </Container>
  );
};

export default TabBar;
