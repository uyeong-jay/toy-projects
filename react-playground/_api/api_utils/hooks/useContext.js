import { createContext, useContext } from "react";

export const UsersStateContext = createContext(null);
export const UsersDispatchContext = createContext(null);

export const useUsersState = () => {
  const state = useContext(UsersStateContext);
  if (!state) throw new Error("1. Connot find UsersProvider");
  return state;
};

export const useUersDispatch = () => {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) throw new Error("2. Connot find UsersProvider");
  return dispatch;
};
