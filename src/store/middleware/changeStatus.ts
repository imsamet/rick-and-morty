import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setLoading, setStatus } from "../reducer/appSlice";
import { InitialState } from "../core/_model";
import getCharacters from "../actions/getCharacters";

export const changeStatus = createListenerMiddleware();

changeStatus.startListening({
  actionCreator: setStatus,
  effect: async (action, listenerApi) => {
    const { app } = listenerApi.getState() as { app: InitialState };
    listenerApi.dispatch(
      getCharacters({ name: app.search, status: app.selectStatus || undefined })
    );
  },
});
