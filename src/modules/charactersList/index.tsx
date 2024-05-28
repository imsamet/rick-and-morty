import Card from "@/src/components/card";
import Filter from "@/src/components/filter";
import Search from "@/src/components/searchInput";
import { useSelector } from "@/src/hooks/useRedux";
import { ScrollView, StyleSheet, View } from "react-native";
const CharactersList: React.FC = () => {
  // status location
  const { characters } = useSelector((state) => state.app);
  return (
    <View style={styles.container}>
      <Filter />
      <ScrollView>
        <View style={styles.content}>
          {characters.map((i) => (
            <Card
              key={i.id}
              name={i.name}
              image={i.image}
              episode={i.episode.length}
              status={i.status}
              location={i.location.name}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    gap: 30,
    backgroundColor: "#fff",
  },
  content: {
    gap: 20,
  },
});
export default CharactersList;
