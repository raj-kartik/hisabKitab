import {View, StyleSheet,Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Card from '../Card/Card';
import { useNavigation } from '@react-navigation/native';

export default function Credit() {
  const navigaiton = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flex: 10}}>
        <Card />
      </View>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#c57f7f',
            margin: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}
          onPress={() => navigaiton.navigate('Transactions')}>
          <Text style={styles.textContainer}>All Transactions </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20
  }
})