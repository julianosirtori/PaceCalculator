import React from 'react';

import HeaderTitle from '../../components/HeaderTitle';
import Background from '../../components/Background';

import SpeedConverter from '../../components/SpeedConverter';
import RateConverter from '../../components/RateConverter';

const Convert = () => (
  <Background>
    <HeaderTitle>Conversores</HeaderTitle>
    <RateConverter />
    <SpeedConverter />
  </Background>
);

export default Convert;
