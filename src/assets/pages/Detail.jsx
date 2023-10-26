import {View, Text, Image} from 'react-native';
import React from 'react';

const Detail = () => {
  return (
    <View>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 16,}}>

        </View>
      <View
        style={{
          height: 40,
          marginLeft: 16,
          backgroundColor: 'red',
          marginhorizontal: 16,
          borderRadius: 99,
          marginTop: 16,
          flexDirection: 'row',
          paddingLeft: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 40,
        }}>
        <Image
          source={require('../assets/row.png')}
          style={{width: 24, height: 24, marginRight: 10}}
        />

        <Text style={{
            fontSize: 12,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 16,
            marginTop:1,
        }}
        
        >Kembali</Text>
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../assets/burger2.png')}
          style={{
            marginRight: 16,
            marginLeft: 16,
            marginTop: 64,
          }}
        />
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 12,
        }}>
        <Text
          style={{
            marginLeft: 16,
            color: 'black',
          }}>
          Sleburg
        </Text>
        <Text
          style={{
            marginLeft: 16,
            color: '#E54F4F',
          }}>
          Rp 32.000
        </Text>
      </View>
      
      <View style={{
            marginTop: 32,
            marginLeft: 16,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 14,
          }}>
        <Text>
          Menu Makanan
        </Text>

      </View>
       
    </View>
  );
};

export default Detail;
