/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [openHomeScreen, setOpenHomeScreen] = useState(false);

  const redirectToHomeScreen = userData => {
    console.log('TT01 Login button press', userData);
    setOpenHomeScreen(true);
  };

  return (
    <SafeAreaView style={styles.baseContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.baseContainer}>
        {openHomeScreen ? (
          <HomeScreen />
        ) : (
          <LoginScreen onLoginButtonPress={() => redirectToHomeScreen()} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  baseContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
