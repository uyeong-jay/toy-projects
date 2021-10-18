import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice(
  {
    name: "toDosReducer",
    initialState: [],
    reducers: //mutate, immutate 둘다 가능
    {
      //reducer
      add: {

        reducer: (state, action) => {
          state.push({
            text: action.payload.text,
            id: action.payload.id
          })
        },

        //customizing action 
        prepare: (text) => {
          const id = Date.now();
          return { payload: { id, text } }
          //text말고도 id까지 action에서 가져올수 있도록 만듬
        }
      },

      remove: (state, action) => {
        return state.filter((toDo) => toDo.id !== action.payload);
      }
    }
  }
);

//store생성(toDos.reducer)
export const store = configureStore({
  reducer: toDos.reducer
})

//action들 모음(toDos.actions)
export const { add, remove } = toDos.actions;

