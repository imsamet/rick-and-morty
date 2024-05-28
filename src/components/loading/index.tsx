import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useSelector } from "../../hooks/useRedux";
const Loading: React.FC = () => {
  const { isLoading } = useSelector((state) => state.app);
  return (
    isLoading && (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4);",
    zIndex: 10,
  },
});
export default Loading;
