import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const Scanner = ({navigation}) => {
  const [scanner, setScanner] = useState('');

  const readHandler = (data) => {
    navigation.navigate('Data', {
      data,
      scanner,
    });
  };

  return (
    <View>
      <QRCodeScanner
        onRead={readHandler}
        flashMode={RNCamera.Constants.FlashMode.auto}
        showMarker={true}
        markerStyle={{borderColor: '#AEB5B6'}}
        ref={(element) => {
          setScanner(element);
        }}
        cameraStyle={{height: Dimensions.get('window').height}}
      />
    </View>
  );
};

export default Scanner;
