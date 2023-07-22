import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function Card() {
  const data = useSelector(state => state.persistedReducer);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data?.map((item )=> (
        <View key={item.id} style={{flex:1,backgroundColor:'#823e3e'}}>
          <View >
            <View>
              <Text style={styles.normalText}>Name</Text>
              <Text style={styles.dataText}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.normalText}>Number</Text>
              <Text style={styles.dataText}>{item.number}</Text>
            </View>
            <View>
              <Text style={styles.normalText}>Account Number</Text>
              <Text style={styles.dataText}>{item.accountNumber}</Text>
            </View>
          </View>
          <View style={styles.amount}>
            <View style={styles.amountInner}>
              <Text style={styles.normalText}>Amount</Text>
              <Text style={styles.dataText}>{item.amount}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  normalText: {
    fontSize: 15,
    color: 'white',
  },
  dataText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  amounContainer: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#41349a',
  },
  detailContainer: {},
  amount: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountInner: {
    flex: 1,
    alignItems: 'center',
  },
});
