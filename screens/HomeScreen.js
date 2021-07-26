import React from 'react';
import {StyleSheet, Text, View, Image, Button, focused, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {{color: '#FFA62B', fontSize: 20}}> Coming soon! </Text>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16697A'
    }
})