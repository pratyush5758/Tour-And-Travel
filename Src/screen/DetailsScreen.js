import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.mainview}>
        <ImageBackground
          source={route.params.Detail.image}
          style={styles.img}
          imageStyle={{borderRadius: 10}}>
          <View style={styles.iconview}>
            <View style={styles.left}>
              <AntDesign name="left" size={25} color={'#08c1ce'} />
            </View>
            <View style={styles.hearto}>
              <AntDesign name="hearto" size={25} color={'white'} />
            </View>
          </View>
          <View style={styles.price}>
            <Text style={styles.pricetext}>&#xFF04; 99/person</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.titelview}>
        <Text style={styles.titletext}>{route.params.Detail.title}</Text>
      </View>
      <View style={styles.locationview}>
        <Text style={{color: '#08c1ce'}}>{route.params.Detail.icondir}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {route.params.Detail.Name}
        </Text>
      </View>
      <View style={styles.icondirection}>
        <View style={styles.staricon}>
          <Text style={{color: `#ff8c00`}}>{route.params.Detail.icon}</Text>
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {route.params.Detail.rate}
          </Text>
          <Text style={{fontSize: 15}}>{route.params.Detail.rating}</Text>
        </View>
        <View style={styles.temperatureicon}>
          <Text style={{color: `#87ceeb`}}>{route.params.Detail.icontem}</Text>
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {route.params.Detail.celcius}
          </Text>
          <Text style={{fontSize: 15}}>{route.params.Detail.temp}</Text>
        </View>
        <View style={styles.directionicon}>
          <Text style={{color: `#8b008b`}}>{route.params.Detail.icondir}</Text>
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {route.params.Detail.km}
          </Text>
          <Text style={{fontSize: 15}}>{route.params.Detail.dire}</Text>
        </View>
      </View>
      <View style={styles.reviewcontainer}>
        <View style={styles.secondcontainer}>
          <Text style={styles.secondcontainertext}>
            {route.params.Detail.known}
          </Text>
        </View>
        <Text style={styles.reviewtext}>{route.params.Detail.review}</Text>
      </View>
      <View style={styles.maintext}>
        <Text style={styles.pretext}>{route.params.Detail.text}</Text>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Book Now</Text>
        <AntDesign name="arrowright" size={30} color={'#fff'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  mainview: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  img: {
    height: 300,
    width: 390,
  },
  iconview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  left: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 30,
    height: 30,
    alignItems: 'center',
    padding: 1,
  },
  hearto: {
    backgroundColor: '#08c1ce',
    borderRadius: 10,
    width: 35,
    height: 30,
    alignItems: 'center',
    padding: 3,
  },
  price: {
    marginHorizontal: 10,
    marginTop: 200,
  },
  pricetext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titelview: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  titletext: {
    color: '#08c1ce',
    fontWeight: '500',
    fontSize: 20,
  },
  locationview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  icondirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  staricon: {
    backgroundColor: '#CFD3D2',
    width: 35,
    padding: 3,
    borderRadius: 10,
    alignItems: 'center',
  },
  temperatureicon: {
    backgroundColor: '#ebf8ff',
    width: 35,
    padding: 3,
    borderRadius: 10,
    alignItems: 'center',
  },
  directionicon: {
    backgroundColor: '#eef0ff',
    width: 35,
    padding: 3,
    borderRadius: 10,
    alignItems: 'center',
  },
  reviewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fbfbfb',
    borderRadius: 10,
    marginHorizontal: 10,
    height: 50,
    alignItems: 'center',
    marginTop: 15,
  },
  maintext: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  pretext: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
    lineHeight: 20,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#08c1ce',
    justifyContent: 'center',
    height: 50,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  btntext: {
    fontSize: 20,
    color: '#fff',
    marginRight: 10,
  },
  secondcontainer: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 210,
    borderRadius: 25,
    backgroundColor: 'white',
    height: 45,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  secondcontainertext: {
    color: '#08c1ce',
    fontSize: 20,
    marginTop: 7,
    textAlign: 'center',
  },
  reviewtext: {
    fontSize: 20,
  },
});
