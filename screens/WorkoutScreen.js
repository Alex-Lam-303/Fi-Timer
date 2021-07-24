import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const WorkoutScreen = ({navigation}) => {
    return (
          <Stack.Navigator>
            <Stack.Screen
              name="StartingStack"
              component={StartingStack}
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="WorkoutTime" 
              component={WorkoutStack}
              options={{
                  headerTitle: props => <LogoTitle {...props} />,
                  headerStyle: {
                  backgroundColor: '#16697A',
                },
                tabBarVisible: false, 
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
      );
}

function LogoTitle() {
    return (
      <Image
        style={{ width: 25, height: 25 }}
        source={require('../assets/icons/exercises.png')}
      />
    );
  }
  

const StartingStack = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {{color: '#FFA62B', fontSize: 20}}> Today:  </Text>
            <Button
                title = "Start Workout"
                color = '#F8F1F1'
                onPress={() =>
                    navigation.navigate('WorkoutTime', {name: "WorkoutTime"})
                }
            />
        </View>
    );
}

const WorkoutStack = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {{color: '#FFA62B', fontSize: 20}}> Tings is a poo! </Text>
        
        </View>
    );
}


export default WorkoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16697A'
    }
})