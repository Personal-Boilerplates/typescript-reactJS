import React from 'react';
import * as T from './types';
import * as S from './styles';

const YourFirstComponent: T.YourFirstComponentType = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      {children}
    </S.Container>
  );
};

export default YourFirstComponent;
