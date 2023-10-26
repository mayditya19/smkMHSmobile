import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          height: 52,
          backgroundColor: 'red',
          marginhorizontal: 16,
          borderRadius: 99,
          MarginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertikal: 16,
        }}>
        <Image
          source={require('../assets/image2.png')}
          style={{width: 140, height: 32, marginRight: 16}}
        />

        <Image
          source={require('../assets/menu.png')}
          style={{width: 24, height: 24, marginRight: 16}}
        />
      </View>

      <View>
        <Text
          style={{
            marginTop: 32,
            marginLeft: 16,
            fontSize: 15,
          }}>
          Selamat Datang di
        </Text>

        <Text
          style={{
            marginTop: 4,
            marginLeft: 16,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 32,
          }}>
          Kantin Multistudi
        </Text>

        <Text
          style={{
            marginTop: 32,
            marginLeft: 16,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 14,
          }}>
          Menu Makanan
        </Text>
      </View>

      {/* {burger} */}
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Image
            source={require('../assets/burger.png')}
            style={{
              marginRight: 6,
              marginTop: 12,
            }}
          />
        </TouchableOpacity>

        {/* {seblak} */}
        <Image
          source={require('../assets/seblak.png')}
          style={{
            marginRight: 6,
            marginTop: 12,
          }}
        />
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: -250,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 16,
          }}>
          Sleburg item
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: -25,
            marginLeft: 96,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 16,
          }}>
          Seblak
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: 1,
            marginLeft: -265,
            fontWeight: 'bold',
            color: '#E54F4F',
            fontSize: 16,
          }}>
          Rp 32.000
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: -25,
            marginLeft: 125,
            fontWeight: 'bold',
            color: '#E54F4F',
            fontSize: 16,
          }}>
          Rp 20.000
        </Text>
      </View>

      {/* {menu minuman} */}
      <View>
        <Text
          style={{
            marginTop: 56,
            marginLeft: 16,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 14,
          }}>
          Menu Minuman
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../assets/mint.png')}
          style={{
            marginRight: 6,
            marginTop: 12,
          }}
        />

        <Image
          source={require('../assets/soda.png')}
          style={{
            marginRight: 6,
            marginTop: 12,
          }}
        />
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: -269,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 16,
          }}>
          Mint soda
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: -25,
            marginLeft: 115,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 16,
          }}>
          Air Sehat
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: 1,
            marginLeft: -265,
            fontWeight: 'bold',
            color: '#E54F4F',
            fontSize: 16,
          }}>
          Rp 25.000
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: -25,
            marginLeft: 125,
            fontWeight: 'bold',
            color: '#E54F4F',
            fontSize: 16,
          }}>
          Rp 50.000
        </Text>
      </View>

      {/* <TouchableOpacity
        onPress={() => navigation.navigate ('Detail')}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          backgroundColor: 'red',
          marginTop: 20,
        }}>
        <Text>Open Detail</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Home;
