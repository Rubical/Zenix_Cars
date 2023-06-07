import { useDispatch } from "react-redux";
import { bindActionCreators, combineReducers } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { carSlice } from "../store/car.slice";

const rootActions = {
  ...carSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
