import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Footers } from './src/footers';
import { Client } from './src/infoClient';
import { Navbar } from './src/navbar';
import { YourCar } from './src/YourCar';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Navbar />
      <YourCar />
      <Client />
      <Footers />
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    maxWidth: 390
  }
});
