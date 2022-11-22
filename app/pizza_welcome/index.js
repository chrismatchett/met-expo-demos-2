import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function WelcomeScreen({ route, navigation }) {

  const { emailAddress} = route.params;
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.heading1}>Welcome to Mario's</Text>
      <Text style={styles.spacer} >We will send updates to {emailAddress}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading1:{
    fontSize: 32,
    fontWeight: '900'
  },
  input:{
    backgroundColor: 'white',
    padding: 8
  },
  spacer:{
    margin: 10
  }
});

export default WelcomeScreen;