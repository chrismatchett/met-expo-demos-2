import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

const Flex = () => {

  return (

    <View style={styles.container}>
      <View style={{ flex: 2, backgroundColor: "red" }}>
        <Text style={styles.title}>This screen has one big View. A View is a type of layout container.</Text>
        <Text style={styles.title}>Within the big View there are 3 nested Views which are red, orange and green.</Text>
        <Text style={styles.title}>The green view has a further 2 nested Views.</Text>
        <Text style={styles.title}>Both the orange and green Views are using margin, padding and borders.</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "darkorange" }}>
        <View style={styles.box}>
          <Text style={styles.title}>
            https://reactnative.dev/docs/flexbox
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "green" }}>
        <View style={[styles.box, {flex: 2, justifyContent: "center"}]}>
          <Text style={styles.title}>
            {greeting}
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>
            Expo > API Reference > Layout Props
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //flexDirection: "row",
    marginTop: 40,
    backgroundColor: "silver",
    padding: 5,
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 10,
    borderWidth: 5,
    borderColor: "black",
    backgroundColor: "#ffcc00"
  },
  title: {
    fontSize: 16,
    fontWeight: 900
  }
});

export default Flex;
