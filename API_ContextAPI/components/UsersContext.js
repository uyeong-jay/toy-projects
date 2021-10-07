import React, { useReducer } from "react";
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from "../actions/types";
import { loading, success, error } from "../actions/actions";
import { UsersStateContext, UsersDispatchContext } from "../hooks/useContext";

const initialState = {
  loading: false,
  data: null,
  error: null
};

const initialUsersState = {
  users: initialState,
  user: initialState
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state, //나머지 유지
        users: loading
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: success(action.data)
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        users: error(action.error)
      };
    case GET_USER:
      return {
        ...state,
        user: loading
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: success(action.data)
      };
    case GET_USER_ERROR:
      return {
        ...state,
        user: error(action.error)
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialUsersState);

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};
