import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import QrCode from 'react-native-qrcode-svg';

const Generator = () => {
  const [data, setData] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter QR Data"
        onChangeText={(text) => {
          setData(text);
        }}
        style={styles.input}
      />
      <View style={styles.codeContainer}>
        {data !== '' && <QrCode value={data} size={200} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
  },
  codeContainer: {
    margin: 20,
  },
});

export default Generator;
