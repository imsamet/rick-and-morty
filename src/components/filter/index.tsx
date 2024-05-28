import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  UIManager,
} from "react-native";
import SvgFilter from "../icons/Filter";
import { useState } from "react";
import Search from "../searchInput";
import { Status } from "@/src/store/core/_model";
import StatusFilterCard from "./status";
import { useSelector } from "@/src/hooks/useRedux";
import LocationFilterCard from "./location";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Filter: React.FC = () => {
  const { locations } = useSelector((state) => state.app);
  const [isOpen, setOpen] = useState<boolean>(false);
  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen((prev: boolean) => !prev);
  };
  const status: Status[] = ["Alive", "Dead", "unknown"];
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Search />
        <TouchableOpacity onPress={handlePress}>
          <SvgFilter width={40} height={40} color="#999999" />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.box,
          { height: isOpen ? 400 : 0, padding: isOpen ? 6 : 0 },
        ]}
      >
        <View style={styles.filterBox}>
          <Text style={styles.label}>Status:</Text>
          <View style={styles.filterContent}>
            {status.map((i) => (
              <StatusFilterCard key={i} status={i} />
            ))}
          </View>
        </View>
        <View style={styles.filterScrollBox}>
          <Text style={styles.label}>Locations:</Text>
          <ScrollView style={styles.scroll}>
            <View style={styles.filterLocationContent}>
              {locations.map((i) => (
                <LocationFilterCard key={i.id} location={i} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  box: {
    zIndex: 10,
    width: "100%",
    overflow: "hidden",
    gap: 20,
  },
  filterBox: {
    gap: 5,
  },
  filterScrollBox: {
    flex: 1,
    gap: 5,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
  },
  filterContent: {
    flexDirection: "row",
    gap: 5,
  },
  scroll: {
    flex: 1,
    overflow: "hidden",
  },
  filterLocationContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
});
export default Filter;
