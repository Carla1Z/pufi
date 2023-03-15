import { POST_EMAIL } from "./type";

export const postEmail = (payload) => {
  return {
    type: POST_EMAIL,
    payload,
  };
};
