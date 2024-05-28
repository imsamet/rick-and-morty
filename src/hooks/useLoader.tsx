import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "./useRedux";
import getCharactersAction from "../store/actions/getCharacters";
import getEpisodesActions from "../store/actions/getEpisodes";
import getLocationsActions from "../store/actions/getLocations";

const useLoader = () => {
  const dispatch = useDispatch();
  const { characters, episodes, locations } = useSelector((state) => state.app);

  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const getCharacters = useCallback(() => {
    characters.length === 0 && dispatch(getCharactersAction({}));
  }, [dispatch, characters]);
  const getEpisodes = useCallback(() => {
    episodes.length === 0 && dispatch(getEpisodesActions());
  }, [dispatch, episodes]);
  const getLocations = useCallback(() => {
    locations.length === 0 && dispatch(getLocationsActions());
  }, [dispatch, locations]);

  useEffect(() => {
    async function prepare() {
      try {
        getCharacters();
        getEpisodes();
        getLocations();
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [dispatch]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return { appIsReady, onLayoutRootView };
};

export default useLoader;
