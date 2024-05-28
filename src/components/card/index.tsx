import { Status } from "@/src/store/core/_model";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
type Props = {
  name: string;
  image: string;
  episode: number;
  status: Status;
  location: string;
};
const Card: React.FC<Props> = ({ name, image, episode, status, location }) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
        contentFit="cover"
        transition={1000}
      />
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.episode}>
          Episodes: <Text style={styles.bold}>{episode}</Text>
        </Text>
        <Text style={styles.episode}>
          Locations: <Text style={styles.bold}>{location}</Text>
        </Text>
        <View
          style={[
            styles.status,
            status === "Alive"
              ? styles.alive
              : status === "Dead"
              ? styles.dead
              : styles.unknow,
          ]}
        >
          <Text>{status}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 6,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 3,
  },
  textBox: {
    flex: 1,
    gap: 5,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
  },
  episode: {
    color: "#999999",
  },
  bold: {
    fontWeight: "600",
    color: "#000",
  },
  status: {
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 3,
    width: 90,
    alignItems: "center",
  },
  alive: {
    backgroundColor: "#18DB2B",
  },
  dead: {
    backgroundColor: "#F0361D",
  },
  unknow: {
    backgroundColor: "#F0CE1D",
  },
});
export default Card;
