import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTyoes from 'prop-types';

export default function Weather({temp, condition}) {
  return(
    
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