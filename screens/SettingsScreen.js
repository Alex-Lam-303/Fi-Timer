import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {{color: '#FFA62B', fontSize: 20}}> Coming soon! </Text>
            <Button
                title = "Click Here"
                onPress = {() => alert('Tings is a poo!')}
            />
        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16697A'
    }
})