import { StyleSheet, View, Text, StatusBar} from 'react-native';

export default function Loading() {
  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  text: {

  }
})
