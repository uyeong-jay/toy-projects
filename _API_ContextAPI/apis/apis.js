import axios from "axios";
import { Users, User } from "../actions/actions";

export const fetchUsers = async (dispatch) => {
  dispatch(Users.loading());
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(Users.success(response.data));
  } catch (e) {
    dispatch(Users.error(e));
  }
};

export const fetchUser = async (dispatch, id) => {
  dispatch(User.loading());
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch(User.success(response.data));
  } catch (e) {
    dispatch(User.error(e));
  }
};
