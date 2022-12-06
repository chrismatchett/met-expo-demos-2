import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function WelcomeScreen({ route, navigation }) {

  const { emailAddress} = route.params;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
	   
  const getPizzas = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/chrismatchett/met-expo-demos-2/main/assets/pizza.json');
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
   }

  const renderItem = ({ item }) => (
    <Text>{item.name}, £{item.price}</Text>
  );

  useEffect(() => {
    getPizzas();
  }, []);

  
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading1}>Welcome to Mario's</Text>
        <Text style={styles.spacer} >We will send updates to {emailAddress}</Text>
      </View>
      <View style={styles.section}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
	    keyExtractor={({ id }, index) => id}
	    renderItem={renderItem}
	  />
	)} 
      </View>
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
