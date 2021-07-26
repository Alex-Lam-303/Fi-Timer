import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
  tableHead: ['Exercise', 'Sets', 'Reps', 'Rest'],
  tableData: [
    ['Bench Press', '4', '10', '90'],
    ['Bent-Over Row', '4', '10', '90'],
    ['Back Squat', '4', '8', '120'],
    ['Overhead Press', '4', '12', '60'],
    ['Seated Leg Curl', '4', '12', '60'],
    ['Incline Bicep Curl', '4', '12', '60'],
    ['Tricep Pushdown', '4', '12', '60'],
  ],
};

export default function WOTable() {
  return (
    <View style={tableStyle.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[2, 1, 1, 1]}
          style={tableStyle.head}
          textStyle={tableStyle.text}
        />
        <TableWrapper style={tableStyle.wrapper}>
          <Rows
            data={CONTENT.tableData}
            flexArr={[2, 1, 1, 1]}
            style={tableStyle.row}
            textStyle={tableStyle.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
}

const tableStyle = StyleSheet.create({
  head: { height: 40, backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  row: { height: 28},
  text: { textAlign: 'center' },
});