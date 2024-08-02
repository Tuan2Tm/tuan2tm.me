import React, { Dispatch, SetStateAction } from "react";

type Props = {
  state: number;
  setState: Dispatch<SetStateAction<Number>>;
};

const Num = ({ state, setState }: Props) => {
  return <div></div>;
};

const Num1: React.FC<Props> = ({ state, setState }) => {
  return <div></div>;
};

export default Num;
