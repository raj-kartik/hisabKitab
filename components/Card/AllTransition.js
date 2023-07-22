import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function AllTransition() {
  const navigaiton = useNavigation();
  const data =  useSelector(state => state.persistedReducer);
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={{flex: 20}}>
        {data.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: '#a76060',
              margin: 5,
              paddingTop: 5,
              borderRadius: 10,
              paddingLeft: 10,
            }}>
            <View>
              <Text style={{fontSize: 15}}>Name</Text>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                {item.name}
              </Text>
            </View>

            <View>
              <Text style={{fontSize: 15}}>Number</Text>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                {item.number}
              </Text>
            </View>

            <View>
              <Text style={{fontSize: 15}}>Account Number</Text>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                {item.accountNumber}
              </Text>
            </View>

            {item.credit === true ? (
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>Credit</Text>
            ) : (
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>Debit</Text>
            )}
          </View>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => navigaiton.navigate('Home')}
        style={{
          backgroundColor: '#752525',
          margin: 5,
          alignContent: 'center',
          justifyContent: 'center',
          borderRadius: 44,
          padding: 10,
          flex: 1,
        }}>
        <View>
          <Text style={{textAlign: 'center'}}>Add More Transactions</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  normalText: {
    fontSize: 15,
  },
  dataText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  amounContainer: {
    margin: 10,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailContainer: {},
  amount: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
