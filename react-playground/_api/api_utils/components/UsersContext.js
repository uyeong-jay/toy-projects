import React, { useReducer } from "react";
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from "../_types/types";
import { UsersStateContext, UsersDispatchContext } from "../hooks/useContext";
import * as api from "../apis/apis";
import { pormiseDispatcher } from "../_utils/async_utils";
import { reducerStateUtils, reducerUtil } from "../_utils/reducer_utils";

const { initial } = reducerStateUtils;

const initialUsersState = {
  users: initial(),
  user: initial()
};

export const getUsers = pormiseDispatcher(GET_USERS, api.fetchUsers);
export const getUser = pormiseDispatcher(GET_USER, api.fetchUser);

const usersReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
    case GET_USERS_SUCCESS:
    case GET_USERS_ERROR:
      // const users = reducerUtil(GET_USERS, "users", true);
      // return users(state, action);
      return reducerUtil(GET_USERS, "users", true)(state, action);
    case GET_USER:
    case GET_USER_SUCCESS:
    case GET_USER_ERROR:
      return reducerUtil(GET_USER, "user", true)(state, action);
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
