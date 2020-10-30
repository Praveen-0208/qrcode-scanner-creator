import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  const pressed = (page) => {
    navigation.navigate(page);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.6}
        onPress={() => pressed('Scan')}>
        <Text style={styles.btnText}>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.6}
        onPress={() => pressed('Generate')}>
        <Text style={styles.btnText}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Home;
