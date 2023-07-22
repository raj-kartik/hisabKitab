import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { setCredit } from '../Redux/CreditDebitRedux/CSlice';
import { useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';


export default function Home() {


  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectRadio, setSelectedRadio] = useState(1);  
  const [details,setDetails] = useState({
    id:'',
    name:'',
    number:'',
    accountNumber:'',
    credit:true
  })
  const handleButton = ()=>{
      let uniqueId = DeviceInfo.getUniqueId();
      handleTextChange('id',uniqueId);
      dispatch(setCredit(details));
      setDetails({
        id: '',
        name: '',
        number: '',
        accountNumber: '',
        amount: '',
        credit: true,
      });
        selectRadio===1 ? navigation.navigate('Credit'):navigation.navigate('Debit');
    }

    const handleTextChange = (inputName,value)=>{
    setDetails(prevData =>({
        ...prevData,
        [inputName]:value,
    }))
    }
  return (
    <View style={styles.container}>
      <View style={styles.credDeb}>
        <View style={styles.InputDetail}>
          <Text style={styles.context}>Name</Text>
          <TextInput
            value={details.name}
            style={styles.inputStyle}
            placeholder="Mukesh"
            placeholderTextColor={'#776d6d'}
            onChangeText={text => handleTextChange('name', text)}
          />
        </View>

        <View style={styles.InputDetail}>
          <Text style={styles.context}>Number</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => handleTextChange('number', text)}
            value={details.number}
            maxLength={10}
            keyboardType="numeric"
            placeholder="1234567890"
            placeholderTextColor={'#776d6d'}
          />
        </View>

        <View style={styles.InputDetail}>
          <Text style={styles.context}>Account Number</Text>
          <TextInput
            style={styles.inputStyle}
            value={details.accountNumber}
            onChangeText={text => handleTextChange('accountNumber', text)}
            maxLength={14}
            keyboardType="numeric"
            placeholder="1234567890"
            placeholderTextColor={'#776d6d'}
          />
        </View>

        <View style={styles.InputDetail}>
          <Text style={styles.context}>Amount</Text>
          <TextInput
            style={styles.inputStyle}
            value={details.amount}
            onChangeText={text => handleTextChange('amount', text)}
            keyboardType="numeric"
            placeholder="1234567890"
            placeholderTextColor={'#776d6d'}
          />
        </View>
        <View style={styles.AccountStyles}>
          <Text style={styles.AccountContext}>Account Type</Text>

          <View style={styles.CDstyles}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelectedRadio(1);
                  handleTextChange('credit', true);
                }}>
                <View style={styles.credit} value={details.credit}>
                  <View style={styles.radio}>
                    {selectRadio === 1 ? (
                      <View style={styles.radioBG}></View>
                    ) : null}
                  </View>
                  <Text value={details.credit} style={styles.CDText}>
                    Credit
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelectedRadio(2);
                  handleTextChange('credit', false);
                }}>
                <View style={styles.debit} value={details.debit}>
                  <View style={styles.radio}>
                    {selectRadio === 2 ? (
                      <View style={styles.radioBG}></View>
                    ) : null}
                  </View>
                  <Text style={styles.CDText}>Debit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.bSubmit} onPress={() => handleButton()}>
        <View style={{padding: 10}}>
          <Text style={{fontWeight: 'bold'}}>Submit</Text>
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#413c68',
            margin: 5,
            padding: 15,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Transactions')}>
          <Text style={{fontWeight: 'bold'}}>Transactions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  credMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputDetail: {
    backgroundColor: '#954040',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  context: {},
  inputStyle: {
    opacity: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 2,
    color: '#000',
    fontSize: 18,
  },
  AccountStyles: {
    backgroundColor: '#954040',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  AccountContext: {
    fontWeight: 'bold',
  },
  CDstyles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexDirection:'row',
    // backgroundColor:"#fff",
    margin: 8,
  },
  credit: {
    backgroundColor: '#3c9538',
    padding: 10,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
},
debit: {
    backgroundColor: '#a63015',
    padding: 10,
    borderRadius: 10,
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    // paddingLeft:1
  },
  CDText: {
    fontWeight: 'bold',
  },
  bSubmit: {
    backgroundColor: '#7d1962',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  radio:{
    height:20,
    width:20,
    borderColor:'#fff',
    borderWidth:2,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  radioBG:{
    backgroundColor:'#fff',
    height:12,
    width:12,
    borderRadius:10,
    // margin:1,
  }
});
