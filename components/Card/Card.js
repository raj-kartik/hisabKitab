import {View, StyleSheet,ScrollView,Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Card() {
  const userData =useSelector(state => state.cslice);
  return (
    <View >
      <ScrollView>
        {Object.values(userData).map((item) => (
          <View
            key={item.id}
            style={
              styles.amounContainer}>
            <View style={styles.detailContainer}>
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

              {/* <View>
                <Text style={styles.normalText}>Credit</Text>
                <Text style={styles.dataText}>
                  {userData.credit === true ? (
                    <Text style={styles.dataText}>True</Text>
                  ) : (
                    <Text style={styles.dataText}>False</Text>
                  )}
                </Text>
              </View> */}
            </View>

            <View style={styles.amount}>
              <View style={{flex:1}} >
                <Text style={styles.normalText}>Amount</Text>
                <Text style={styles.dataText}>{userData.amount}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      

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
    backgroundColor:'#41349a'
  },
  detailContainer: {},
  amount: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
