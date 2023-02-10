# Belfast Met - IoT App Development

## Overview
Mobile App Design and IoT are two of the most exciting areas of Technology. In this class you will learn how to create a Mobile App. You will programme your new App to control IoT sensors and devices. You will create your App using React Native. React Native is a popular framework maintained by Facebook that enables cross-platform native apps using JavaScript. Some knowledge of programming and Javascript is recommended but not essential.

## Troubleshooting
The Met computers are blocking tunneling to the Expo App. To setup Expo on your own laptop you will need the following software.

* Node LTS version, https://nodejs.org/en/
* Git, https://git-scm.com/
* Visual Studio Code, https://code.visualstudio.com/

## Classwork

### Exercise 1

Once you have the software above installed follow the Set up section in the Expo documentation to get up and running.

* https://docs.expo.dev/get-started/installation/

### Exercise 2

Now you are up and running with Expo work your way through their Tutorial

* https://docs.expo.dev/tutorial/planning/

### Exercise 3

We will learn how to layout components in our App.

* Copy the code from ./01-ShapesColours.js to your ./App.js file and test it works.
* Edit this code to recreate the layout in the graphic file, ./assets/layout.png.
* Get your ./App.js code to look as much like the graphic as possible.

### Exercise 4

We will learn how to use Git to store revisions of our code and share our code with the rest of the Class.

Follow the instructions in the following article to push your existing Expo folder to a new Git Repository.

* Before you start working through the article below run the following commands in Visual Studio Code terminal.
* git config --global user.name "John Doe"
* git config --global user.email johndoe@example.com
* https://techobservatory.com/how-to-push-code-from-visual-studio-code-to-github/

Some notes about Git

* Your .gitignore file means certain files and folders are excluded from your repository e.g. node_modules. 
* Programmers don't want you to publish all your node modules and dependencies.
* Your package.json file documents the packages required by your App.
* ```npx expo install``` will install the packaged and dependencies for your project.

### Exercise 5

Follow the instructions on how to navigate between screens.

* https://docs.expo.dev/guides/routing-and-navigation/
* https://reactnavigation.org/docs/hello-react-navigation/

Try to recreate the following two screens. Clicking on the 'Details' button sends a parameter, the number 42, to the Details Screen.

* https://github.com/chrismatchett/met-expo-demos-2/blob/main/assets/navigation.png

### Exercise 6

Create an app that looks and behaves like the screens below. This builds on what we have been learning.

You will need to learn how to use [TextInput](https://docs.expo.dev/versions/latest/react-native/textinput/) to recreate below.

![Pizza Screen](https://github.com/chrismatchett/met-expo-demos-2/blob/main/assets/pizza-screens.png?raw=true)

### Exercise 7

We can extend the functionality of our app by connecting to a remote data source and dis.

* Use [Fetch](https://reactnative.dev/docs/network) to retrieve data from a remote source
* Use [FlatList](https://reactnative.dev/docs/flatlist) to display the data

![Pizza Screen](https://github.com/chrismatchett/met-expo-demos-2/blob/main/assets/pizza-screen-fetch.png?raw=true)

## The Tello Drone Project

![Tello Drone Team](assets/drone-class-202302.jpg?raw=true "Tello Drone Team")

Philip O'Meara, Gerard King, Chris Matchett, 07/02/2023

### Overview

To conclude the IoT App Development night class of 2022/2023 the class made an app to control the Tello Drone. There were quite a few challenges but we were delighted to eventually get the drone to fly.

### Challenges getting the drone to fly

#### There is no built-in Expo module for the Tello drone

* We used the rn-dji-tello module which is known to work on React Native, not Expo.
* Intially the rn-dji-tello would not work as Expo has no built-in support for UDP connections.
* Tello drones connect to remote devices by UDP.

#### There is no built-in Expo support for UDP.

* We eventually created a test UDP connection using the react-native-udp package. 
* Our environment required react-native-udp 4.1.5, later versions would not build.

#### The Expo Go App does not support UDP connections.

* We used the built in Expo module,  expo-dev-client.
* We built an APK file so we could test our own local Android app.
* The local Expo App did support UDP connections

#### The Local Expo Dev App would not work without Internet Connectivity 

* Connection to the Tello drone requires connecting your device to the Tello's built-in WiFi network.
* The local Expo App hangs without a working Internet connection.
* Therefore we could use the local Expo App any further.

#### React Native as a solution

* React Native did not have an issue establishing a UDP connection to the Tello drone in development mode.
* We ported our code from the Expo app to React Native and were delighted to see the drone fly in response to our app's commands. 
* [React Native Tello Drone App](https://github.com/chrismatchett/met-expo-drone)




