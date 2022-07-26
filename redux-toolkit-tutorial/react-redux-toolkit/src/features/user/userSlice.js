//1. createSlice, createAsyncThunk, axios 불러오기
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//2. initialState 생성
const initialState = {
  loading: false,
  users: null,
  error: null,
};

//3. createAsyncThunk로 데이터 가져오기
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  //data를 콘솔에 보여줄려고 return을 넣어준 후
  //index.js에서는 unsubscribe()를 주석 처리 해주기
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
  // .catch((err) => err.res.data);
});

//4. createSlice로 pending, fulfilled, rejected 넣은 리듀서 만들기
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.users = null;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = null;
      // state.error = action.payload;
      state.error = action.error.message;
    });
  },
});

//5. 자신의 Slice에서 reducer 내보내기
//6. 데이터 가져오는 함수(fetchUsers) 내보내기
export default userSlice.reducer;
