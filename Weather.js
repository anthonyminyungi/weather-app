import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#373b44', '#4286f4'],
    title: 'Thunder⚡️',
    subtitle: 'Stay at home, As much as possible',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#89f7fe', '#66a6ff'],
    title: "It's raining.",
    subtitle: 'But not that much.',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#00c6fb', '#005bea'],
    title: 'It`s raining. 🌧',
    subtitle: "Don't forget your umbrella.☂️",
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7de2fc', '#b9b6e5'],
    title: 'Snow ~ ❄️',
    subtitle: 'Do you wanna build a snowman?☃️',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#ff7300', '#fef253'],
    title: 'Sunny!',
    subtitle: "Let's go anywhere outside!",
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#232526', '#414345'],
    title: 'Many Clouds🌫',
    subtitle: "It's gloomy weather. ",
  },
  Smoke: {
    iconName: 'weather-fog',
    gradient: ['#bdc3c7', '#2c3e50'],
    title: 'Smoky day',
    subtitle: "Don't forget wearing a mask. 😷",
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#bdc3c7', '#2c3e50'],
    title: 'Mist🌫',
    subtitle: "I can't see even ahead",
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Haze',
    subtitle: "It's better to stay at home.",
  },
  Fog: {
    iconName: 'weather-fog',
    gradient: ['#bdc3c7', '#2c3e50'],
    title: 'Foggy🌫',
    subtitle: "I can't see even ahead",
  },
  Sand: {
    iconName: 'weather-cloudy-alert',
    gradient: ['#3E5151', '#DECBA4'],
    title: 'Sandy',
    subtitle: "Don't forget wearing a mask. 😷",
  },
  Dust: {
    iconName: 'weather-cloudy-alert',
    gradient: ['#3E5151', '#DECBA4'],
    title: 'Dusty day',
    subtitle: "Don't forget wearing a mask. 😷",
  },
  Ash: {
    iconName: 'weather-cloudy-alert',
    gradient: ['#bdc3c7', '#2c3e50'],
    title: 'Ash..',
    subtitle: '',
  },
  Squall: {
    iconName: 'weather-hurricane',
    gradient: ['#373b44', '#4286f4'],
    title: 'Squall🌪',
    subtitle: 'Pleas stay at home. It`s Dangerous outside.',
  },
  Tornado: {
    iconName: 'weather-tornado',
    gradient: ['#373b44', '#4286f4'],
    title: 'Tornado🌪',
    subtitle: 'Pleas stay at home. It`s Dangerous outside.',
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color={'white'}
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Clear',
    'Clouds',
    'Smoke',
    'Mist',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Dust',
    'Ash',
    'Squall',
    'Tornado',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: '#fff',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 42,
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
