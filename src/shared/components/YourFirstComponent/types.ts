import React from 'react';

export type YourFirstComponentPropsType = {
  style?: React.CSSProperties;
  innerRef?(e: Element | null): void;
  className?: string;
};

export type YourFirstComponentType = React.FC<YourFirstComponentPropsType>;
