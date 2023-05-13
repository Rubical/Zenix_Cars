import { useDispatch } from "react-redux";
import { bindActionCreators, combineReducers } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { carShowcaseSlice } from "../store/carShowcase.slice";

const rootActions = combineReducers({
  ...carShowcaseSlice.actions,
});

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
