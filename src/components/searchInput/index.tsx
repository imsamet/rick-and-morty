import { useDispatch, useSelector } from "@/src/hooks/useRedux";
import getCharacters from "@/src/store/actions/getCharacters";
import { setSearch } from "@/src/store/reducer/appSlice";
import lodash from "lodash";
import { useCallback } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import SvgSearch from "../icons/Search";
import { useRef } from "react";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const { selectStatus } = useSelector((state) => state.app);
  const inputRef = useRef<TextInput>(null);
  const lodashSave = useCallback(
    lodash.debounce((e: string) => {
      dispatch(
        getCharacters({
          name: e,
          status: selectStatus || undefined,
        })
      );
    }, 500),
    [selectStatus]
  );
  const handleChange = (e: string) => {
    dispatch(setSearch(e));
    lodashSave(e);
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => inputRef.current?.focus()}
      style={styles.container}
    >
      <SvgSearch color="#999999" width={24} height={24} />
      <TextInput
        placeholder="Search"
        onChangeText={handleChange}
        style={styles.input}
        ref={inputRef}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#999999",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 999,
    height: 40,
    gap: 5,
    flexDirection: "row",
  },
  input: {},
});

export default Search;
