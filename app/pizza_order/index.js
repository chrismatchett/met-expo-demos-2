import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import pizza from '../../assets/pizza.jpg';

function OrderScreen({ route, navigation }) {

  const { pizza } = route.params;
  
  let data = JSON.parse(pizza); 


  return (
    <View style={styles.container}>
      <View style={[styles.section, {backgroundColor: "white"}]}>
        <Text style={styles.heading1}>Order</Text>
        <Text>{data.name}</Text>
        <Text>£{data.price}</Text>
        <Text>{data.description}</Text>
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
      //justifyContent: 'center',
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
  

  export default OrderScreen;