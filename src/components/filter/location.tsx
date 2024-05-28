import { useDispatch, useSelector } from "@/src/hooks/useRedux";
import { Location, Status } from "@/src/store/core/_model";
import { setSelectLocation, setStatus } from "@/src/store/reducer/appSlice";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
type Props = {
  location: Location;
};
const LocationFilterCard: React.FC<Props> = ({ location }) => {
  const dispatch = useDispatch();
  const { selectLocation } = useSelector((state) => state.app);
  const isActive = selectLocation.some((i) => i.id === location.id);
  const handlePressStatus = () => {
    dispatch(setSelectLocation(location));
  };
  return (
    <TouchableOpacity
      onPress={handlePressStatus}
      style={[styles.container, isActive && styles.active]}
    >
      <Text style={[styles.label, isActive && styles.labelActive]}>
        {location.name}
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
export default LocationFilterCard;
