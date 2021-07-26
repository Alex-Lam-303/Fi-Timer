import React from 'react';
import { View, Text, Button, Animated, ScrollView, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import WOTable from '../components/table'
import CountDown from '../components/countdown'

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
              name="WorkoutStack" 
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

const StartingStack = ({navigation}) => {
  return (
      <View style = {styles.container_Start}>
          <Text style = {{color: '#FFA62B', fontSize: 20}}> Today:  </Text>
          <Button
              title = "Start Workout"
              color = '#F8F1F1'
              onPress={() =>
                  navigation.navigate('WorkoutStack', {name: "WorkoutStack"})
              }
          />
      </View>
  );
}

const WorkoutStack = ({navigation}) => {
  return (
      <ScrollView style = {styles.container}>
        <View style = {styles.countdown} />
          <CountDown/>
        <View style = {styles.table}>
          <WOTable/>
        </View>
      </ScrollView>
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

export default WorkoutScreen;

const styles = StyleSheet.create({
  container_Start: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16697A'
  },
  container_Workout: {
    flex: 1,
    backgroundColor: '#F8F1F1',
  },
  countdown: {
    top: 10,
    width: '100%',
    height: 100,
    position: 'relative',
  },
  table: {
    position: 'relative',
    top: 150,
    paddingLeft: 5, 
    paddingRight: 5,
  },
});