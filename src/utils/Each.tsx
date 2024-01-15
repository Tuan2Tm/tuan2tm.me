import React, { Children, ReactNode } from 'react';

interface EachProps<T> {
  render: (item: T, index: number) => ReactNode;
  of: Array<T>;
}

export const Each = <T,>({ render, of }: EachProps<T>) =>
  Children.toArray(of.map((item: T, index: number) => render(item, index)));
