import React from 'react';
import {StyleSheet, Text, View, Image, focused, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import DataScreen from '../screens/DataScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style = {{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress = {onPress}
    >
        <View style = {{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#DB6400'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions = {{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#F8F1F1',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow,
                }
            }}>
            <Tab.Screen name = "Home"  component = {HomeScreen} options = {{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source = {require('../assets/icons/home.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#DB6400' : '#748c94'
                            }}
                        />
                        <Text 
                            style = {{color: focused ? '#DB6400' : '#748c94', fontSize: 12}}>
                            HOME 
                        </Text>
                    </View>
                ),
            }} />
            <Tab.Screen name = "Exercises"  component = {ExercisesScreen} options = {{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source = {require('../assets/icons/exercises.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#DB6400' : '#748c94'
                            }}
                        />
                        <Text 
                            style = {{color: focused ? '#DB6400' : '#748c94', fontSize: 12}}>
                            EXERCISES 
                        </Text>
                    </View>
                ),
            }} />
            <Tab.Screen name = "Workout" component = {WorkoutScreen}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source = {require('../assets/icons/start.png')}
                            resizeMode = "contain"
                            style = {{
                                width: 35,
                                height: 35,
                                tintColor: '#fff'
                            }}
                        />

                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {... props} />
                    )
                }}
            />
            <Tab.Screen name = "Data" component = {DataScreen} options = {{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source = {require('../assets/icons/data.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#DB6400' : '#748c94'
                            }}
                        />
                        <Text 
                            style = {{color: focused ? '#DB6400' : '#748c94', fontSize: 12}}>
                            DATA
                        </Text>
                    </View>
                ),
            }} />
            <Tab.Screen name = "Settings" component = {SettingsScreen} options = {{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source = {require('../assets/icons/settings.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#DB6400' : '#748c94'
                            }}
                        />
                        <Text 
                            style = {{color: focused ? '#DB6400' : '#748c94', fontSize: 12}}>
                            SETTINGS
                        </Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

export default Tabs;

const styles = StyleSheet.create ({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})