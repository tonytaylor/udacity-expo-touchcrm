import { useDispatch, useStore } from "react-redux";

import { setAuth } from "./index";

export const useAuth = () => {
  const dispatch = useDispatch();
  const store = useStore();

  return {
    getAuth() {
      const { auth } = store.getState();
      return auth;
    },
    login(auth) {
      return new Promise((resolve) => {
        dispatch(setAuth(auth));
        resolve(true);
      })
    },
    logout() {
      return new Promise((resolve) => {
        dispatch(setAuth(null));
        resolve(true);
      })
    }
  }
};