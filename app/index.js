import { StyleSheet, Text, View, Image } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.profileCard}>
          <View style={styles.profileImage}>
            <Image source={require("../img/catToBread.jpg")} style={{ width: 250, height: 80 }} />
          </View>
          <View style={styles.circleImageContainer}>
            <Image source={require("../img/cat.jpg")} style={styles.circleImage} />
          </View>
          <View style={styles.word}>
            <Text style={styles.title}>吳函蓁</Text>
            <Text style={styles.subtitle}>111219005</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#d7a45b",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  profileCard: {
    width: 350,
    height: 225,
    backgroundColor: "#ffedc0",
    borderRadius: 10,
  },
  profileImage: {
    width: 350,
    height:112,
    paddingTop:10,
    backgroundColor:"white",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  circleImageContainer: {
    position: "absolute",
    top: 70,
    left: "18%",
    transform: [{ translateX: -50 }],
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white",
  },
  circleImage: {
    width: "100%",
    height: "100%",
  },
  word: {
    width: 350,
    paddingLeft: 15,
    paddingTop: 34,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#201a1a",
  },
  subtitle: {
    fontSize: 16,
    color: "#201a1a",
  },
});
