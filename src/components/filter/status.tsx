import { useDispatch, useSelector } from "@/src/hooks/useRedux";
import { Status } from "@/src/store/core/_model";
import { setStatus } from "@/src/store/reducer/appSlice";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
type Props = {
  status: Status;
};
const StatusFilterCard: React.FC<Props> = ({ status }) => {
  const dispatch = useDispatch();
  const { selectStatus } = useSelector((state) => state.app);
  const handlePressStatus = () => {
    dispatch(setStatus(status));
  };
  return (
    <TouchableOpacity
      onPress={handlePressStatus}
      style={[styles.container, selectStatus === status && styles.active]}
    >
      <Text
        style={[styles.label, selectStatus === status && styles.labelActive]}
      >
        {status}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CCCCCC",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 999,
  },
  active: {
    backgroundColor: "#2B2B2B",
  },
  label: {
    fontWeight: "600",
    color: "#2B2B2B",
  },
  labelActive: {
    color: "#fff",
  },
});
export default StatusFilterCard;
