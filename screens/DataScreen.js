import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const DataScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text> DataScreen </Text>
            <Button
                title = "Click Here"
                onPress = {() => alert('Button Clicked!')}
            />
        </View>
    );
}

export default DataScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16697A'
    }
})