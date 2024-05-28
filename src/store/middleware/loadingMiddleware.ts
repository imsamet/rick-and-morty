import { Middleware } from '@reduxjs/toolkit';
import { setLoading } from '../reducer/appSlice';

// Middleware tipini belirtmek için Middleware türünü kullanıyoruz
const loadingMiddleware: Middleware =
  ({ dispatch }) =>
  next =>
  action => {
    //@ts-ignore
    if (action.type.endsWith('/pending')) {
      dispatch(setLoading(true));
      //@ts-ignore
    } else if (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')) {
      dispatch(setLoading(false));
    }

    return next(action);
  };

export default loadingMiddleware;
