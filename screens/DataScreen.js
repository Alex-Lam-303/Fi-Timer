import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
const DataScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {{color: '#FFA62B', fontSize: 20}}> Coming soon! </Text>
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

// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';
 
// export default class ExampleOne extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableHead: ['Exercise', 'Sets', 'Reps', 'Rest'],
//       tableData: [
//         ['1', '2', '3', '4'],
//         ['a', 'b', 'c', 'd'],
//         ['1', '2', '3', '456\n789'],
//         ['a', 'b', 'c', 'd']
//       ]
//     }
//   }
 
//   render() {
//     const state = this.state;
//     return (
//       <View style={styles.container}>
//         <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//           <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//           <Rows data={state.tableData} textStyle={styles.text}/>
//         </Table>
//       </View>
//     )
//   }
// }
 
// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   head: { height: 40, backgroundColor: '#f1f8ff' },
//   text: { margin: 6 }
// });