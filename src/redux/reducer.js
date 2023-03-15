import { POST_EMAIL } from "./type.js";

const initialState = {
  email: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};
