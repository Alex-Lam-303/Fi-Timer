import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const ExercisesScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {{color: '#FFA62B', fontSize: 20}}> Coming soon! </Text>
        </View>
    );
}

export default ExercisesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16697A'
    }
})