import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTyoes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: ""
  },
  Drizzle: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: ""
  },
  Rain: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: ""
  },
  Snow: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: ""
  },
  Atmosphere: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: ""
  },
  Clear: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: ""
  },
  Clouds: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: ""
  },
  Haze: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: ""
  },
  Mist: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: ""
  },
  Dust: {
    iconName: "",
    gradient: [],
    title: "",
    subtitle: ""
  }
};

export default function Weather({temp, condition}) {
  return(
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white" />
          <Text style={styles.temp}></Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTyoes = {
  temp: PropTyoes.number.isRequired,
  condition: PropTyoes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  title: {

  },
  subtitle: {

  }
});