import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react'
import { StyleSheet, Text, Image, View, Button, ScrollView,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Who is a big poopoo?' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Profile2" component={ProfileScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Button
        title="Is tings a poo?"
        onPress={() =>
          navigation.navigate('Profile')
        }
      />
      <Button
        title="Is gogo a poo?"
        onPress={() =>
          navigation.navigate('Profile2')
        }
      />
      <Image source={pooPic} />
      <Image source={pooPic} />
      <Image source={pooPic} />
      <Image source={pooPic} />
      <Image source={pooPic} />
    </ScrollView>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text> YES ! SHE IS THE BIGGEST POO! </Text>
  
};

const ProfileScreen2 = ({ navigation, route }) => {
  return <Text> NO! HE IS NOT! </Text>;
};

const pooPic = {
  uri: 'https://elephant.art/wp-content/uploads/2019/11/poop-emoji.jpg',
  width: 64, 
  height: 64
}

