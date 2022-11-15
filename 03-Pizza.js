import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import pizza from './assets/pizza.jpg';

function HomeScreen({ navigation }) {

  const [text, onChangeText] = React.useState(null);
  
  return (
    <View style={styles.container}>
      <View style={[styles.section, {backgroundColor: "teal"}]}>
        <Image source={pizza} style={{ width: 280, height: 180 }} /> 
      </View>
      <View style={[styles.section, {backgroundColor: "white"}]}>
        <Text style={styles.heading1}>Mario's Pizza</Text>
        <Text>The best pizza in Belfast</Text>
      </View>
        <View style={[styles.section, {backgroundColor: "orangered"}]}>
          <View>
            <TextInput 
              style={styles.input}
              placeholder='Email address' 
              backgroundColor='white'
              value={text} 
              onChangeText={onChangeText}
            />
            <Button
              title="Get updates from Mario's Pizza"
              onPress={() => {
                navigation.navigate('Welcome', {
                  emailAddress: text,
                });
              }}
            />
          </View>
        </View>
    </View>
  );
}

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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
