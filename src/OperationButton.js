import React from "react";
import { ACTIONS } from "./App";

const OperationButton = ({ operation, dispatch }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPEARATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;
