import { Dispatch, SetStateAction } from "react";

export const toggleState = (
  stateSetter1: Dispatch<SetStateAction<boolean>>,
  stateSetter2: Dispatch<SetStateAction<boolean>>,
  state1: boolean,
  state2: boolean
) => {
  stateSetter1((prev) => !prev);
  if (state2) stateSetter2(false);
};
