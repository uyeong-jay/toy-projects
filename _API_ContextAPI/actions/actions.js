import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from "./types";

//loading, success, error 기본 상태
export const loading = {
  loading: true,
  data: null,
  error: null
};

// export const success = {
//   loading: false,
//   error: null
// };
export const success = (data) => ({
  loading: false,
  data,
  error: null
});

export const error = (error) => ({
  loading: true,
  data: null,
  error
});

//action creaters
export const Users = {
  loading: () => ({
    type: GET_USERS
  }),
  success: (data) => ({
    type: GET_USERS_SUCCESS,
    data
  }),
  error: (error) => ({
    type: GET_USERS_ERROR,
    error
  })
};

export const User = {
  loading: () => ({
    type: GET_USER
  }),
  success: (data) => ({
    type: GET_USER_SUCCESS,
    data
  }),
  error: (error) => ({
    type: GET_USER_ERROR,
    error
  })
};
