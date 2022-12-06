import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
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
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
   }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress(JSON.stringify(item))
    }>
      <Text>{item.name}, £{item.price}</Text>
    </TouchableOpacity>
  );

  const onPress = (msg) => {
    //alert(msg);
    navigation.navigate('Order', { pizza: msg });
  };

  useEffect(() => {
    getPizzas();
  }, []);

  
  return (
    <View style={styles.container}>
      <View style={[styles.section, {flex:1}]}>
        <Text style={styles.heading1}>Welcome to Mario's</Text>
        <Text style={styles.spacer} >You are logged in as {emailAddress}</Text>
      </View>
      <View style={[styles.section, {flex:2}]}>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  spacer:{
    margin: 10
  }
});

export default WelcomeScreen;
