import { StyleSheet, View, Text, StatusBar} from 'react-native';

export default function Loading() {
  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting Weather...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "skyblue"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 25
  }
})
