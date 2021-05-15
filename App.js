import React from 'react';
import * as Location from 'expo-location';
import {Alert} from 'react-native';
import axios from 'axios';
import Loading from './Loading';
import Weather from './Weather';

const API_KEY = "b0cd65c70cf014eaf87c668425ed739b";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (lat, lon) => {
    const {data: {main: {temp}, weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading: false, condition: weather[0].main, temp});
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getForegroundPermissionsAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Sorry", "Can't find you")
    }
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const {isLoading, temp, condition} = this.state;
    return(
      isLoading ? <Loading /> : <Weather condition={condition} temp={Math.round(temp)} />
    );
  }
}