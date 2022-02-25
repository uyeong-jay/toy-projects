import { CREATE, REMOVE, TOGGLE } from './types';

export const createToDo = (data) => ({
  type: CREATE,
  data,
})

export const removeToDo = (data) => ({
  type: REMOVE,
  data,
})

export const toggleToDo = (data) => ({
  type: TOGGLE,
  data,
})