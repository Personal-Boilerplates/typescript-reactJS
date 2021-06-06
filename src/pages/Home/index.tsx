import React from 'react';
import YourFirstComponent from 'shared/components/YourFirstComponent';
import { PageFC } from 'shared/types/customReactTypes';
import * as S from './styles';

const Home: PageFC = () => {
  return (
    <S.Container>
      <h1>Home</h1>
      <YourFirstComponent>Your first Component</YourFirstComponent>
    </S.Container>
  );
};

Home.route = {
  path: '/',
};

export default Home;
