import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {IMAGES} from '../assets';
import {useNavigation} from '@react-navigation/native';
const Hotel_name = [
  {
    id: 'Hotel_1',
    image: IMAGES.SUNSET,
    title: 'Valley Of Dream',
    Name: 'New Mexico',
    icon: <AntDesign name="star" size={25} />,
    icontem: <AntDesign name="cloud" size={25} />,
    icondir: <Entypo name="location-pin" size={25} />,
    rate: 4.8,
    rating: '2k rating',
    celcius: '20c',
    temp: 'Temperature',
    km: '7.2km',
    dire: 'Direction',
    known: 'Know Detail',
    review: 'Reviews(46)',
    text: 'The hotel industry is one of the most important components of the wider service industry, catering for customers who require overnight accommodation. It is closely associated with the travel industry and the hospitality industry, although there are notable differences in scope.',
  },
  {
    id: 'Hotel_2',
    image: IMAGES.THILAND,
    title: 'Nusa Penida',
    Name: 'New Dubai',
    icon: <AntDesign name="star" size={25} />,
    icontem: <AntDesign name="cloud" size={25} />,
    icondir: <Entypo name="location-pin" size={25} />,
    rate: 4.8,
    rating: '2k rating',
    celcius: '20c',
    temp: 'Temperature',
    km: '7.2km',
    dire: 'Direction',
    known: 'Know Detail',
    review: 'Reviews(46)',
    text: 'The hotel industry is one of the most important components of the wider service industry, catering for customers who require overnight accommodation. It is closely associated with the travel industry and the hospitality industry, although there are notable differences in scope.',
  },
  {
    id: 'Hotel_3',
    image: IMAGES.MUMBAI,
    title: 'Nusa Penida',
    Name: 'Mumbai',
    icon: <AntDesign name="star" size={25} />,
    icontem: <AntDesign name="cloud" size={25} />,
    icondir: <Entypo name="location-pin" size={25} />,
    rate: 4.8,
    rating: '2k rating',
    celcius: '20c',
    temp: 'Temperature',
    km: '7.2km',
    dire: 'Direction',
    known: 'Know Detail',
    review: 'Reviews(46)',
    text: 'The hotel industry is one of the most important components of the wider service industry, catering for customers who require overnight accommodation. It is closely associated with the travel industry and the hospitality industry, although there are notable differences in scope.',
  
  },
];
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.Header}>
        <View style={styles.Headerview}>
          <Text style={styles.Discover}>Discover </Text>
          <Text style={styles.BeautyText}>The Beauty today</Text>
        </View>
      </View>
      <View style={styles.SearchContainer}>
        <View style={styles.Search}>
          <Ionicons name="md-search-outline" size={25} color={'gray'} />
          <TextInput placeholder="Seach...." style={styles.TextInput} />
        </View>
        <View style={styles.Microphone}>
          <FontAwesome name="microphone" size={20} color={'#00C0CD'} />
        </View>
      </View>
      <View style={styles.SecondContainer}>
        <View style={styles.ImgVector}>
          <Image source={IMAGES.HOTEL} style={styles.Image} />
          <Text style={styles.TextSecond}>Hotel</Text>
        </View>
        <View style={styles.ImgVector}>
          <Image source={IMAGES.EVENT} style={styles.Image} />
          <Text style={styles.TextSecond}>Event</Text>
        </View>
        <View style={styles.ImgVector}>
          <Image source={IMAGES.CAMP} style={styles.Image} />
          <Text style={styles.TextSecond}>Camp</Text>
        </View>
        <View style={styles.ImgVector1}>
          <Image source={IMAGES.TRIP} style={styles.Image1} />
          <Text style={styles.TextSecond}>Trips</Text>
        </View>
      </View>
      <View style={styles.ThirdContainerview}>
        <Text style={styles.Trips}>Top Trips</Text>
        <View style={styles.TopTripsview}>
          <Text style={styles.Explore}>Explore</Text>
          <AntDesign name="arrowright" size={25} color="#90B9BD" />
        </View>
      </View>
      <FlatList
        data={Hotel_name}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailsScreen', {Detail: item})
            }>
            <View style={styles.FourthContainerview}>
              <View style={styles.ImageContainerview}>
                <Image source={item.image} style={styles.ValleyImg} />
                <Text style={styles.Valley}>{item.title}</Text>
                <View style={styles.city}>
                  <Entypo name="location-pin" size={20} color={'#000'} />
                  <Text style={styles.New}>{item.Name}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#fff',
  },
  Headerview: {
    marginHorizontal: 15,
    paddingVertical: 30,
  },
  Discover: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#025F67',
  },
  BeautyText: {
    fontSize: 27,
    color: '#406174',
  },
  Search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  TextInput: {
    fontSize: 20,
    paddingLeft: 10,
  },
  SearchContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    height: 60,
    borderRadius: 20,
    borderColor: '#F1F1F1',
    backgroundColor: '#FFFFFF',
  },
  Microphone: {
    backgroundColor: '#FCFCFC',
    marginRight: 15,
    borderWidth: 1,
    width: 40,
    height: 42,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#F2F2F2',
  },
  SecondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 40,
    marginHorizontal: 10,
  },
  ImgVector: {
    backgroundColor: '#ECECEC',
    width: 85,
    height: 85,
    borderRadius: 50,
    padding: 10,
  },
  ImgVector1: {
    backgroundColor: '#ECECEC',
    width: 85,
    height: 85,
    borderRadius: 50,
    padding: 5,
  },
  Image: {
    width: 65,
    height: 65,
  },
  Image1: {
    width: 80,
    height: 70,
  },
  TextSecond: {
    fontSize: 19,
    paddingVertical: 20,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    color: '#4A8E92',
  },
  ThirdContainerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 40,
  },
  TopTripsview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Trips: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#156B72',
  },
  Explore: {
    fontSize: 20,
    color: '#82B1B5',
    marginRight: 10,
  },
  ValleyImg: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  ImageContainerview: {
    paddingTop: 10,
  },
  city: {
    flexDirection: 'row',
    marginTop: 5,
  },
  FourthContainerview: {
    borderWidth: 2,
    width: 200,
    height: 280,
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#efefef',
  },
  Valley: {
    fontSize: 22,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  New: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 5,
  },
});
