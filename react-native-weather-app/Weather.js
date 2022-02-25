import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTyoes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = { 
  Thunderstorm: {
    iconName:"weather-lightning",
    gradient: ["#00F260", "#0575E6"],
    title: "Thunderstorm",
    subtitle: "just don't go outside"
  },
  Drizzle: {
    iconName:"weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "weather-hail"
  },
  Rain: {
    iconName:"weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Rain",
    subtitle: "I don't wanna go outside today"
  },
  Snow: {
    iconName:"weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "really cold"
  },
  Atmosphere: {
    iconName:"weather-fog",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Atmosphere",
    subtitle: "I don't know what that mean"
  },
  Clear: {
    iconName:"weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Clear",
    subtitle: "weather-sunny"
  },
  Clouds: {
    iconName:"weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, fokin boring"
  },
  Haze: {
    iconName:"weather-cloudy-alert",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "weather-cloudy-alert "
  },
  Mist: {
    iconName:"weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist",
    subtitle: "weather-hail 🌨"
  },
  Dust: {
    iconName:"weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dust",
    subtitle: "fokin china ☝"
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
          <Text style={styles.temp}>{temp}°</Text>
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
    fontSize: 42,
    color: "white"
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  title: {
    marginBottom: 10,
    textAlign: "left",
    fontSize: 44,
    fontWeight: "300",
    color: "white"
  },
  subtitle: {
    textAlign: "left",
    fontSize: 24,
    color: "white"
  }
});