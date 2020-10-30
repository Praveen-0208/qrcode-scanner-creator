import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Display = ({navigation, route}) => {
  const [qrdata, setQrdata] = useState('');
  const [qrscanner, setQrscanner] = useState('');

  useEffect(() => {
    const {data, scanner} = route.params;

    setQrdata(data);
    setQrscanner(scanner);
  }, []);

  const rescan = () => {
    qrscanner.reactivate();
    navigation.goBack();
  };

  const goHome = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>
        Data: <Text style={{fontWeight: 'normal'}}>{qrdata.data}</Text>
      </Text>
      <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={rescan}>
        <Text style={styles.btnText}>Re Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={goHome}>
        <Text style={styles.btnText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    margin: 30,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#C61CF7',
    fontSize: 15,
    borderRadius: 10,
    shadowColor: '#DF8EF6',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Display;
