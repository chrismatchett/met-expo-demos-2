import React, { useRef, useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Network from 'expo-network';
import Tello from 'rn-dji-tello';

function HomeScreen({ navigation }) {

    const [init, setInit] = useState(false);
    const drone = useRef(Tello);

    async function getIp(){
        await Network.getIpAddressAsync();
    }

    const onInit = () => {
        try {

            drone.current = new Tello();

            drone.current.on('connection', () => {
                setInit(true);
                console.log('Connected to drone');
            });

            drone.current.on('state', state => {
                console.log('Received State > ', state);
            });

            drone.current.on('send', (err, length) => {
                if (err) {
                    console.log('error', err);
                }
                console.log(`Sent command is ${length} long`);
            });

            drone.current.on('message', message => {
                console.log('Recieved Message > ', message);
            });

        } catch (error) {
            console.error(error);
            setInit(false);
        }
    };

    const run = async () => {
        await drone.current?.send('takeoff');
        await drone.current?.send('battery?');
        await drone.current?.send('land');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.viewWrapper}>
                <Text>IP: {getIp}</Text>
                <Button title="Run" disabled={!init} onPress={run} />
                <Button title="Init" disabled={init} onPress={onInit} />
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