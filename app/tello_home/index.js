import React, { useRef, useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import dgram from 'react-native-udp'

function HomeScreen({ navigation }) {

    const [init, setInit] = useState("init");


    async function getIp(){
        await Network.getIpAddressAsync();
    }

    const run = () => {
        try{
            const socket = dgram.createSocket('udp4')
        } catch(err){
            setInit(JSON.stringify(err));

        }
        
        /*
        socket.bind(4000)
        socket.once('listening', function() {
          socket.send('Hello World!', undefined, undefined, "4000", "0.0.0.0", function(err) {
            if (err) throw err
        
            console.log('Message sent!')
          })
        })
        socket.on('message', function(msg, rinfo) {
          console.log('Message received', msg)
        })
        */
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.viewWrapper}>
                <Text>IP: {init}</Text>
                <Button title="Run" onPress={run} />
            </View>
        </SafeAreaView>
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
    heading1: {
        fontSize: 32,
        fontWeight: '900'
    },
    input: {
        backgroundColor: 'white',
        padding: 8
    },
    spacer: {
        margin: 10
    }
});

export default HomeScreen;