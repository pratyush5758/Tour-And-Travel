import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.mainview}>
        <View style={styles.preview}>
          <Text style={styles.maintext}>Go</Text>
        </View>
        <View style={styles.secview}>
          <Text style={styles.text}>Travel</Text>
        </View>
      </View>
      <View style={styles.secondview}>
        <Text style={styles.secondtext}>Enjoy the trip with</Text>
        <Text style={styles.textpre}>Good Moments</Text>
      </View>
      <View style={styles.primaryview}>
        <Text style={styles.primarytext}>
          Preparing for a trip is an exciting process. You may do all the
          necessary things as buying tickets and booking a hotel, but forget to
          pack travel essentials.
        </Text>
      </View>
      <View style={styles.mainbgcolor}></View>
      <View style={styles.prebgcolor}></View>
      <View style={{marginTop: -690}}>
        <ImageBackground
          source={IMAGES.TRAVEL}
          style={{width: 480, height: 500}}>
          <View style={styles.BtnShadow}>
            <TouchableOpacity style={styles.Buttom}>
              <Text style={styles.GoButtom}>GO</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  preview: {
    backgroundColor: '#000000',
    width: 50,
    borderRadius: 30,
  },
  maintext: {
    color: '#08c1ce',
    fontSize: 30,
    padding: 5,
    textAlign: 'center',
  },
  secview: {
    marginLeft: 5,
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
  secondview: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  secondtext: {
    fontSize: 25,
    color: 'black',
    letterSpacing: 1,
  },
  textpre: {
    color: '#08c1ce',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  primaryview: {
    marginHorizontal: 10,
    marginTop: 15,
    width: 400,
  },
  primarytext: {
    letterSpacing: 1,
    lineHeight: 20,
  },
  Buttom: {
    backgroundColor: '#00BAC7',
    alignItems: 'center',
    height: 90,
    width: 90,
    borderRadius: 60,

    padding: 25,
    margin: 10,
  },
  BtnShadow: {
    borderWidth: 4,
    width: 120,
    height: 120,
    marginTop: 320,
    marginHorizontal: 170,
    borderRadius: 60,
    borderColor: '#00BAC7',
  },
  GoButtom: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  mainbgcolor: {
    backgroundColor: '#08c1ce',
    height: 410,
    width: 210,
    marginLeft: 220,
    marginVertical: 20,
    borderTopLeftRadius: 700,
    borderBottomLeftRadius: 700,
  },
  prebgcolor: {
    backgroundColor: '#e99265',
    height: 500,
    width: 270,
    marginTop: -150,

    borderTopRightRadius: 700,
  },
});
